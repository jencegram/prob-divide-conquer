// Finds the floor of x in a sorted array
function findFloor(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  let floor = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // If arr[mid] is less than or equal to x, update floor and move left to search for a higher floor
    if (arr[mid] <= x) {
      floor = arr[mid];
      left = mid + 1;
    } else {
      // If arr[mid] is greater than x, move right to search in the left half
      right = mid - 1;
    }
  }

  return floor;
}

module.exports = findFloor;