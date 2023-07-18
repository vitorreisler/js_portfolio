let myMain = document.getElementById("main")
let message = document.querySelector(".message")
message.innerHTML = ""
let indexPhrase

const phrases = [
    '"Today is a new day, full of endless possibilities."',
    '"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."',
    '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill',
    '"The only way to do great work is to love what you do." - Steve Jobs',
    '"Success is not how high you have climbed, but how you make a positive difference to the world." - Roy T. Bennett',
    '"Your future is created by what you do today, not tomorrow."',
    `"Don't watch the clock; do what it does. Keep going." - Sam Levenson`,
    'If you want to live a happy life, tie it to a goal, not to people or things." - Albert Einstein',
    `"Believe you can and you're halfway there." - Theodore Roosevelt"`,
    '"The secret of getting ahead is getting started." - Mark Twain',
    '"The biggest adventure you can ever take is to live the life of your dreams." - Oprah Winfrey',
    `"You don't have to be great to start, but you have to start to be great." - Zig Ziglar`,
    '"It does not matter how slowly you go as long as you do not stop." - Confucius',
    '"Challenges are what make life interesting and overcoming them is what makes life meaningful." - Joshua J. Marine',
    '"Your positive action combined with positive thinking results in success." - Shiv Khera',
    '"If you want to achieve greatness, stop asking for permission." - Unknown',
]
let phrasesLength = phrases.length   



function runTime(){
    let date = new Date()
    let seconds = date.getSeconds()
    let minutes = date.getMinutes()
    let hours = date.getHours()
    let res = document.querySelector("#res")
    let time
    res.innerHTML =''
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
    time = `${hours}:${minutes}:${seconds}`
    res.innerHTML += time
setTimeout(runTime, 1000)
}
runTime()

function checkHourForChangeBg(){
    shufflePhrases()
    let date = new Date
    let hours = date.getHours()
    let minutes = date.getMinutes()
    if (hours <=11){
        myMain.classList.add("morning")
        document.body.classList.add ("morning")
        message.innerHTML = `${phrases[indexPhrase]}`
    }
     if (hours > 11 && hours <= 17){
    myMain.classList.remove("morning")
    document.body.classList.remove("morning")
    myMain.classList.add("evening")
    document.body.classList.add ("evening")
    message.innerHTML = `${phrases[indexPhrase]}`
    }

    if (hours >= 18 && hours <= 23 && minutes <= 59){
        myMain.classList.remove("evening")
        document.body.classList.remove("evening")
        myMain.classList.add("night")
        document.body.classList.add ("night")
        message.innerHTML = `${phrases[indexPhrase]}`
    }
    
   
}
checkHourForChangeBg()

function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min - 1));
}

function shufflePhrases(){
    indexPhrase = getRandomInt(0,phrasesLength)
    return indexPhrase 
}
