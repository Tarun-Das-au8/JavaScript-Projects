const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getNumber(){
  return Math.floor(Math.random()*hex.length);
}

btn.addEventListener("click", function(){
  let randomNumber = '#';
  for(let i=0; i<6; i++){
    randomNumber += hex[getNumber()]
  }
  color.textContent = randomNumber;
  document.body.style.backgroundColor = randomNumber;
})