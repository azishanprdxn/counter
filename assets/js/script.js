/* Author: Zishan Ansari */
let count = Number(document.getElementById('count').innerHTML);

// Function to Decrement Count
function lowerCount() {
  count--;
  if (count < 0) {
    count = 0;
    alert('Counter cannot be less than 0');
  }
  document.getElementById('count').innerHTML = count;
}

// Function to Increment Count
function addCount() {
  count++;
  document.getElementById('count').innerHTML = count;
}

let decrementCount = document.getElementById('lower-count');
let incrementCount = document.getElementById('add-count');

decrementCount.onclick = lowerCount;
incrementCount.onclick = addCount;