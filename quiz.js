// Computer Literacy questions, possible answers and correct answer
const questions = [ {
    question: "Google is a...",
    answers: {
        a: "Search Engine",
        b: "Robot",
        c: "Large number",
        d: "Book"
        },
    correctAnswer: "a"
    },
    {
    question: "What is 'Microsoft Word'?",
    answers: {
        a: "Social Media",
        b: "Fax machine",
        c: "Program for creating documents",
        d: "Coding program"
        },
    correctAnswer: "c"
    },
    {
    question: "What does the shortcut 'Ctrl + V' do?",
    answers: {
        a: "Copy text",
        b: "Paste from clipboard",
        c: "Switch tabs",
        d: "Close window"
        },
    correctAnswer: "b"
    },
    {
    question: "Which of these is an example of an Operating System?",
    answers: {
        a: "Apple",
        b: "Windows",
        c: "Dell",
        d: "HP"
        },
    correctAnswer: "b"
    },
    {
    question: "How do you open a file in a Compressed Folder?",
    answers: {
        a: "Double-click the file",
        b: "Copy and paste file",
        c: "Extract all files",
        d: "Cut and paste the file"
        },
    correctAnswer: "c"
    },
    {
    question: "Which of these will interfere with your WiFi?",
    answers: {
        a: "Microwave oven",
        b: "Fish tank",
        c: "Fridge",
        d: "All of them"
        },
    correctAnswer: "d"
    },
    {
    question: "Which of these isn't associated with storing your data?",
    answers: {
        a: "SDHC",
        b: "M.2",
        c: "VPN",
        d: "FDD"
        },
    correctAnswer: "c"
    },
]

let questionBox = [];
let answerBox = [];
let correctAmount = 0;

let form = document.createElement("div");
form.id="bigform"
document.body.appendChild(form);

// Creates divs and text for questions and answers
function initialise() {
    
    for(let i = 0; i < questions.length; i++)  {
        questionBox[i] = document.createElement("div");
        questionBox[i].classList = "question-div";
        questionBox[i].innerHTML = "<h3>" + questions[i].question + "</h3>";

        answerBox[i] = document.createElement("p");

        let separator = document.createElement("div");
        separator.classList.add("separator");

        for (let letter in questions[i].answers) {

            let value = questions[i].answers[letter];

            let label = document.createElement("label");
            label.classList.add("radio-text");
            label.innerHTML = value;

            let input = document.createElement("input");
            input.type = "radio";
            input.name = i;
            input.classList.add("radio-button");
            input.id = letter;
            
            questionBox[i].appendChild(input);
            questionBox[i].appendChild(label); 
            questionBox[i].appendChild(document.createElement("br"));
        }


        questionBox[i].appendChild(answerBox[i]);
        form.appendChild(questionBox[i]);
        form.appendChild(separator);
    }
}

button = document.createElement("button");
button.innerHTML="Finish";
button.classList.add("button");

// Computes the number of correct answers
function results() {
    allquestions = form.getElementsByClassName('question-div');
    
    for(let i = 0; i < allquestions.length; i++){

        let checkBoxes = allquestions[i].getElementsByTagName('input');
        for(let j = 0; j < checkBoxes.length; j++) {
            if(checkBoxes[j].checked == true && checkBoxes[j].id == questions[i].correctAnswer){
                correctAmount = correctAmount + 1;
                
            }
            else {
            } 
        }
    }
    localStorage.setItem("finalResult", correctAmount);
} 

// Displays number of correct answers
button.onclick = function check() {
    
    results();

    let mainBody = document.getElementById("mainBody");
    mainBody.innerHTML = "";
    let result = document.createElement("p");
    result.classList.add("result-text");
    let resultDiv = document.createElement("div");
    resultDiv.classList.add("question-div");

    result.innerHTML = "You got " + localStorage.getItem("finalResult") + "/" + questions.length + " questions correct!";

    resultDiv.appendChild(result);
    mainBody.appendChild(resultDiv);
     
}

document.body.appendChild(button);