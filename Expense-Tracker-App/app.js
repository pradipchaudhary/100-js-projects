const transactionFormEl = document.getElementById("transactionForm");

const addTransaction = (e) => {
	e.preventDefault();
	const formData = new FormData(transactionFormEl);

	const tData = {};
	// for (const pair of formData.entries()) {
	// 	console.log(pair[0] + ": " + pair[1]);
	// 	console.log(pair);
	// }
	formData.forEach((value, key) => {
		tData[key] = value;
	});
	console.log(tData);
	console.log(e.submitter.id);
};

// Event
transactionFormEl.addEventListener("submit", addTransaction);
