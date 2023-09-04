const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=default`;

// DOM elements
const inputText = document.getElementById("inputText");

function generateQrCode(url) {
    fetch(url)
        .then((response) => {
            return response.blob();
        })
        .then((qrCode) => {
            // const img = document.createElement("img");
            const qrCodeEl = document.querySelector("qrCode");
            var img = URL.createObjectURL(qrCode);
            // Do whatever with the img
            console.log(img);
            // document.getElementById("qrImage").setAttribute("src", img);
        })
        .catch();
}

generateQrCode(qrCodeUrl);
