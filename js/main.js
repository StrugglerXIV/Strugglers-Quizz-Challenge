var question_1 = "Tags that begin and end Javascript code within an HTML document";
var question_2 = "Allows the program to display a special dialog box that will notify the user that an expected event has occurred";
var question_3 = "A name assigned to a literal value or object";
var answer_1 = "<script></script>";
var answer_2 = "alert()";
var answer_3 = "var";

var startingTime = document.getElementById('starting-time');
var nextPromt = document.getElementById('nextP');
var mainEl = document.getElementById('main');
var timeEl = document.getElementById('time')

var rep_tt = document.getElementById('main-title');
var rep_desc = document.getElementById('desc');

var wrAnswer_1 = "wr_ans_1";
var wrAnswer_2 = "wr_ans_2";
var wrAnswer_3 = "wr_ans_3";
var wrAnswer_4 = "wr_ans_4";

var questionEL = document.getElementById('question');

var answer1EL = document.getElementById('a1');
var answer2EL = document.getElementById('a2');
var answer3EL = document.getElementById('a3');
var answer4EL = document.getElementById('a4');
var answersClassEl = document.getElementsByClassName('answer');

var answersAll = [answer1EL, answer2EL, answer3EL, answer4EL]

var questions = [question_1, question_2, question_3];
var answers = [answer_1, answer_2, answer_3];

var rmWrongAnswers = document.getElementsByClassName('queryCheck');

var start_button = document.getElementById('start-btn')

var perPoints = document.getElementById('ppoints');
var pointsNr = 0;
perPoints.textContent = String(pointsNr);

var userName = '';
var userScore = '';

start_button.addEventListener('click', function () {
    if (nextPromt.textContent == 'Start') {
        startCountdownTimer();
        nextPromt.textContent = 'Next';
    }
    crI = questions.length;
    var leftoverTime = seconds;
    if (crI == 0) {
        seconds = '0';
        mainEl.remove();
        askInfoForScore();
        return;
    }
    answer1EL.textContent = wrAnswer_1;
    answer2EL.textContent = wrAnswer_2;
    answer3EL.textContent = wrAnswer_3;
    answer4EL.textContent = wrAnswer_4;
    if (crI != 0 || seconds > 0) {
        turnAnstoBtn();
        qNr = Math.floor(Math.random() * questions.length);
        aNr = Math.floor(Math.random() * 4);
        questionEL.textContent = String(questions[qNr]);
        answersAll[aNr].textContent = String(answers[qNr]);
        questions.splice(qNr, 1);
        answers.splice(qNr, 1);
    }
    else if (seconds < 10) {
        nextPromt.textContent = 'Game over';
        alert('No more questions.');
        mainEl.remove();
        askInfoForScore();
        return;
    }
    else {
        nextPromt.textContent = 'Game over';
        alert('No more questions.');
        mainEl.remove();
        askInfoForScore();
        return;
    }
})

function addWrongAnswers() {
    var fullWrongAnswers = [wrAnswer_1, wrAnswer_2, wrAnswer_3]
    for (i = 0; i < 3; i++) {
        createWrAns.setAttribute('id', 'queryCheck' + [i]);
        var wrAnsNr = Math.floor(Math.random() * fullWrongAnswers.length);
        createWrAns.textContent = String(fullWrongAnswers[wrAnsNr]);
        fullWrongAnswers.splice(wrAnsNr, 1);
    }
}

function turnAnstoBtn() {
    answer1EL.classList.add('button-84');
    answer2EL.classList.add('button-84');
    answer3EL.classList.add('button-84');
    answer4EL.classList.add('button-84');
}

var seconds = '15';
startingTime.textContent = seconds;

function updateTime() {
    startingTime.textContent = seconds;
    if (seconds > 0) {
        seconds--;
    }
    else if (crI == 0) {
        return;
    }
}

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

function updatePoints() {
    perPoints.textContent = String(pointsNr);
}

function startCountdownTimer() {
    setInterval(function () {
        updateTime();
    }, 1000);
}

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


function endScreen() {
var scoreDisplay = document.createElement('scoreDisplay');
var bodyEl = document.getElementById('body');
bodyEl.insertBefore(scoreDisplay, bodyEl.children[2])
scoreDisplay.classList.add('scoreDisplay');
scoreDisplay.setAttribute('id', 'scoreDisplay')
var finalPointsEl = document.getElementById('ppoints');
scoreDisplay.textContent = ("The user "+userName+" has a total of "+ finalPointsEl.textContent+" points!");
}