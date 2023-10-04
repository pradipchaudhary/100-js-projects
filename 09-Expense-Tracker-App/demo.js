// DOM Element
const transactionFormEl = document.getElementById("transactionForm");
const netAmountEl = document.getElementById("netAmount");
const transactionsContainerEl = document.querySelector(".transactions");
const h1DivEl = document.createElement("h1");
h1DivEl.innerHTML = "Pradip Chaudhary";

// document.body.appendChild(h1DivEl);

// console.log((h1DivEl.innerHTML = "Pradip Chaudhary"));

// const transactionEl
// console.log(transactionsContainerEl.parentElement(name));

const initState = {
    earnings: 0,
    expenses: 0,
    net: 0,
    transaction: [
        //? Example data
        {
            id: 1,
            text: "Demo transaction",
            amount: 200,
            type: "credit",
        },
        {
            id: 1,
            text: "Demo transaction",
            amount: 200,
            type: "debit",
        },
        {
            id: 1,
            text: "Demo transaction",
            amount: 100,
            type: "credit",
        },
    ],
};

const total = initState.transaction.forEach(function (item) {
    if (item.type === "credit") {
        console.log(item.amount);
        let totalAmount = "";
        totalAmount += item.amount;
        console.log(totalAmount);
        // return item;
    }
});
console.log(total);

// console.log(initState.netAmount);
const renderTransaction = () => {
    const transaction = initState.transaction;

    // transaction.forEach((transaction) => {
    //     const { id, text, amount, type } = transaction;
    //     const isCredit = type === "credit" ? true : false;
    //     const transactionEl = `
    // 		<div class="transaction" key="id">
    // 			<div class="left">
    // 				<p>${text} </p>
    // 				<p>+ Rs. ${amount}</p>
    // 			</div>
    // 			<div class="status ${isCredit ? "credit" : "debit"}">${
    //         isCredit ? "C" : "D"
    //     }</div>
    // 		</div>
    // 	`;
    //     // transactionsContainerEl.insertAdjacentHTML("afterbegin", transactionEl);
    //     // transactionsContainerEl.appendChild(transactionEl);
    //     console.log(transactionEl);
    // });

    netAmountEl.innerHTML = initState.net;
};

renderTransaction();

const addTransaction = (e) => {
    e.preventDefault();
    const isEarn = e.submitter.id === "earnBtn" ? true : false;

    const formData = new FormData(transactionFormEl);
    const title = formData.get("text");
    const amount = formData.get("amount");

    if (title === "" || amount === "") {
        return false;
    }

    const transaction = {
        id: Math.floor(Math.random() * 1000),
        text: title,
        amount: +amount,
        type: isEarn ? "credit" : "debit",
    };
    initState.transaction.push(transaction);

    if (transaction.type == "credit") {
        console.log("hi");
        initState.earnings += transaction.amount;
        initState.net += transaction.amount;
    } else {
        initState.earnings -= transaction.amount;
        initState.net -= transaction.amount;
    }
    renderTransaction();
    title = "";
    amount = "";
};

// Event Called
transactionFormEl.addEventListener("submit", addTransaction);
