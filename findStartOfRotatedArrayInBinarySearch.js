var a = [15, 14, 13, 12, 11, 10, 9, 8, 7, 1, 2, 3, 4, 5, 6];

function findActualStartingElementOfRotatedArray(a) {
    var midElementIndex = Math.floor(a.length/2);
    var pre = 0;
    var cur = 0;
    var nxt = 0;

    if (a[midElementIndex + 1] > a[midElementIndex]) {

    for(var i=midElementIndex; i>=0; i--) {
      cur = a[i];
      pre = a[i+1];
      nxt = a[i-1];

      if (a[i] < a[i+1] && a[i] < a[i-1]) {
        console.log(a[i]);
        break;
      }
    }
  } else {

    for(var j=midElementIndex; j < a.length; j++) {
      cur = a[j];
      pre = a[j+1];
      nxt = a[j-1];

      if (a[j] < a[j+1] && a[j] < a[j-1]) {
        console.log(a[j]);
        break;
      }
    }
  }
}

findActualStartingElementOfRotatedArray(a);