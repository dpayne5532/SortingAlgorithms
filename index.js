// https://www.toptal.com/developers/sorting-algorithms
// https://visualgo.net/en/sorting


var arr = [5, 1, 24, 64, 43, 123, 11, 22, 55, 76, 34, 21, 12, 35, 121, 45];
var arr2 = [1, 2, 3, 4, 5, 2, 6, 7]

// =======SWAP=HELPER=FUNCTION=====================

function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ========BUBBLE=SORT=============================

function bubbleSort(arr) {
  var noSwaps = true;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        noSwaps = false;
      }
    }
    if (noSwaps) {
      break;
    }
  }
  return arr;
}

// console.log(bubbleSort(arr));

// =========SELECTION=SORT==========================

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var min = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        swap(arr, min, j)
      }
    }   
  }
  return arr;
}
console.log(selectionSort(arr));

// =================================================
