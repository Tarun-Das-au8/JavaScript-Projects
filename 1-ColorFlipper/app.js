const colors = ['green', 'red', 'blue', 'orange', 'yellow', 'sky', 'purple', 'gray'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function getNumber(){
  return Math.floor(Math.random()*colors.length);
}

btn.addEventListener("click", function(){
  // console.log(document.body);
  const randomNumber = getNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
})