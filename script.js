const max = 10;
const min = 1;
const guess_number = Math.floor(Math.random() * 10 + 1); // returns a random integer from 1 to 10 
let game_over = 3;
let repeat_entry = [];

console.log('RENDOM NUMBNER',guess_number);


//ui variables
const uiGuessNumber = document.querySelector('input#guess-number');
const uiSubmit = document.querySelector('#submit');
const uiMin = document.getElementById('min');
const uiMax = document.getElementById('max');
const uiMessage = document.querySelector('#message');
const uiRestart = document.getElementById('restart');


uiMin.textContent = min;
uiMax.textContent = max;
uiRestart.style.display = 'none';


uiSubmit.addEventListener('mousedown', runGuessNumber);
uiRestart.addEventListener('click',function refresh(){location.reload();});




function runGuessNumber(){
  let inputVal = parseInt(uiGuessNumber.value);

  console.log(inputVal);
  
 //check valid number
  if(isNaN(inputVal) || inputVal > max || inputVal < min){
      setMessage(`Please enter number between ${min} and ${max}`,'red');
      return;
    } 


  //check repeate entry
  repeat_entry.push(inputVal);
  repeat_entry.sort();
  let checkArr = []
  console.log(repeat_entry);
  for(let i = 0; i < repeat_entry.length; i++ ){
    if(repeat_entry[i] === repeat_entry[i + 1 ]){
      checkArr.push(repeat_entry[i]);
    }
  }
  if(checkArr.includes(inputVal)){
    setMessage(`Number ${inputVal} has been tried`, 'blue');
    return;
  }
  console.log('check array',checkArr);



  
  //check winning number
  if(inputVal === guess_number){
    gameReload();
    setMessage(`You win ! ${guess_number} is correct number`, 'green');
    return;
  }else{
    //count the available number of try
    game_over -= 1;
    if(game_over === 0){
      gameReload();
      setMessage(`Game is over. Correct Number is ${guess_number}`, 'red');
      return;
    }else{
      setMessage(`You have left ${game_over} try`, 'red');
      return;
    }
  }  
}

function gameReload(){
  uiGuessNumber.disabled = true;
  uiRestart.style.display = 'inline-block';
  uiSubmit.style.display = 'none';
  return;
}

function setMessage(msg, colour){
  uiMessage.style.color = colour;
  uiMessage.textContent = msg;
  return;
}


