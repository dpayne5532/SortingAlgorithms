// ========Bubble=Sort============================

var arr = [5, 1, 24, 64, 43, 123, 11, 22, 55, 76, 34, 21, 12, 35, 121, 45];

function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        
      }
      
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
