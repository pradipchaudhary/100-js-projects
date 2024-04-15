"use strict";
const list = document.querySelector(".projects-list");
// const projectsItems = document.getElementById("projects-items");

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
        (context.fillStyle = "rgba(0,0,0,0.05)");
    }),
    (this.update = function () {
      (this.x + this.radius > innerWidth || this.x - this.radius < 0) &&
        (this.dx = -this.dx),
        (this.y + this.radius > innerHeight || this.y - this.radius < 0) &&
          (this.dy = -this.dy),
        (this.x += this.dx),
        (this.y += this.dy),
        this.draw();
    });
}
(canvas.width = window.innerWidth),
  (canvas.height = window.innerHeight),
  (window.onresize = function () {
    (canvas.width = window.innerWidth), (canvas.height = window.innerHeight);
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
