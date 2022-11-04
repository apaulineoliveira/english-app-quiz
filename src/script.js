const QUIZ_DATA = [
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

const QUIZ= document.getElementById('quiz')
const ANSWER_ELS = document.querySelectorAll('.answer')
const QUESTION_EL = document.getElementById('question')
const A_TEXT = document.getElementById('a_text')
const B_TEXT = document.getElementById('b_text')
const C_TEXT = document.getElementById('c_text')
const D_TEXT = document.getElementById('d_text')
const SUBMIT_BTN = document.getElementById('submit')

let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const CURRENT_QUIZ_DATA = QUIZ_DATA[currentQuiz]
    QUESTION_EL.innerText = CURRENT_QUIZ_DATA.question
    A_TEXT.innerText = CURRENT_QUIZ_DATA.a
    B_TEXT.innerText = CURRENT_QUIZ_DATA.b
    C_TEXT.innerText = CURRENT_QUIZ_DATA.c
    D_TEXT.innerText = CURRENT_QUIZ_DATA.d
}

function deselectAnswers() {
    ANSWER_ELS.forEach(ANSWER_EL => ANSWER_EL.checked = false)
}

function getSelected() {
    let answer
    ANSWER_ELS.forEach(ANSWER_EL => {
        if(ANSWER_EL.checked) {
            answer = ANSWER_EL.id
        }
    })
    return answer
}

SUBMIT_BTN.addEventListener('click', () => {
    const ANSWER = getSelected()
    if(ANSWER) {
       if(ANSWER === QUIZ_DATA[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < QUIZ_DATA.length) {
           loadQuiz()
       } else {
           QUIZ.innerHTML = `
           <h2>Você acertou ${score} de ${QUIZ_DATA.length} questões corretamente!</h2>
           <button onclick="location.reload()">Jogar novamente</button>
           `
       }
    }
})