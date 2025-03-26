// src/utils/stringCalculator.js
export function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiter = ",";
  let numbersString = numbers;

  // Special handling for the literal '\n' in the input
  if (numbers.startsWith("//")) {
    // Check if it's using the literal '\n' or an actual newline
    if (numbers.includes("\\n")) {
      const parts = numbers.split("\\n");
      delimiter = parts[0].substring(2); // Get the delimiter
      numbersString = parts[1]; // Get the numbers portion
    } else if (numbers.includes("\n")) {
      const delimiterEnd = numbers.indexOf("\n");
      delimiter = numbers.substring(2, delimiterEnd);
      numbersString = numbers.substring(delimiterEnd + 1);
    }
  }

  // Split by the delimiter and compute sum
  const nums = numbersString.split(delimiter);

  // Check for negative numbers
  const negatives = nums.filter((num) => parseInt(num) < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  // Calculate sum
  return nums.reduce((sum, num) => {
    const parsedNum = parseInt(num.trim());
    return sum + (isNaN(parsedNum) ? 0 : parsedNum);
  }, 0);
}
