const prompt = document.getElementById("prompt");
const results = document.getElementById("results");
const callAPIButton = document.getElementById("callAPIButton");

async function callGPTAPI() {
    const url = "https://openai80.p.rapidapi.com/chat/completions";
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key":
                "427b07dec2msh118ebc141ef02f7p18784bjsn84bf633111be",
            "X-RapidAPI-Host": "openai80.p.rapidapi.com",
        },
        body: {
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: "${prompt.value}",
                },
            ],
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
callAPIButton.addEventListener("click", callGPTAPI);
