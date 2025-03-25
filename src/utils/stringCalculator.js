export function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  const nums = numbers.split(",");
  if (nums.length === 1) {
    return parseInt(nums[0]);
  }

  return parseInt(nums[0]) + parseInt(nums[1]);
}
