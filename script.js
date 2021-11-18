// Questions and answer objects/arrays
let highscore = JSON.parse(localStorage.getItem("score")) || []
const questionsJava = [

    { //1
        question: "What is JavaScript's file extension?",
        choice1: '.Java',
        choice2: '.exe',
        choice3: '.zip',
        choice4: '.js',
        answer: 4
    },
    { //2
        question: "What is the difference between const and let?",
        choice1: "Const can be reassigned and so can let",
        choice2: "Const cannot be reassigned but let can",
        choice3: "Neither can be reassigned",
        choice4: "Guacamole and fried chicken",
        answer: 1
    },
    { //3
        question: "const numbers = [1, 2, 3] is an example of:",
        choice1: "Array",
        choice2: "String",
        choice3: "Function",
        choice4: "Object",
        answer: 1
    },
    { //4
        question: "What year was JavaScript created?",
        choice1: "1995",
        choice2: "1990",
        choice3: "1996",
        choice4: "1993",
        answer: 1
    },
    { //5
        question: "How many different kind of loops are there in JavaScript?",
        choice1: 'Four. The "for" loop, the "else" loop, and the "while" loop.',
        choice2: 'Two. The "for" and the "while" loop.',
        choice3: 'One. The "for" loop.',
        choice4: 'None of the above',
        answer: 2
    },
    { //6
        question: 'How do you write a conditional statement for executing some statements only if "i" is equal to 5?',
        choice1: "If i==5 then",
        choice2: "If i=5 then",
        choice3: "If (i==5)",
        choice4: "If i==5",
        answer: 3
    },
    { //7
        question: "what does i++ represent?",
        choice1: "Incrementor",
        choice2: "Decrementor",
        choice3: "Iterator",
        choice4: "Operator",
        answer: 1
    },
    { //8
        question: "What are the three basic types?",
        choice1: "Boolean, Array, String",
        choice2: "String, Object, Numbers",
        choice3: "Function, Boolean, String",
        choice4: "Boolean, Numbers, String",
        answer: 4
    },
    { //9
        question: "Which of the following function of Array object calls a function for each element in the array?",
        choice1: "every()",
        choice2: "forEach()",
        choice3: "concat()",
        choice4: "filter()",
        answer: 2
    },
    { //10
        question: "IsNaN() Evalutes And Argument To Determine if Given Value",
        choice1: "Is Not a New Object",
        choice2: "Is Not a Null",
        choice3: "Is Not a Number",
        choice4: "None Of The Above",
        answer: 3
    }
];

// declaring variables and setting up timer
let next = 0
let score = 0
let timerObject
let countdownTimer = 100

document.getElementById('go').addEventListener('click', () => {
    timerObject = setInterval(function () {
        document.getElementById("timer").innerText = countdownTimer

        if (countdownTimer <= 0) {
            clearInterval(timerObject)
            showResults()
        }
        else {
            countdownTimer--
        }
    }, 1000)
    newGame()
}
)
// populates list including questions and choices
const newGame = () => {

    document.getElementById('go').style.display = "none";
    let jsQuestions = document.createElement('div')
    jsQuestions.innerHTML = `
    <ul class="list-group">
  <li>${questionsJava[next].question}</li>
  <li data-value ="1" class="list-group-item">${questionsJava[next].choice1}</li>
  <li data-value ="2" class="list-group-item">${questionsJava[next].choice2}</li>
  <li data-value ="3" class="list-group-item">${questionsJava[next].choice3}</li>
  <li data-value ="4" class="list-group-item">${questionsJava[next].choice4}</li>
    </ul>
    
    
    
    
    `
    document.getElementById('questions').append(jsQuestions)


}

// Feedback for right and wrong answers adds to score and removes time for incorrect answers
document.addEventListener('click', event => {
    if (event.target.classList.contains('list-group-item')) {
        var userChoice = event.target.getAttribute('data-value')
        console.log(userChoice)
        if (userChoice == questionsJava[next].answer) {
            score+= 5
            document.getElementById('right').innerText = "Correct!"
        } else {
            document.getElementById('right').innerText = "Wrong"
            countdownTimer -= 5
        }
        if (next < questionsJava.length - 1) {
            next++
            questions.innerHTML = " "
            newGame()
        } else {
            clearInterval(timerObject)
            showResults()
        }

    }
})

// hides the list and prompts user to enter initials to save high score
function showResults() {
    document.getElementById('go').style.display = "none";
    questions.innerHTML = `
    <h6>Your Score:${score+countdownTimer}</h6><input id="usernameInitials" placeholder="username"></input>
    <button onclick="saveScore()">Save your score!</button>
    
    `
}

function saveScore(){
    let username = document.querySelector('#usernameInitials').value
    console.log(username)

    highscore.push({
        username: username,
        score: score+countdownTimer
    })

    localStorage.setItem("score", JSON.stringify(highscore))


}
