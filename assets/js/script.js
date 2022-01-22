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
    {question: "What is the correct JavaScript syntax to write 'Hello World'?",
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
    {question: "Which of the following event fires when the form element loses the focus?: <button>, <input>, <label>, <select>, <textarea>",
    answer: 2,
    choices: ["onfocus","onblur","onclick","ondblclick"]
    },
    {question: "JavaScript is interpreted by _________",
    answer: 4,
    choices: ["Array","Object","Server","Client"]
    }];

var holdInterval = 0;

// quiz starts with the "Start button click"
buttonEl.addEventListener('click', function () {
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
        timeLeft--;
        time.textContent = 'Time: ' + timeLeft;
    
            if (timeLeft <= 0) {
                clearInterval(holdInterval);
                // allDone();
                time.textContent = "Time's up!";
            }
        }, 1000);
    }
    startQuiz()  
}); 

var startQuiz = function() {
    //clearing out title and and the button
    titleEl.style.display = "none";
    introTextEl.style.display = "none";
    buttonEl.style.display = "none";
    

for (i=0; i < questions.length; i++) { 
    // questions displayed on the title and answers as answerOptionsEl
    var questionSelected = questions[i].question;
    var AnswerOpion1 = questions[i].choices[0];
    var AnswerOpion2 = questions[i].choices[1];
    var AnswerOpion3 = questions[i].choices[2];
    var AnswerOpion4 = questions[i].choices[3];
    var correctAnswer = questions[i].choices[questions[i].answer];

    var questionTitleSection = document.createElement("div");
    questionTitleSection.className = "question-title-wrapper-quiz";
    quizBodyEl.appendChild(questionTitleSection);
    

    var questionTitle = document.createElement("h2");
    questionTitle.className = "question-title-quiz";
    questionTitle.textContent = questionSelected;    
    questionTitleSection.appendChild(questionTitle);

    var answerOptions = document.createElement("ul");
    answerOptions.className = "answer-options-group";
    quizBodyEl.appendChild(answerOptions);
    
    var answerOption1 = document.createElement("button");
    var answerOption2 = document.createElement("button");
    var answerOption3 = document.createElement("button");
    var answerOption4 = document.createElement("button");
    answerOption1.className = "answer-options";
    answerOption2.className = "answer-options";
    answerOption3.className = "answer-options";
    answerOption4.className = "answer-options";
    answerOption1.textContent = AnswerOpion1;
    answerOption2.textContent = AnswerOpion2;
    answerOption3.textContent = AnswerOpion3;
    answerOption4.textContent = AnswerOpion4;
    quizBodyEl.appendChild(answerOption1);
    quizBodyEl.appendChild(answerOption2);
    quizBodyEl.appendChild(answerOption3);
    quizBodyEl.appendChild(answerOption4);
    
    selectedOption = document.get

    console.log(selectedOption);
    
   
}
}




