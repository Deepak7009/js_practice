function threeSum(nums) {
    nums.sort((a, b) => a - b);  // Sort the input array in ascending order
    const triplets = [];
  
    for (let i = 0; i < nums.length - 2; i++) {
      if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
        let lo = i + 1;
        let hi = nums.length - 1;
        const target = -nums[i];
  
        while (lo < hi) {
          if (nums[lo] + nums[hi] === target) {
            triplets.push([nums[i], nums[lo], nums[hi]]);
  
            while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
            while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
  
            lo++;
            hi--;
          } else if (nums[lo] + nums[hi] < target) {
            lo++;
          } else {
            hi--;
          }
        }
      }
    }
  
    return triplets;
  }
  
  // Example usage:
  const nums = [-1, 0, 1, 2, -1, -4];
  const result = threeSum(nums);
  console.log(result);