// const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example`;

const qrGeneratorBtn = document.getElementById("qrGeneratorBtn");
const qrForm = document.getElementById("qrForm");
const qrCode = document.querySelector(".qrCode");

// Render QR Code
const renderQRCode = (url) => {
	const imageTag = qrCode.getElementsByTagName("img");
	const img = document.createElement("img");
	img.setAttribute("src", url);
	console.log("note image tag");
	qrCode.appendChild(img);

	// if (imageTag) {
	// 	const img = document.createElement("img");
	// 	img.setAttribute("src", url);
	// 	console.log("have image Tage");
	// } else {
	// 	const img = document.createElement("img");
	// 	img.setAttribute("src", url);
	// 	console.log("note image tag");
	// 	qrCode.appendChild(img);
	// }
};
// renderQRCode(
// 	"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"
// );

qrForm.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log("QR Generator...", e);

	const formData = new FormData(qrForm);
	let qrText = formData.get("qrText");
	let qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`;
	renderQRCode(qrCodeUrl);
	qrForm.reset();
});
