const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=default`;

// DOM elements
const inputText = document.getElementById("inputText");

function generateQrCode(url) {
    fetch(url)
        .then((response) => {
            console.log(response);
            return response.text();
        })
        .then((qrCode) => {
            const img = document.createElement("img");
            console.log(qrCode);
        })
        .catch();
}

generateQrCode(qrCodeUrl);
