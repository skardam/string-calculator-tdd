export function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  const { delimiter, numbersString } = parseInput(numbers);
  const nums = splitNumbers(numbersString, delimiter);

  checkForNegatives(nums);

  return nums.reduce((sum, num) => sum + parseInt(num), 0);
}

function parseInput(input) {
  let delimiter = ",";
  let numbersString = input;

  if (input.startsWith("//")) {
    const delimiterEnd = input.indexOf("\n");
    delimiter = input.substring(2, delimiterEnd);
    numbersString = input.substring(delimiterEnd + 1);
  }

  return { delimiter, numbersString };
}

function splitNumbers(numbersString, delimiter) {
  return numbersString.replace(/\n/g, delimiter).split(delimiter);
}

function checkForNegatives(numbers) {
  const negatives = numbers.filter((num) => parseInt(num) < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }
}
