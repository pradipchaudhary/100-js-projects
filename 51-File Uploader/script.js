document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");
    const fileList = document.getElementById("fileList");

    fileInput.addEventListener("change", handleFileSelect);

    function handleFileSelect(event) {
        const files = event.target.files;

        fileList.innerHTML = ""; // Clear existing file list

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const listItem = document.createElement("div");
            listItem.classList.add("file-item");

            const fileName = document.createElement("span");
            fileName.textContent = file.name;

            const fileSize = document.createElement("span");
            fileSize.textContent = ` (${formatBytes(file.size)})`;

            listItem.appendChild(fileName);
            listItem.appendChild(fileSize);

            fileList.appendChild(listItem);
        }
    }

    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return "0 Bytes";

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return (
            parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
        );
    }
});
