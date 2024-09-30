function truncateString(str, maxLength) {
    // Check if the string length is greater than the maxLength
    if (str.length > maxLength) {
        // Slice the string and add "..."
        return str.slice(0, maxLength) + "...";
    }
    // Return the original string if it's not too long
    return str;
}

// Example Usage
// const longString = "This is a long string that needs to be truncated.";
// const shortString = truncateString(longString, 20);
// console.log(shortString); // Output: "This is a long str..."

export default truncateString;
