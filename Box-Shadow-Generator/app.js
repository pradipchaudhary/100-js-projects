// DOM Element
const boxShadowsEl = document.querySelector(".boxShadow");
const offsetX = document.querySelector(".offset-x");
const offsetY = document.querySelector(".offset-y");
const radius = document.querySelector(".blur-radius");
const spread = document.querySelector(".spread-radius");
const shadowColor = document.querySelector(".shadowColor");
const codeEl = document.querySelector(".code");
// const boxShadowCode = `-webkit-box-shadow: 10px 10px 5px 0px
//                         rgba(0,0,0,0.75); <br />
//                         -moz-box-shadow: 10px 10px 5px 0px
//                         rgba(0,0,0,0.75);<br />
//                         box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);`;

function updateCode() {
    // code
}

const updateBoxShadow = () => {
    const v = `${offsetX.value}px ${offsetY.value}px ${radius.value}px ${spread.value}px ${shadowColor.value}`;
    const code = `box-shadow:${v}`;
    codeEl.innerHTML = code;
    console.log((boxShadowsEl.style.boxShadow = v));
    boxShadowsEl.style.boxShadow = v;

    // console.log(code);
};

updateBoxShadow();
// console.log(codeEl);
