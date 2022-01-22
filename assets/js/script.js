var timeLeft = 75;
var userScore = 0;

//El for DOM element
var headlineEl = document.querySelector("#headline");
var quizBodyEl = document.querySelector("#quiz-body");
var titleEl = document.querySelector("#question-title");
var introTextEl = document.querySelector("#intro-text");
var answerOptionsEl = document.querySelector("#answer-options-group");
var answerStatusEl = document.querySelector("#answer-status");
var buttonEl = document.querySelector("#action-btn");

// display the welcome screen
// capture start quiz button input
    // store the button click in a variable
// start the quiz
    // start the timer
    // display the questions
// capture user answer input click
    // store the user input
    // evaluate user input
    // display answer correct or wrong

var questions = [{
    question: "What are variables used for in JavaScript Programs?",
    answer: 1,
    choices: ["Storing numbers, dates, or other values","Varying randomly","Causing high-school algebra flashbacks","None of the above"]
    },
    {question: "What is the correct JavaScript syntax to write 'Hello World'",
    answer: 3,
    choices: ["System.out.println('Hello World')","println ('Hello World')","document.write('Hello World')","response.write('Hello World')"]
    },
    {question: "Inside which HTML element do we put the JavaScript?",
    answer: 3,
    choices: ["<js>","<scripting>","<script>","<javascript>"]
    },
    {question: "Which types of image maps can be used with JavaScript?",
    answer: 2,
    choices: ["Server-side image maps","Client-side image maps","Server-side image maps and Client-side image maps","None of the above"]
    },
    {question: "What does the <noscript> tag do?",
    answer: 1,
    choices: ["Enclose text to be displayed by non-JavaScript browsers","Prevents scripts on the page from executing","Describes certain low-budget movies","None of the above"]
    },
    {question: "Choose the server-side JavaScript object",
    answer: 3,
    choices: ["FileUpLoad","Function","File","Date"]
    },
    {question: "Which of the following is not considered a JavaScript operator?",
    answer: 2,
    choices: ["new","this","delete","typeof"]
    },
    {question: "______ method evaluates a string of JavaScript code in the context of the specified object.",
    answer: 1,
    choices: ["Eval","parseInt","parseFloat","Efloat"]
    },
    {question: "Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?",
    answer: 2,
    choices: ["onfocus","onblur","onclick","ondblclick"]
    },
    {question: "JavaScript is interpreted by _________",
    answer: 4,
    choices: ["Array","Object","Server","Client"]
    }];


    // create timer func
    // variable to store the time (timeCounter)
    // 
    // display the time variable in the timeEl
var timer = function(timeLeft) {
    if (timeLeft < 0) {
        clearInterval(timer);
    }
    timeLeft -= 1; 
    document.getElementById("time").value = "Time: " + timeLeft;
    console.log(timeLeft);
       
}
timer();

// var startCountdown = setInterval(timer, 1000);

// console.log(timeLeft);


// var startBtnHandler = function() {}







//buttonEl.addEventListener("click", startBtnHandler);    