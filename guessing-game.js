
let button = document.getElementById('submitBtn');
let hint = document.getElementById('hint');
let result = document.getElementById('result');
let guesses = document.getElementsByTagName('li');
let resetGame = document.getElementById('playAgain');
let guessCount = 0;
let randomNum = Math.floor(Math.random() * 100);

button.addEventListener('click', function(){
    
    let inputElement = document.querySelector('input')
    
    function getInputAndUpdate(inputElement){
        guessCount++; 
        console.log(randomNum)
        let numInput = parseInt(inputElement.value,10)

            if(guessCount < 5){
                
                if(numInput === randomNum){
                    guesses[guessCount -1].innerHTML=numInput;
                    result.textContent = 'YOU WON!';  
                    document.getElementById("submitBtn").disabled = true; 
                }
                
                if(numInput > randomNum){
                    guesses[guessCount -1].innerHTML=numInput;
                    result.textContent = 'Guess Lower!';
                }
                
                if(numInput < randomNum){
                    guesses[guessCount -1].innerHTML=numInput;
                    result.textContent = 'Guess Higher!';
                }
            } 
            
            if(guessCount === 5 && numInput!== randomNum){
                guesses[guessCount -1].innerHTML=numInput;
                result.textContent = 'Sorry, Try Again!';
                document.getElementById("submitBtn").disabled = true; 
            }
            
            if(guessCount === 5 && numInput=== randomNum){
                guesses[guessCount -1].innerHTML=numInput;
                result.textContent = 'YOU WON!'; 
                document.getElementById("submitBtn").disabled = true; 
            }
    
    inputElement.value = '';
    }


   getInputAndUpdate(inputElement);
   

})



resetGame.addEventListener('click',function(){

    for(let key in guesses){
        guesses[key].innerHTML = '-'; 
    }

    guessCount = 0; 
    result.textContent = 'Let\'s Play Again :)';
    randomNum = Math.floor(Math.random() * 100); 
    
    document.getElementById("submitBtn").disabled = false;
})

hint.addEventListener('click', function(){
    let evenOrOdd
    if(randomNum % 2 === 0){
        evenOrOdd = 'even';
    } else {
        evenOrOdd = 'odd';
    }

    console.log(randomNum)
    alert(`Hint: It is an ${evenOrOdd} number`);
})