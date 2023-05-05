const transactionFormEl = document.getElementById("transactionForm");

const addTransaction = (e) => {
	e.preventDefault();
	const getData = new FormData(transactionFormEl);
	const getText = getData.get("text");
	const getAmount = getData.get("amount");
	console.log("Get Form Data: ", getText, getAmount);
};

// Event
transactionFormEl.addEventListener("submit", addTransaction);
