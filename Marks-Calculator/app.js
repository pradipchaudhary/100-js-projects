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

	const totalMarks = english + nepali + math + science;
	const percentage = Math.round((totalMarks / maxMarks) * 100);

	result.innerText = `You have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}%`;
};


// convert string to number
// const stringToNumber = +number;
// console.log(stringToNumber);
// console.log("type: ", typeof stringToNumber);
