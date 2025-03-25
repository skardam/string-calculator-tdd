export function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiter = ",";
  let numbersString = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterEnd);
    numbersString = numbers.substring(delimiterEnd + 1);
  }

  const nums = numbersString.replace(/\n/g, delimiter).split(delimiter);
  return nums.reduce((sum, num) => sum + parseInt(num), 0);
}
