var input = require('readline-sync');
console.log("-= Welcome to Hangman =-\n");
var name = input.question("Please enter your name: ");
console.log("");
var guess, word, words, totalScore = 0;
// var randNum_list = []
var startTime, endTime;

class Word {//created class Word
    constructor(word, definition) {
        this.word = word;
        this.definition = definition;
    }
    displayDef() {
        return this.definition;//returns the definition of the word
    }
}

class WordCollection {
    constructor(lst) {
        this.currentList = lst;
    }
    randWord() {
        //a function to randomly select words from the pool for each gameplay
        var randNum = Math.floor(Math.random() * words.length)//randomly generate a number 
        var valid = false;//initialise valid to false
        var randWord_list = [randNum];//storing the generated numbers in an array
        while (randWord_list.length != 10) {//check if the length is 10, if not continue generating
            valid = true//set valid to true because the generated number is not inside of the array
            randNum = Math.floor(Math.random() * words.length)//regenerate a random number again
            for (var i = 0; i < randWord_list.length; i++) {
                if (randNum == randWord_list[i]) {//check if there was a repetition of words //its inside
                    valid = false;//number generated is already inside array
                }
            }

            if (valid == true) {//if condition is true, it is not inside
                randWord_list.push(randNum);//since it is not inside, it will be added into the array
            }

            else {//if valid is false, a new number needs to be generated
                randNum = Math.floor(Math.random() * words.length)//since its already inside, it will regenerate
            }
        }
        var randNumArr = [];//create empty array for the list of generated words
        for (var i = 0; i < randWord_list.length; i++) {
            randNumArr.push(this.currentList[randWord_list[i]]);//push the generated word into the randNumArr
        }
        return randNumArr//returns the list of generated words

    }

    //function to check word if guessed correctly by player
    wordCheck() {
        var wordCheckCondition = true;//initialise as true:assume that the word is correctly guessed
        if (underscore.includes("_ ") == true) {//if there is underscore,
            wordCheckCondition = false;// word has not been guessed
        }
        return wordCheckCondition;//return a true or false depending if the input is correct
    }
    //function to track the score of the player
    trackScore() {
        if (this.wordCheck() == true) {//if word has been guessed add 1 score
            checkScore++;
        }

        return checkScore;
    }
    guessWholeWord() {//advanced feature
        var guessFullWord = input.question("Please input the full word if you know: ");//ask for user input of the full word after inputting 8:trys to guess word
        if (wordinprogress == guessFullWord) {//checks if the current generated word is the same as the user's input
            underscore = wordinprogress;//replaces the underscores with the correct answer

        }
        else {
            counter++;//draws hangman when wrong
            console.log("Sorry, you have guessed wrongly. Please try again!")//tells user that he have entered wrongly
        }
    }


}


var checkScore = 0;


var words = ['friend', 'jail', 'anger', 'petty', 'resign', 'pinnacle', 'zenith', 'referee', 'theory', 'fame', 'nursery', 'vehicle', 'twitch', 'reject', 'deliberate', 'urgency', 'fashion', 'basketball', 'acquaintance', 'deprive', 'expand', 'genuine', 'manual', 'welfare', 'island', 'apathy', 'inspire', 'predict', 'snuggle', 'asset', 'confront', 'recover', 'stretch', 'monopoly', 'nightmare', 'flood', 'sunday', 'tumble', 'ambiguity', 'desert'];
var definition = ['a person with whom one has a bond of mutual affection', 'a place for the confinement of people accused or convicted of a crime', 'a strong feeling of annoyance', 'of little importance; trivial', 'voluntarily leave a job or office', 'the most successful point; the culmination', 'the time at which something is most powerful or successful', 'an official who watches a game or match closely to ensure that the rules are adhered to and (in some sports) to arbitrate on matters arising from the play', 'a supposition or a system of ideas intended to explain something, especially one based on general principles independent of the thing to be explained', 'the state of being known or talked about by many people, especially on account of notable achievements', 'a room in a house for the special use of young children.', 'a thing used for transporting people or goods, especially on land, such as a car, lorry, or cart.', 'give or cause to give a short, sudden jerking or convulsive movement.', 'refuse to agree to (a request).', 'done consciously and intentionally.', 'importance requiring swift action.', 'a popular or the latest style of clothing, hair, decoration, or behaviour.', 'a game played between two teams of five players in which goals are scored by throwing a ball through a netted hoop fixed at each end of the court.', 'knowledge or experience of something.', 'prevent (a person or place) from having or using something.', 'become or make larger or more extensive.', 'truly what something is said to be; authentic.', 'relating to or done with the hands.', 'the health, happiness, and fortunes of a person or group.', 'a piece of land surrounded by water.', 'lack of interest, enthusiasm, or concern.', 'fill (someone) with the urge or ability to do or feel something, especially to do something creative.', 'say or estimate that (a specified thing) will happen in the future or will be a consequence of something.', 'settle or move into a warm, comfortable position.', 'a useful or valuable thing or person.', 'come face to face with (someone) with hostile or argumentative intent.', 'return to a normal state of health, mind, or strength.', 'cause (something) to become longer or wider by pulling it.', 'a board game in which players engage in simulated property and financial dealings using imitation money. It was invented in the US and the name was coined by Charles Darrow c. 1935.', 'a frightening or unpleasant dream.', 'an overflow of a large amount of water beyond its normal limits, especially over what is normally dry land.', 'the day of the week before Monday and following Saturday, observed by Christians as a day of rest and religious worship and (together with Saturday) forming part of the weekend.', 'fall suddenly, clumsily, or headlong.', 'the quality of being open to more than one interpretation; inexactness.', 'abandon (a person, cause, or organization) in a way considered disloyal or treacherous.']
var counter = 0;//counter for the number of lives
var count1 = 0; //counter for vowels in lifelines (use once)
var count2 = 0; //counter for definition in lifelines (use once)
var count3 = 0; //counter for free pass in lifeline (use once)
var totalTime=0;//counts the total time taken for the entire game
var y = new Array();//empty array to store the word and definition
for (var k = 0; k < words.length; k++) {
    y.push(new Word(words[k], definition[k]));//pushes both words and definitions from the same index numbers into empty array y
}




var collection = new WordCollection(y);//new object collection with parameter y
var a = collection.randWord();//list of array of generated number stored in var a



// console.log(collection.randWord()) //random list of word objects

// var r1 = new WordCollection()//to have an object to use the property
// var w1 = new Word();//to have class Word






var hangMan = ["\n _|_\n|   |_______    \n|           |    \n|___________|", "\n   ___\n  |   |\n  |\n  |\n  |\n  |\n _|_\n|   |_______    \n|           |    \n|___________|", "\n   ___\n  |   |\n  |   O\n  |  \/|\\\n  |   |\n  |  \/ \\\n _|_\n|   |_______    \n|           |    \n|___________|"]//drawing of the hangman in an array; 3 lives
for (var o = 1; o < 11; o++) {
    if (counter >= 3) {//check if game is finished
        break;
    }
    console.log("Word " + o + " / 10");//shows the current word number
    console.log();//adds a new line to have spacing
    var underscore = new Array();//empty array created


    var wordinprogress = a[o - 1].word;//word in randlist; o-1 because index starts from 0; word is wanted
    console.log(wordinprogress);//answer for the word
    for (var j = 0; j < wordinprogress.length; j++) {
        underscore.push("_ ")//pushes underscore into an empty array called underscore depending on the length of the wordinprogress
    }
    console.log(underscore.join(""));//removes the array bracket and commas

    console.log();//creates an empty space at the bottom

    var myAlphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];//whole list of Alphabets in an array
    start();//calls the start function which shows the start of the timer
    while (counter < 3 && (collection.wordCheck() == false)) {//checks if the game has ended
        console.log(myAlphabets.slice(0, 13).join(" ") + "\n" + myAlphabets.slice(13, 27).join(" "));//splits the whole list of alphabets into 2 rows

        var inpAlphabet = input.question(name + "'s guess (Enter 9 for lifelines or 0 to pass or 8 to guess full word):");//Asks for the user's input
        if (inpAlphabet == 0) {//checks whether user input is 0 and wants to skip the word
            underscore = wordinprogress.split();//autofill in the alphabets, skipping to the next word

            checkScore--;//minus 1 from the total score because skipping words does not add to the score


        }
        else if (inpAlphabet == 9) {//checks whether user wants lifelines
            lifeline();//executes the lifeline function
        }
        else if (inpAlphabet == 8) {//checks whether user wants to guess full word
            guessWholeWord();//executes the guessWholeWord function
        }
        else {//continues the game by guessing the alphabets
            guessAlphabet(inpAlphabet);//executes the guessAlphabet function which checks whether user has entered the correct alphabet with the user input as parameter

        }
        var condition = false;//sets condition to false








    }
    console.log("Current Score: " + collection.trackScore())//shows the score after every word
    end();//call the end function which ends the timer

    console.log();//adds a new line to have spacing

}


if (counter == 3) {//checks if user lost the game
    console.log("Sorry you have died. Please try again")//shows a output that tells user that he have lost

}
else {//checks if the user won the game
    console.log("Congratulations! You have completed the game!")//tells the user that he won the game
    console.log()//adds a spacing
    console.log("Your total score is: " + (collection.trackScore() - 1) + "/10")//shows the total score at the end of the game when the user finishes it
    console.log()//adds a spacing
    console.log("You took "+totalTime+" seconds!")//shows total time taken for the whole game
    console.log()//adds a spacing
}



function start() {
    startTime = new Date();//function for the start of the timer
}

function end() {//create the function to end the timer
    endTime = new Date();//create a object of Date
    var timeDiff = endTime - startTime; //timer difference in ms
    
    timeDiff /= 1000;//in 1 sec//to change the ms to seconds

    
    var seconds = Math.round(timeDiff);//to round the value of timeDiff either up or down in seconds//to get seconds
    console.log(seconds + " seconds");//to display the number of seconds aka output for the user to see
    totalTime=totalTime+seconds;//compute the total time taken by the user throughout the game
    
}

function guessAlphabet(alphabet) {//created function with parameter alphabet taking in the user input as argument
    var index = myAlphabets.indexOf(inpAlphabet.toUpperCase());//index no. of removed letter
    myAlphabets.splice(index, 1);//removes the alphabet input by the user
    myAlphabets.splice(index, 0, " "); //adds in an empty space to the place where the alphabet got removed
    for (var z = 0; z < wordinprogress.length; z++) {//for loop to check if the inputted alphabet matches any of the word
        if (wordinprogress[z] == alphabet) {//checks if equals
            underscore[z] = alphabet + " ";//if equals underscore at the respective position will be replaced with the input

            condition = true;//condition will be set to true
        }
    }
    console.log();//adds a new line to have spacing
    console.log(underscore.join(" "));//to remove the bracket and commas
    console.log();//adds a new line to have spacing
    if (condition == true) {//if alphabet is correct, enters this
        console.log("Good job! " + alphabet + " is one of the letters! ");//shows that it is part of the word
        console.log();//adds a new line to have spacing
    }

    else {//alphabet entered is incorrect
        console.log("Sorry. " + alphabet + " is not part of the word.");//shows it is not part of the word
        console.log(hangMan[counter]);//displays the hangman
        counter++;//increment of the counter
    }
}

function guessWholeWord() {
    var guessFullWord = input.question("Please input the full word if you know: ");//ask for the user's input if the user knows the full word
    if (wordinprogress == guessFullWord) {//checks if the user had entered the correct full word
        underscore = wordinprogress.split();//if its correct, underscore will be replaced by the full word, followed by moving onto the next word
    }
    else {

        console.log("Sorry, you have guessed wrongly. Please try again!")//tells the user that he had entered wrongly
        console.log(hangMan[counter]);//shows the hangman if he entered wrongly
        counter++;//increment of hangman counter by 1
    }
}

function lifeline() {
    console.log();//adds a spacing
    var help = input.questionInt("Enter 1 for vowels, 2 for definition, or 3 for free pass(only can use once per selection) ")//get user's input on lifelines
    switch (help) {//enter switch with the parameter help


        case 1:
            var arr = ["a", "e", "i", "o", "u"]//store the vowels in an array
            if (count1 < 1) {
                for (var i = 0; i < underscore.length; i++) {

                    for (var z = 0; z < arr.length; z++) {
                        var check = wordinprogress.split("")
                        if (check[i] == arr[z]) { //checking the array to see if the array letters match with each other
                            underscore[i] = arr[z];//replaces the underscore at respective positions with respective vowels
                            var index = myAlphabets.indexOf(arr[z].toUpperCase());//index no. of removed letter//change the input to uppercase
                            myAlphabets.splice(index, 1);//removes the alphabet input by the user
                            myAlphabets.splice(index, 0, " "); //adds in an empty space to the place where the alphabet got removed


                            break;
                        }

                    }
                }
                console.log(underscore.join(" "));//removes the brackets and commas
                count1++;//increases counter by 1
            }
            else {
                console.log("Sorry, you have used your vowel hint.")//tells user that he already used his vowel hint
            }
            break;
        case 2:
            if (count2 < 1) {
                console.log();//adds a spacing
                console.log(a[o - 1].displayDef());//displays the definition of the current word generated
                console.log();//adds a spacing
                count2++//increase counter by 1

            }
            else {
                console.log("Sorry, you have used up your definition lifeline.")//shows as output when player used it before
            }
            break;
        case 3:


            if (count3 < 1) {//limit the number of times that player can use to 1
                underscore = wordinprogress.split();//autofill in the alphabets, skipping to the next word giving a free point
                count3++;
            }
            else {
                console.log("Sorry, you have used up your 1 free pass.")//shows as output when player used it before
            }

            break;


    }
}


