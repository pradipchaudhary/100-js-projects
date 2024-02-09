function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    let result;

    if (fromUnit === "meters" && toUnit === "feet") {
        result = inputValue * 3.28084;
    } else if (fromUnit === "meters" && toUnit === "inches") {
        result = inputValue * 39.3701;
    } else if (fromUnit === "feet" && toUnit === "meters") {
        result = inputValue / 3.28084;
    } else if (fromUnit === "feet" && toUnit === "inches") {
        result = inputValue * 12;
    } else if (fromUnit === "inches" && toUnit === "meters") {
        result = inputValue / 39.3701;
    } else if (fromUnit === "inches" && toUnit === "feet") {
        result = inputValue / 12;
    } else {
        result = inputValue; // If units are the same, no conversion needed
    }

    document.getElementById("result").innerHTML = `Result: ${result.toFixed(
        2
    )} ${toUnit}`;
}
