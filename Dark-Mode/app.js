// DOM Elements
const title = document.querySelector(".title");
const toggleButton = document.querySelector("#toggleButton");

// console.log(title.innerHTML, toggleButton.src);

const toggleMode = () => {
    var fullPath = document.getElementById("toggleButton").src;
    // var filename = fullPath.replace(/^.*[\\\/]/, "");
    // or, try this,
    var filename = fullPath.split("/").pop();

    document.getElementById("result").value = filename;
};

// Call Function to toggle
toggleMode();
