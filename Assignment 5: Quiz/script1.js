const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: [
      { text: '<javascript>', correct: false },
      { text: '<script>', correct: true },
      { text: '<scripting>', correct: false },
      { text: '<js>', correct: false }
    ]
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    answers: [
      { text: 'alertbox(“Hello World”);', correct: false },
      { text: 'msg(“Hello World”);', correct: false },
      { text: 'msgbox("Hello World");', correct: false },
      { text: 'alert("Hello World");', correct: true }
    ]
  },
  {
    question: 'How do you create a function in JavaScript?',
    answers: [
      { text: 'function myFunction', correct: true },
      { text: 'function : myFunction', correct: false },
      { text: 'function = myFunction', correct: false },
      { text: 'function *myFunction', correct: false }
    ]
  },
  {
    question: 'How can you add a comment in a JavaScript?',
    answers: [
      { text: '<!--This is a comment--!>', correct: false },
      { text: '"This is a comment', correct: false },
      { text: '//This is a comment', correct: true },
      { text: '#This is a comment', correct: false }
    ]
  },
  {
    question: 'Which of the following is not a reserved word in JavaScript?',
    answers: [
      { text: 'interface', correct: false },
      { text: 'throws', correct: false },
      { text: 'program', correct: true },
      { text: 'short', correct: false }
    ]
  },
  {
    question: 'The external JavaScript file must contain <script> tag. True or False?',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true }
    ]
  },
  {
    question: ' How is the function called in JavaScript?',
    answers: [
      { text: 'call myFunction()', correct: false },
      { text: 'myFunction()', correct: true },
      { text: 'call function myFunction()', correct: false },
      { text: 'function myFunction()', correct: false }
    ]
  },
  {
    question: 'What is the JavaScript syntax for printing values in Console?',
    answers: [
      { text: 'print(5)', correct: false },
      { text: 'console.log(5);', correct: true },
      { text: 'console.print(5);', correct: false },
      { text: 'print.console(5);', correct: false }
    ]
  },
  {
    question: ' What will be the output of the following code?   \n <script> \n document.write(typeof(24.49)); \n </script> ',
    answers: [
      { text: 'float', correct: false },
      { text: 'number', correct: true },
      { text: 'integer', correct: false },
      { text: 'double', correct: false }
    ]
  },
  {
    question: 'What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?',
    answers: [
      { text: 'strip()', correct: false },
      { text: 'trim()', correct: true },
      { text: 'stripped()', correct: false },
      { text: 'trimmed()', correct: false }
    ]
  }
]
