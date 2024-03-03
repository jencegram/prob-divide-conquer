function countZeroes(arr) {
  // Initialize left and right pointers
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === 1) {
      // Move right since we're still in the 1's section
      left = mid + 1;
    } else {
      // Move left but do not exclude the current mid, it might be the first 0
      right = mid - 1;
    }
  }

  // The 'left' index is now at the first 0 or arr.length if there are no 0s
  return arr.length - left;
}

module.exports = countZeroes;
