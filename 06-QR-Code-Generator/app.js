const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=default`;

// DOM elements
const inputText = document.getElementById("inputText");
const qrGeneratorBtn = document.querySelector("#qrGeneratorBtn");
const qrImage = document.querySelector("#qrImage");

// QR Generator
function qrGenrator(e) {
    e.preventDefault();
    let qrValue = inputText.value;
    if (!qrValue) return;

    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    inputText.value = "";
}

qrGeneratorBtn.addEventListener("click", qrGenrator);

// Default qr value on page load
window.addEventListener("load", function () {
    qrImage.src = qrCodeUrl;
});
