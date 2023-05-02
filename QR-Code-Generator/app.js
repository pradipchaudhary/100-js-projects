const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example`;

const qrGeneratorBtn = document.getElementById("qrGeneratorBtn");
const qrForm = document.getElementById("qrForm");

qrForm.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log("QR Generator...");
});
