"use strict";
const list = document.querySelector(".list");
const canvas = document.getElementById("pradip-canvas"),
    context = canvas.getContext("2d");
const ancherEl = document.querySelectorAll("a");

// Pre-loading
window.onload = function () {
    console.log("Loaded");
};

fetch("./projects.json")
    .then((res) => res.json())
    .then((data) => updateUI(data));

//  UpdateUI
const updateUI = (projects) => {
    projects.map(({ name, code, index }) => {
        const itemList = document.createElement("li");
        itemList.innerHTML = `
		<span class="project-number">${index}</span>
		<span class="project-name">
        <a href="/${index}-${name}/index.html" target="_blank" >
		    ${projectNameFormatter(name)}
		</a>
        </span>
		<a href="${code}" target="_blank" class="code-link">
		    ${"{"} code ${"}"} 
		</a>
		`;
        list.appendChild(itemList);
    });
};

// Project Name Formatter
const projectNameFormatter = (name) => {
    return name
        .split("-")
        .map((word) => word[0] + word.slice(1))
        .join(" ");
};

// Canvas Animation
function Circle(t, e, i, n, s) {
    (this.x = t),
        (this.y = e),
        (this.dx = i),
        (this.dy = n),
        (this.radius = s),
        (this.draw = function () {
            context.beginPath(),
                context.arc(this.x, this.y, this.radius, 2 * Math.PI, !1),
                (context.strokeStyle = "rgba(255,255,255, 0.1)"),
                context.stroke(),
                context.fill(),
                (context.fillStyle = "rgba(219, 219, 219, 0.300)");
        }),
        (this.update = function () {
            (this.x + this.radius > innerWidth || this.x - this.radius < 0) &&
                (this.dx = -this.dx),
                (this.y + this.radius > innerHeight ||
                    this.y - this.radius < 0) &&
                    (this.dy = -this.dy),
                (this.x += this.dx),
                (this.y += this.dy),
                this.draw();
        });
}
(canvas.width = window.innerWidth),
    (canvas.height = window.innerHeight),
    (window.onresize = function () {
        (canvas.width = window.innerWidth),
            (canvas.height = window.innerHeight);
    });
let circles = [];
for (let t = 0; t < 100; t++) {
    let t = 10 * Math.random(),
        e = Math.random() * (innerWidth - 2 * t) + t,
        i = Math.random() * (innerHeight - 2 * t) + t,
        n = Math.random() - 0.5,
        s = Math.random() - 0.5;
    circles.push(new Circle(e, i, n, s, t));
}
function render() {
    requestAnimationFrame(render),
        context.clearRect(0, 0, innerWidth, innerHeight);
    for (var t = 0; t < circles.length; t++) circles[t].update();
}
render();

// Custom cursor
const cursor = document.querySelector("#cursor");
let size;

document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
    );
});

document.addEventListener("mousemove", (ev) => {
    let path = ev.composedPath();
    cursor.classList.remove("expand");
    cursor.classList.add("cursor");

    if (path.some((x) => x.tagName == "A")) {
        cursor.classList.add("expand");
        cursor.classList.remove("cursor");
        console.log("Hover");
        size = 20;
    }
});
