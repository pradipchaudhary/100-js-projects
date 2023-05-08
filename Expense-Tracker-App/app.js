// DOM Element
const transactionFormEl = document.getElementById("transactionForm");
const netAmountEl = document.getElementById("netAmount");
const transactionsContainerEl = document.querySelector(".transactions");

const initState = {
	earnings: 0,
	expenses: 0,
	net: 0,
	transaction: [
		// {
		// 	id: 001,
		// 	text: "Demo transaction",
		// 	amount: 100,
		// 	type: "credit",
		// },
	],
};

const renderTransaction = () => {
	const transaction = initState.transaction;

	transaction.forEach((transaction) => {
		const { id, text, amount, type } = transaction;
		const isCredit = type === "credit" ? true : false;
		const transactionEl = `
			<div class="transaction">
				<div class="left">
					<p>${text} </p>
					<p>+ Rs. ${amount}</p>
				</div>
				<div class="status ${isCredit ? "credit" : "debit"}">${
			isCredit ? "C" : "D"
		}</div>
			</div>
		`;
		transactionsContainerEl.insertAdjacentHTML("afterbegin", transactionEl);
	});

	console.log("Hello world!");
};

const addTransaction = (e) => {
	e.preventDefault();

	const isEarn = e.submitter.id === "earnBtn" ? true : false;

	const formData = new FormData(transactionFormEl);

	const tData = {};
	formData.forEach((value, key) => {
		tData[key] = value;
	});
	const { text, amount } = tData;
	const transaction = {
		id: Math.floor(Math.random() * 1000),
		text: text,
		amount: +amount,
		type: isEarn ? "credit" : "debit",
	};
	initState.transaction.push(transaction);
	console.log(initState);
	renderTransaction();
};

// Event Called
transactionFormEl.addEventListener("submit", addTransaction);
