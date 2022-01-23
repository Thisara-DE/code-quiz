var timeLeft = 75;
var userScore = 0;
var holdInterval = 0;
var questionIndex = 0;

//El for DOM element
var headlineEl = document.querySelector("#headline");
var quizBodyEl = document.querySelector("#quiz-body");
var titleEl = document.querySelector("#question-title");
var introTextEl = document.querySelector("#intro-text");
var answerOptionsEl = document.querySelector("#answer-options-group");
var answerStatusEl = document.querySelector("#answer-status");
var buttonEl = document.querySelector("#action-btn");
var answerOption1El = document.querySelector("button");
var answerOption2El = document.querySelector("button");
var answerOption3El = document.querySelector("button");
var answerOption4El = document.querySelector("button");
var answerStatusContEl = document.querySelector("#answer-status-container");

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


// quiz starts with the "Start button click"
 var startTimer = function() {
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
        timeLeft--;
        time.textContent = 'Time: ' + timeLeft;
    
            if (timeLeft <= 0) {
                clearInterval(holdInterval);
                quizEnd(timeLeft);
                time.textContent = "Time's up!";
            }
        }, 1000);
    }
    startQuiz();  
} 

var startQuiz = function() {
    //clearing out title and and the button
    quizBodyEl.innerHTML='';
    
    getQuestion();
}

var getQuestion = function() { 
    
    if (questionIndex < questions.length) {    
    // questions displayed on the title and answers as answerOptionsEl
    var questionSelected = questions[questionIndex].question;
    var AnswerOpion1 = questions[questionIndex].choices[0];
    var AnswerOpion2 = questions[questionIndex].choices[1];
    var AnswerOpion3 = questions[questionIndex].choices[2];
    var AnswerOpion4 = questions[questionIndex].choices[3];
    
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
    
    var answerOption1El = document.createElement("button");
    var answerOption2El = document.createElement("button");
    var answerOption3El = document.createElement("button");
    var answerOption4El = document.createElement("button");
    answerOption1El.className = "answer-options";
    answerOption2El.className = "answer-options";
    answerOption3El.className = "answer-options";
    answerOption4El.className = "answer-options";
    answerOption1El.textContent = AnswerOpion1;
    answerOption2El.textContent = AnswerOpion2;
    answerOption3El.textContent = AnswerOpion3;
    answerOption4El.textContent = AnswerOpion4;
    quizBodyEl.appendChild(answerOption1El);
    quizBodyEl.appendChild(answerOption2El);
    quizBodyEl.appendChild(answerOption3El);
    quizBodyEl.appendChild(answerOption4El);     

    answerOption1El.addEventListener("click", evaluateAnswer);
    answerOption2El.addEventListener("click", evaluateAnswer);
    answerOption3El.addEventListener("click", evaluateAnswer);
    answerOption4El.addEventListener("click", evaluateAnswer); 
    
    }
    else
    {
    quizBodyEl.innerHTML='';
    quizEnd(timeLeft);
    clearInterval(holdInterval);
    }          
}



var evaluateAnswer = function(event) {    
    answerStatusContEl.innerHTML='';
    var selectedAnswer = event.target.textContent;      
                 
    var answerStatusEl = document.createElement("p");
    answerStatusEl.className = "answer-status";
    
    if (selectedAnswer === questions[questionIndex].choices[questions[questionIndex].answer-1]) { 
        answerStatusEl.textContent = "Correct Answer!"
        answerStatusContEl.appendChild(answerStatusEl);
                                        
    }
    else
    {       
        answerStatusEl.textContent = "Wrong";
        answerStatusContEl.appendChild(answerStatusEl);                
        timeLeft = timeLeft - 10;            
    }
    questionIndex++;      
    startQuiz();  
             
}

var quizEnd = function(timeLeft) {    
    answerStatusContEl.innerHTML = '';
    quizBodyEl.innerHTML='';
    var finalScore = timeLeft;

    if (timeLeft < 0) {
        finalScore = 0
    }
    else {
        finalScore = timeLeft;
    }
    
    var quizEndMsgContainer = document.createElement("div");
    quizEndMsgContainer.className = "question-title-wrapper-quiz";
    quizBodyEl.appendChild(quizEndMsgContainer);

    var MsgTitle = document.createElement("h2");
    MsgTitle.className = "question-title-quiz";
    MsgTitle.textContent = "All done!";    
    quizEndMsgContainer.appendChild(MsgTitle);

    var MsgContent = document.createElement("p");
    MsgContent.className = "quiz-end";
    MsgContent.textContent = "Your final score is " + finalScore + ".";
    quizEndMsgContainer.appendChild(MsgContent);
    
    var initFormCont = document.createElement("div");
    initFormCont.className = "user-init-cont";
    quizEndMsgContainer.appendChild(initFormCont); 
    quizEndMsgContainer.appendChild(initFormCont);   

    var initFormLable = document.createElement("p");
    initFormLable.className = "quiz-end user-init-cont";
    initFormLable.textContent = "Enter initials: ";
    initFormCont.appendChild(initFormLable);

    var initInput = document.createElement("input");
    initInput.className = "enterInit user-init-cont";
    initInput.setAttribute = ("id", "textarea");
    initFormCont.appendChild(initInput);
    
    var submitButtonEl = document.createElement("button")
    submitButtonEl.className = "submit-button";
    submitButtonEl.textContent = "Submit";
    initFormCont.appendChild(submitButtonEl);

    
    

    submitButtonEl.addEventListener("click", function() {
        
        var userInitials = document.querySelector(".enterInit").value;
        console.log(userInitials);

        saveProgress(userInitials, finalScore)        
    
    });     
}

var userObj = [{name: " ",score: 0}];

var saveProgress = function(userInitials, finalScore){

    if (!userInitials) {
        alert("Please enter your initials before submitting")
    }

    var userObj = {name: userInitials, score: finalScore}
    
    localStorage.setItem("userObj", JSON.stringify(userObj))
}

buttonEl.addEventListener("click", startTimer);



