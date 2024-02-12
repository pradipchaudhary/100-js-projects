document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("startBtn");
    const output = document.getElementById("output");

    let recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        output.textContent = `You said: ${transcript}`;
    };

    recognition.onerror = function (event) {
        output.textContent = "Error occurred in recognition. Please try again.";
    };

    startBtn.addEventListener("click", function () {
        if (startBtn.textContent === "Start Listening") {
            recognition.start();
            startBtn.textContent = "Stop Listening";
        } else {
            recognition.stop();
            startBtn.textContent = "Start Listening";
        }
    });
});
