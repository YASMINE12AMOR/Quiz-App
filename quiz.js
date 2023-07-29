const quizData=[
    {
        question:"Which of the following is a widely used and effective machine learning algorithm based on the idea of bagging?",
        a:"Random Forest",
        b:"Regression",
        c:"Classification",
        d:"Decision Tree",
        correct: "a"
    },
    {
        question:"Which of the following is not a supervised learning?",
        a:"PCA",
        b:"Naive Bayesian",
        c:"Linear Regression",
        d:"Decision Tree",
        correct: "a"
    },
    {
        question:"Real-Time decisions, Game AI, Learning Tasks, Skill acquisition, and Robot Navigation are applications of________",
        a:"Reinforcement Learning",
        b:"Supervised Learning: Classification",
        c:"Unsupervised Learning: Regression",
        d:"None of the above",
        correct: "a"
    },
    {
        question:"Machine Learning technique that helps in detecting the outliers in data.",
        a:"Clustering",
        b:"Classification",
        c:"Anomaly Detection",
        d:"All of the above",
        correct: "c"
    }/*,
    {
        question:"What is the disadvantage of decision trees?",
        a:"Factor analysis",
        b:"Decision trees are robust to outliers",
        c:"Decision trees are prone to be overfit",
        d:"All of the above",
        correct: "c",
    },
    {
        question:"What is the application of machine learning methods to a large database called?",
        a:"Data mining",
        b:"Internet of things",
        c:"Artificial intelligence",
        d:"Big data computing",
        correct: "a"
    },
    {
        question:"Identify the type of learning in which labeled training data is used.",
        a:"Reinforcement learning",
        b:"Unsupervised learning",
        c:"Supervised learning",
        d:"Semi unsupervised learning",
        correct: "c"
    },
    {
        question:"Identify the kind of learning algorithm for facial identities for facial expressions",
        a:"Prediction",
        b:"Generating patterns",
        c:"Recognition Patterns",
        d:"Recognizing anomalies",
        correct: "c"
    },
    {
        question:"Identify the successful applications of Machine Learning.",
        a:"Learning to recognize spoken words",
        b:"Learning to drive an autonomous vehicle",
        c:"Learning to classify new astronomical structures",
        d:"All of the Above",
        correct: "d"
    },
    {
        question:"Machine Learning has various function representation, which of the following is not numerical functions?",
        a:"Case-based",
        b:"Neural Network",
        c:"Linear Regression",
        d:"Support Vector Machines",
        correct: "a"
    }*/
    
]

const quiz=document.getElementById('quiz')
const answerEls=document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const scoreEl=document.getElementById('score')
const resultEl=document.getElementById('result')
const submit_btn=document.getElementById('submit')
let currentQuiz=0
let score=0
loadQuiz()
function loadQuiz(){
    deselectAnswers()
    const currentQuizData=quizData[currentQuiz]
    questionEl.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked=false)

}
function getSelected(){
    let answer
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer
}
submit_btn.addEventListener('click',()=>{
    const answer=getSelected()
    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++
        }
    
    currentQuiz++
    if(currentQuiz<quizData.length){
        loadQuiz()
    }else{
        scoreEl.innerHTML=`
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">PLay Again</button> `
        if(score==4){
            resultEl.innerHTML = '<img src="images/win.gif" alt="You Win!" class="img-result">'
        }else{
            resultEl.innerHTML = '<img src="images/lose.gif" alt="You Lose!" class="img-result">';
        }

    }
    }
}
)
