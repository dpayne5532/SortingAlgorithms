// ========Bubble=Sort============================

var arr = [5, 1, 24, 64, 43, 123, 11, 22, 55, 76, 34, 21, 12, 35, 121, 45];
var arr2 = [1, 2, 3, 4, 5, 6, 7]

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
  console.log(arr)
  return arr;
}

function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

bubbleSort(arr);

// ========================================================
