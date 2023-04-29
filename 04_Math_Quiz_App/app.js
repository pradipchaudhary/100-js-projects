// Create a Math question
// Math question will have a random generated
// Question Type Multiplicatin question  with random number range 1-10
// Answer will be the product of the random number range and the random number range
// User will have to answer question
// On submit  answer answer will be compared with random generated answer
// If answer will be correct than score will be incremented
// If answer will be wrong than score will be decremented

const question = document.getElementById("question");

const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

randomNumber();

const generateQuestion = () => {
	const randomNumber1 = randomNumber(1, 9);
	const randomNumber2 = randomNumber(2, 9);
	// console.log("randomNumber : ", randomNumber1, randomNumber2);

	const question = `Q. What is ${randomNumber1} multiply by ${randomNumber2} ?`;
	const answer = randomNumber1 * randomNumber2;
	return { question, answer };
};

console.log(generateQuestion());
