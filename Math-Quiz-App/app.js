const questionEl = document.getElementById("question");
const scoreEl = document.getElementById("score");
const answerEl = document.getElementById("answer");
const wrongAnswerEl = document.getElementById("wrongAnswer");
let storedAnswer;
let score = localStorage.getItem("score");

const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

randomNumber();

const generateQuestion = () => {
	const randomNumber1 = randomNumber(1, 9);
	const randomNumber2 = randomNumber(2, 9);
	const questionType = randomNumber(1, 4);
	let question;
	let answer;
	let firstNumber;
	let secondNumber;

	if (randomNumber1 > randomNumber2 && questionType > 2) {
		firstNumber = randomNumber1;
		secondNumber = randomNumber2;
	} else {
		firstNumber = randomNumber2;
		secondNumber = randomNumber1;
	}

	switch (questionType) {
		case 1:
			question = `Q. What is ${firstNumber} multiply by ${secondNumber} ?`;
			answer = firstNumber * secondNumber;
			break;
		case 2:
			question = `Q. What is ${firstNumber} Add to ${secondNumber} ?`;
			answer = firstNumber + secondNumber;
			break;
		case 3:
			question = `Q. What is ${firstNumber} Divided by ${secondNumber} ?`;
			answer = firstNumber / secondNumber;
			break;
		case 4:
			question = `Q. What is ${firstNumber} Subtract from ${secondNumber} ?`;
			answer = firstNumber - secondNumber;
			break;
	}

	return { question, answer };
};

const showQuestion = () => {
	const { question, answer } = generateQuestion();
	questionEl.innerText = question;
	storedAnswer = answer;
	if (score == null) {
		scoreEl.innerText = 0;
	} else {
		scoreEl.innerText = score;
	}
};

showQuestion();

const checkAnswer = (e) => {
	e.preventDefault();

	let userAnswer = parseInt(answerEl.value);

	if (storedAnswer == userAnswer) {
		score++;
		wrongAnswerEl.innerText = "";
	} else {
		score--;
		wrongAnswerEl.innerText = "Wrong answer. Please try again !";
		wrongAnswerEl.style.color = "red";
	}

	scoreEl.innerText = score;
	localStorage.setItem("score", score);
	e.target.reset();
	showQuestion();
	// answerEl.value = "";
};
