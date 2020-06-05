/* Author: Zishan Ansari */
let count = Number(document.getElementById('count').innerHTML);

let decrementCount = document.getElementById('lower-count');
let incrementCount = document.getElementById('add-count');

// Function to Decrement Count
decrementCount.onclick = () => {
  count--;
  if (count < 0) {
    count = 0;
    alert('Counter cannot be less than 0');
  }
  document.getElementById('count').innerHTML = count;
}

// Function to Increment Count
incrementCount.onclick = () => {
  count++;
  document.getElementById('count').innerHTML = count;
}