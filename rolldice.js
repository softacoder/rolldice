var dice, sumdice, sum;

// Describe this function...
function startagain() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  sumdice = [];
  let element_total = document.getElementById('total');
  element_total.innerText = 0;
  let element_list = document.getElementById('list');
  element_list.replaceChildren();
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

// Describe this function...
function displaytherolls() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  sumdice.push(randomMember(dice));
  let element_list2 = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = sumdice.slice(-1)[0];

  element_list2.appendChild(new_li);
  let element_total2 = document.getElementById('total');
  element_total2.innerText = sumdice.reduce((a,b) => a+b, 0);
  sum = sumdice.reduce((a,b) => a+b, 0);
}


dice = [1, 2, 3, 4, 5, 6];
sumdice = [0];


document.getElementById('button_roll').addEventListener('click', (event) => {
  displaytherolls();

});

document.getElementById('button_restart').addEventListener('click', (event) => {
  startagain();

});

document.getElementById('button_roll').addEventListener('click', (event) => {
  if (sum == 11) {
    let element_info = document.getElementById('info');
    element_info.innerText = 'Keep playing!';
  } else if (sum <= 11) {
    let element_info2 = document.getElementById('info');
    element_info2.innerText = 'You win!!!';
  } else if (sum >= 11) {
    let element_info3 = document.getElementById('info');
    element_info3.innerText = 'You lose!';
  }

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  sumdice.pop();
  let element_total3 = document.getElementById('total');
  element_total3.innerText = sumdice.reduce((a,b) => a+b, 0);

});