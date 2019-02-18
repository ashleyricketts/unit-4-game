
var randomNum;



// Creates random number for player to add to
function randomNumber(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;

}

// Writes randomNumber to document 
randomNum = document.getElementById("randomNum");
randomNum.innerHTML = "Add up to " + randomNumber(19, 120) + " to win!";



function crystalNumber(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log(crystalNumber(1, 12));







