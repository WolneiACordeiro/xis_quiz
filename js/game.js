const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
// const scoreText = document.getElementById("score");
const loader = document.getElementById('loader');
const game = document.getElementById("game");
const mostRecentName = localStorage.getItem('name');
const mostRecentTopic = localStorage.getItem('utopic');
const mostRecentTitle = localStorage.getItem('title');
const showUserName = document.getElementById("showUserName");
const showTest = document.getElementById('showTest');
const currentProgress = document.getElementById('currentProgress');
const recapAnswer = [];

// showUserName.innerText = `Olá ${mostRecentName} você está na prova de ${mostRecentTitle}!`;
showUserName.innerText = `Olá ${mostRecentName}`;
showTest.innerText = `Você está na prova de ${mostRecentTitle}!`;

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];

fetch(`../json/${mostRecentTopic}.json`)
    .then( res => {
        return res.json();
    }).then(loadedQuestions => {
        console.log(loadedQuestions);
        questions = loadedQuestions;
        startGame();
    })
    .catch( err => {
        console.error(err);
    });

//CONSTANTS
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    game.classList.remove('hidden');
    //loader.classList.add('hidden');
    localStorage.setItem('questionCounter', questionCounter);
};

getNewQuestion = () => {

    if(availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        localStorage.setItem('mostRecentRecap', JSON.stringify(recapAnswer));
        //go to the end page
        return window.location.assign('../pages/end.html');
    }
    questionCounter++;

    currentProgress.innerText = `Questão ${questionCounter}`;
    progressText.innerText = `${questionCounter} de ${MAX_QUESTIONS}`;
    //Update the progress bar
    
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = 
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

            if(classToApply === 'correct') {
                incrementScore(CORRECT_BONUS);
            }

        selectedChoice.parentElement.classList.add(classToApply);

            setTimeout( () => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 200);
        
            const answersRecap = {
                rQuestion: currentQuestion.question, 
                r1: currentQuestion.choice1,
                r2: currentQuestion.choice2,
                r3: currentQuestion.choice3,
                r4: currentQuestion.choice4,
                rUserAnswer: selectedAnswer,
                rCorrectAnswer: currentQuestion.answer,
                rExplanation: currentQuestion.explanation,
                rQuestionCounter: questionCounter
            };
    
            recapAnswer.push(answersRecap);
    
    });
});

incrementScore = num => {
    score += num;
    localStorage.setItem('mostRecentScore', score);
};
