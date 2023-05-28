// DOM Element
const boxShadowsEl = document.querySelector(".boxShadow");
const offsetX = document.querySelector(".offset-x");
const offsetY = document.querySelector(".offset-y");
const radius = document.querySelector(".blur-radius");
const spread = document.querySelector(".spread-radius");
const shadowColor = document.querySelector(".shadowColor");
const codeEl = document.querySelector(".code");

// Displays current value in DOM
const offsetXValue = document.querySelector(".offset-x-value");
const offsetYValue = document.querySelector(".offset-y-value");
const radiusValue = document.querySelector(".blur-radius-value");
const spreadValue = document.querySelector(".spread-radius-value");
const opacityValue = document.querySelector(".opacity-value");

// const boxShadowCode = `-webkit-box-shadow: 10px 10px 5px 0px
//                         rgba(0,0,0,0.75); <br />
//                         -moz-box-shadow: 10px 10px 5px 0px
//                         rgba(0,0,0,0.75);<br />
//                         box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);`;

const updateBoxShadow = () => {
    const v = `${offsetX.value}px ${offsetY.value}px ${radius.value}px ${spread.value}px ${shadowColor.value}`;
    const code = `box-shadow: ${v}`;
    codeEl.innerHTML = code;
    boxShadowsEl.style.boxShadow = v;
    offsetXValue.innerHTML = `${offsetX.value} px`;
    offsetYValue.innerHTML = `${offsetY.value} px`;
    radiusValue.innerHTML = `${radius.value} px`;
    spreadValue.innerHTML = `${spread.value} px`;
};
[offsetX, offsetY, radius, spread, shadowColor].forEach((element) => {
    element.oninput = updateBoxShadow;
});
updateBoxShadow();
// console.log(codeEl);
