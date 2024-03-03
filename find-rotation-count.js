// Find the rotation count in a rorated sorted array
function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // If mid element is greater than the rightmost element, the minimum is to the right
    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      // The minimum is to the left or it is the mid element
      right = mid;
    }
  }

  // After loop, left will be pointing to the minimum element
  return left;
}

module.exports = findRotationCount;