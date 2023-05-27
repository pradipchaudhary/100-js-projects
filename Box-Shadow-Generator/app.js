// DOM Element
const boxShadows = document.querySelector(".boxShadow");
const offsetX = document.querySelector(".offset-x");
const offsetY = document.querySelector(".offset-y");
const radius = document.querySelector(".blur-radius");
const spread = document.querySelector(".spread-radius");
const shadowColor = document.querySelector(".shadowColor");

const updateBoxShadow = () => {
    const v = `${offsetX.value}px ${offsetY.value}px ${radius.value}px ${spread.value}px ${shadowColor.value}`;
    console.log(v);
};

updateBoxShadow();
