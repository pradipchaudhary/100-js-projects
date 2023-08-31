// DOM Element
const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiUrl = `https://api.api-ninjas.com/v1/dadjokes?limit=${1}`;
const apiKey = "MNemEr9THSVTCxISru9Snw==VJeeHWGzXAbYm3tw";

const options = {
	method: "GET",
	headers: {
		"X-Api-Key": apiKey,
	},
};

const getJoke = async () => {
	try {
		jokeEl.innerText = "Loading...";
		const response = await fetch(apiUrl, options);
		const data = await response.json();
		const joke = data[0].joke;
		jokeEl.innerText = joke;
	} catch (error) {
		jokeEl.innerText = "An error happened, try again later.";
		console.log(error);
	}
};
getJoke()

btnEl.addEventListener("click", getJoke);


