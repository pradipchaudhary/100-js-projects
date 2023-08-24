// DOM Element
const inputs = document.querySelectorAll("input");
const boxShadowsEl = document.querySelector(".boxShadow");
const offsetX = document.querySelector(".offset-x");
const offsetY = document.querySelector(".offset-y");
const radius = document.querySelector(".blur-radius");
const spread = document.querySelector(".spread-radius");
const shadowColor = document.querySelector(".shadowColor");
const opacity = document.querySelector(".opacity");
const codeEl = document.querySelector(".code");

// Displays current value in DOM
const offsetXValue = document.querySelector(".offset-x-value");
const offsetYValue = document.querySelector(".offset-y-value");
const radiusValue = document.querySelector(".blur-radius-value");
const spreadValue = document.querySelector(".spread-radius-value");
const opacityValue = document.querySelector(".opacity-value");

// Hexadecimal to RGBA color
const hexToRGBA = (hex) => {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    console.log(r, g, b);
    return `rgba(${r}, ${g}, ${b}, ${opacity.value})`;
};

const updateBoxShadow = () => {
    offsetXValue.innerHTML = `${offsetX.value} px`;
    offsetYValue.innerHTML = `${offsetY.value} px`;
    radiusValue.innerHTML = `${radius.value} px`;
    spreadValue.innerHTML = `${spread.value} px`;
    opacityValue.innerHTML = `${opacity.value} px`;
    const v = `${offsetX.value}px ${offsetY.value}px ${radius.value}px ${
        spread.value
    }px ${hexToRGBA(shadowColor.value)}`;
    const code = `box-shadow: ${v}`;
    codeEl.innerHTML = code;
    boxShadowsEl.style.boxShadow = v;
};

inputs.forEach((element) => {
    element.oninput = updateBoxShadow;
});

updateBoxShadow();
// console.log(codeEl);
console.log(shadowColor.value);

hexToRGBA("#000000");
