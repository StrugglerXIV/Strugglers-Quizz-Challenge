// Questions and their answers
var question_1 = "Tags that begin and end Javascript code within an HTML document";
var question_2 = "Allows the program to display a special dialog box that will notify the user that an expected event has occurred";
var question_3 = "A name assigned to a literal value or object";
var answer_1 = "<script></script>";
var answer_2 = "alert()";
var answer_3 = "var";
// Creating vars that will be useful
var startingTime = document.getElementById('starting-time');
var nextPromt = document.getElementById('nextP');
var mainEl = document.getElementById('main');
var timeEl = document.getElementById('time')

var rep_tt = document.getElementById('main-title');
var rep_desc = document.getElementById('desc');

// The wrong answers that will populate the boxes
var wrAnswer_1 = "github";
var wrAnswer_2 = "<div></div>";
var wrAnswer_3 = "function()";
var wrAnswer_4 = "javascript";

// Creating vars that will be useful
var questionEL = document.getElementById('question');
var answer1EL = document.getElementById('a1');
var answer2EL = document.getElementById('a2');
var answer3EL = document.getElementById('a3');
var answer4EL = document.getElementById('a4');
var answersClassEl = document.getElementsByClassName('answer');

//Array that we will use to make sure the elements not repeated by using splice()
var answersAll = [answer1EL, answer2EL, answer3EL, answer4EL]
var questions = [question_1, question_2, question_3];
var answers = [answer_1, answer_2, answer_3];

// Creating vars that will be useful
var rmWrongAnswers = document.getElementsByClassName('queryCheck');
var start_button = document.getElementById('start-btn')
var perPoints = document.getElementById('ppoints');
//Number of points Var and converting it to string so we can use it.
var pointsNr = 0;
perPoints.textContent = String(pointsNr);

//Empty vars that will be edited by user when promted
var userName = '';
var userScore = '';


//When pressing start button
start_button.addEventListener('click', function () {
    //Transform the text from Start to Next
    //Idealy the Start Button should just be chaged to visibility:none but due to time constraints i've left it as is.
    if (nextPromt.textContent == 'Start') {
        nextPromt.textContent = 'Next';
        //starts timer
        intervalID  = setInterval(function () {
            updateTime();
        }, 1000);
    }
    //variable that checks the questions length, in case user wants to add more questions this would be dynamic
    var crI = questions.length;
    //If the number of questions runs out, clears field indicating that the game is over.
    if (crI == 0) {
        seconds = '0';
        mainEl.remove();
        return;
    }
    //populate the buttons with wrong answers
    answer1EL.textContent = wrAnswer_1;
    answer2EL.textContent = wrAnswer_2;
    answer3EL.textContent = wrAnswer_3;
    answer4EL.textContent = wrAnswer_4;
    //If question length is not 0 or seconds remainer are bigger than 0, start the process.
    if (crI != 0 || seconds > 0) {
        //Functions that makes the answers looks pretty
        turnAnstoBtn();
        //generates an independent variable that rounds down a random number based on how many questions there are.
        var qNr = Math.floor(Math.random() * questions.length);
        //generates an idependent variable that rounds down the number of how many answers field we have, which is 4.
        var aNr = Math.floor(Math.random() * 4);
        //Changes the text to match a question
        questionEL.textContent = String(questions[qNr]);
        //Changes a random answer box to the correct one of the above question.
        answersAll[aNr].textContent = String(answers[qNr]);
        //Removes that answer and question from the array so it avoids duplicates.
        questions.splice(qNr, 1);
        answers.splice(qNr, 1);
    }
})

//Functions to assign a class to answers to make them pretty
function turnAnstoBtn() {
    answer1EL.classList.add('button-84');
    answer2EL.classList.add('button-84');
    answer3EL.classList.add('button-84');
    answer4EL.classList.add('button-84');
}

//starting time
var seconds = '15';
startingTime.textContent = seconds;

//Functions that controls the time being updated and what happens when it reaches 0
function updateTime() {
    startingTime.textContent = seconds;
    if (seconds > 0) {
        seconds--;
    }
    else if (seconds == 0) {
        clearInterval(intervalID);
        mainEl.remove();
        askInfoForScore();
        return;
    }
}


//Logical steps when we click an answer, if the answer is correct it adds points and moves on, if the answer is wrong it moves on and subtracts seconds.
answer1EL.addEventListener('click', function () {
    if (answer1EL.textContent == answer_1 || answer1EL.textContent == answer_2 || answer1EL.textContent == answer_3) {
        pointsNr = pointsNr + 10;
        updatePoints();
        start_button.click();
    } else {
        seconds = seconds - 1;
        start_button.click()
    }
})
answer2EL.addEventListener('click', function () {
    if (answer2EL.textContent == answer_1 || answer2EL.textContent == answer_2 || answer2EL.textContent == answer_3) {
        pointsNr = pointsNr + 10;
        updatePoints();
        start_button.click();
    } else {
        seconds = seconds - 1;
        start_button.click()
    }
})
answer3EL.addEventListener('click', function () {
    if (answer3EL.textContent == answer_1 || answer3EL.textContent == answer_2 || answer3EL.textContent == answer_3) {
        pointsNr = pointsNr + 10;
        updatePoints();
        start_button.click();
    } else {
        seconds = seconds - 1;
        start_button.click()
    }
})
answer4EL.addEventListener('click', function () {
    if (answer4EL.textContent == answer_1 || answer4EL.textContent == answer_2 || answer4EL.textContent == answer_3) {
        pointsNr = pointsNr + 10;
        updatePoints();
        start_button.click();
    } else {
        seconds = seconds - 1;
        start_button.click()
    }
})

//Function to update
function updatePoints() {
    perPoints.textContent = String(pointsNr);
}

//variable we're gonna use for the setInterval()
var intervalID;


//The promt to add our name
function askInfoForScore() {
    var bodyEl = document.getElementById('body');
    var scoreEl = document.createElement('initQuery');
    bodyEl.appendChild(scoreEl);
    scoreEl.classList.add('scoreStyle');
    scoreEl.setAttribute('id', 'scoreID');
    scoreEl.textContent = ('Enter your name: ' + userName); 
    var userNameEl = document.createElement('input');
    scoreEl.appendChild(userNameEl);
    userNameEl.setAttribute('id', 'nameBox');
    userNameEl.addEventListener('keypress', function(e) {
        if (e.key === 'Enter'){
        userName = userNameEl.value;
        scoreEl.remove();
        endScreen();
        }
    })
}

//Function that's going to display our input name once we're done.
function endScreen() {
var scoreDisplay = document.createElement('scoreDisplay');
var bodyEl = document.getElementById('body');
bodyEl.insertBefore(scoreDisplay, bodyEl.children[2])
scoreDisplay.classList.add('scoreDisplay');
scoreDisplay.setAttribute('id', 'scoreDisplay')
var finalPointsEl = document.getElementById('ppoints');
scoreDisplay.textContent = ("The user "+userName+" has a total of "+ finalPointsEl.textContent+" points!");
}