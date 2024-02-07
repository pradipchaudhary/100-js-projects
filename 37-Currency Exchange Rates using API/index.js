<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currency Exchange Rates</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        #exchange-container {
            max-width: 400px;
            margin: auto;
        }

        #amount-input,
        #from-currency,
        #to-currency {
            width: 80%;
            padding: 8px;
            margin-bottom: 10px;
        }

        #convert-button {
            padding: 10px;
            cursor: pointer;
        }

        #result {
            margin-top: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Currency Exchange Rates</h1>
    <div id="exchange-container">
        <input type="number" id="amount-input" placeholder="Enter Amount">
        <select id="from-currency">
            <!-- Add currency options dynamically using JavaScript -->
        </select>
        <select id="to-currency">
            <!-- Add currency options dynamically using JavaScript -->
        </select>
        <button id="convert-button" onclick="convertCurrency()">Convert</button>
        <div id="result"></div>
    </div>

    <script>
        const apiKey = 'YOUR_EXCHANGE_RATE_API_KEY';
        const currencyApiUrl = 'https://open.er-api.com/v6/latest';

        // Fetch currency options when the page loads
        document.addEventListener('DOMContentLoaded', fetchCurrencies);

        function fetchCurrencies() {
            fetch(currencyApiUrl)
                .then(response => response.json())
                .then(data => {
                    const currencies = Object.keys(data.rates);
                    populateCurrencyOptions(currencies);
                })
                .catch(error => console.error('Error fetching currencies:', error));
        }

        function populateCurrencyOptions(currencies) {
            const fromCurrencySelect = document.getElementById('from-currency');
            const toCurrencySelect = document.getElementById('to-currency');

            currencies.forEach(currency => {
                const option = document.createElement('option');
                option.value = currency;
                option.textContent = currency;

                fromCurrencySelect.appendChild(option.cloneNode(true));
                toCurrencySelect.appendChild(option);
            });
        }

        function convertCurrency() {
            const amountInput = document.getElementById('amount-input');
            const fromCurrencySelect = document.getElementById('from-currency');
            const toCurrencySelect = document.getElementById('to-currency');
            const resultDiv = document.getElementById('result');

            const amount = amountInput.value;
            const fromCurrency = fromCurrencySelect.value;
            const toCurrency = toCurrencySelect.value;

            if (!amount || isNaN(amount) || amount <= 0) {
                alert('Please enter a valid amount.');
                return;
            }

            const convertApiUrl = `https://open.er-api.com/v6/convert?apiKey=${apiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`;

            fetch(convertApiUrl)
                .then(response => response.json())
                .then(data => {
                    resultDiv.textContent = `${amount} ${fromCurrency} = ${data.result.toFixed(2)} ${toCurrency}`;
                })
                .catch(error => console.error('Error converting currency:', error));
        }
    </script>
</body>
</html>
