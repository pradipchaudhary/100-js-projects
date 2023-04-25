const calculatorFormEl = document.getElementById("calculatorForm");
const englishEl = document.getElementById("english");
const nepaliEl = document.getElementById("nepali");
const mathEl = document.getElementById("math");
const scienceEl = document.getElementById("science");
const result = document.getElementById("result");

const markCalculator = (event) => {
	event.preventDefault();

	const maxMarks = 400;

	const english = parseInt(englishEl.value);
	const nepali = parseInt(nepaliEl.value);
	const math = parseInt(mathEl.value);
	const science = parseInt(scienceEl.value);

	console.log("Mark : ", english, nepali, math, science);
	console.log("types of english numbers : ", english);

	const totalMarks = english + nepali + math + science;
	const percentage = Math.round((totalMarks / maxMarks) * 100);
	console.log(totalMarks);
	console.log(percentage);

	result.innerText = `You have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}%`;
};

// `You have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}%`;
