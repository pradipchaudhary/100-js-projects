// DOM Element
const transactionFormEl = document.getElementById("transactionForm");
const netAmountEl = document.getElementById("netAmount");
const transactionsContainerEl = document.querySelector(".transactions");

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
            amount: 300,
            type: "credit",
        },
    ],
};

const renderTransactions = function () {
    const transactionLists = initState.transaction;

    transactionLists.map(function (transaction, index) {
        const { id, text, amount, type } = transaction;
        const isCredit = type === "credit" ? true : false;
        console.log(isCredit);
        // Create a new transaction item
        const transactionEl = document.createElement("div");
        transactionEl.className = "transaction";
        transactionEl.setAttribute("key", index);
        // Create left div and append to transaction div
        const leftEl = document.createElement("left");
        leftEl.className = "left";
        transactionEl.appendChild(leftEl);

        // Create status div and append to parent div
        const statusDiv = document.createElement("div");
        statusDiv.classList.add("status");
        const debitCredit = isCredit ? "credit" : "debit";
        statusDiv.classList.add(debitCredit);

        if (transaction.type === "debit") {
            statusDiv.className = "status debit";
            statusDiv.innerHTML = "D";
        } else {
            statusDiv.className = "status credit";
            statusDiv.innerHTML = "C";
        }
        transactionEl.appendChild(statusDiv);

        // Create Title Tag and append to parent div
        const titleEl = document.createElement("p");
        titleEl.innerHTML = text;
        leftEl.appendChild(titleEl);

        // Create right div and append to transaction div
        const priceEl = document.createElement("p");
        priceEl.innerHTML = `${isCredit ? "+" : "-"}  Rs. ${amount}`;
        leftEl.appendChild(priceEl);

        transactionsContainerEl.appendChild(transactionEl);
    });
};

renderTransactions();
