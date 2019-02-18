
$(document).ready(function() {

    var score = 0;
    var win = 0;
    var lose = 0;
    



    // Creates random number for player to add to from 19 - 120
    function randomNumber(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;

    }

    
    var targetNumber = randomNumber (19, 120);

    
    $("#randomNum").html("Add up to " + targetNumber + " to win!");
    $("#losses").html("Losses: " + lose);
    $("#wins").html("Wins: " + win);



    // Creates random number for crystals from 1-12
    function crystalNumber(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    // Adds data-value attribute with random value to crystal images
    $("#crystal1").attr("data-value", crystalNumber(1,12));
    $("#crystal2").attr("data-value", crystalNumber(1,12));
    $("#crystal3").attr("data-value", crystalNumber(1,12));
    $("#crystal4").attr("data-value", crystalNumber(1,12));




    // On-click event to add score up for player
    $("img").on("click", function() {
            var crystalValue = ($(this).attr("data-value"));
            crystalValue = parseInt(crystalValue);
            var scoreAdd = score += crystalValue;
            $("#scoreCount").html("Your current score: " + scoreAdd);

            if (score === targetNumber) {
                alert("You win!");
                win++;
                $("#wins").html("Wins: " + win);
            }

            else if (score >= targetNumber) {
                alert("You lose!")
                lose++;
                $("#losses").html("Losses: " + lose);


            }
            
    });

    
    
    



});