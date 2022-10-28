const quizData = [
    {
        question: "O que significa a expressão are you nuts?",
        a: "Você é louco?",
        b: "Você está bem?",
        c: "Você vem hoje?",
        d: "Você é esperto?",
        correct: "a",
    },

    {
        question: "O que significa a expressão jack shit?",
        a: "Interesses",
        b: "Vergonhas",
        c: "Merda nenhuma",
        d: "Coisa nenhuma",
        correct: "c",
    },

    {
        question: "O que significa o phrasal verbs ask out?",
        a: "Comprar algo",
        b: "Chamar alguém pra sair",
        c: "Esperar algo",
        d: "Pedir algo",
        correct: "d",
    },

    {
        question: "O que significa a expressão out of the blue?",
        a: "Fora do azul",
        b: "Quase",
        c: "Desistir",
        d: "Do nada",
        correct: "d",
    },

    {
        question: "O que significa back down?",
        a: "Retirar sua posição ou ideia em uma discussão",
        b: "Ir atrás de algo",
        c: "Retornar",
        d: "Perder a cabeça",
        correct: "a",
    },

    {
        question: "O que significa a expressão back off?",
        a: "Caminhar",
        b: "Afastar-se",
        c: "Avançar",
        d: "Correr",
        correct: "b",
    },

    {
        question: "O que significa a expressão back up?",
        a: "Apoiar alguém em alguma situação",
        b: "Guardar",
        c: "Armazenar",
        d: "Comprar",
        correct: "a",
    },

    {
        question: "O que significa a expressão brush up?",
        a: "Revisar alguma habilidade que está enferrujada",
        b: "Correr atrás",
        c: "Escovar os dentes",
        d: "Comprar algo",
        correct: "a",
    },

    {
        question: "O que significa a expressão carry away?",
        a: "Mergulhar fundo",
        b: "Correr para longe",
        c: "Quando alguém se deixa levar pela emoção",
        d: "Perder a cabeça",
        correct: "c",
    },

    {
        question: "O que significa a expressão carry on?",
        a: "Retirar sua posição ou ideia em uma discussão",
        b: "Ir atrás de algo",
        c: "Quando alguém se deixar levar pela emoção",
        d: "Continuar fazendo algo apesar das dificuldades",
        correct: "d",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Você acertou ${score} de ${quizData.length} questões corretamente!</h2>
           <button onclick="location.reload()">Jogar novamente</button>
           `
       }
    }
})