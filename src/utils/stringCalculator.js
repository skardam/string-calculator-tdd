export function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  const nums = numbers.replace(/\n/g, ",").split(",");
  return nums.reduce((sum, num) => sum + parseInt(num), 0);
}
