// Find the first occurrence of a number in a sorted array
function findFirst(arr, num) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] < num) low = mid + 1;
    else if (arr[mid] >= num) high = mid - 1;
  }
  return arr[low] === num ? low : -1;
}

// Find the last occurrence of a number in a sorted array
function findLast(arr, num) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] <= num) low = mid + 1;
    else if (arr[mid] > num) high = mid - 1;
  }
  return arr[high] === num ? high : -1;
}

// Counts occurrences of a number in a sorted array using binary search
function sortedFrequency(arr, num) {
  const firstOccurrence = findFirst(arr, num);
  if (firstOccurrence === -1) return -1; // num not found
  const lastOccurrence = findLast(arr, num);
  return lastOccurrence - firstOccurrence + 1;
}

module.exports = sortedFrequency;
