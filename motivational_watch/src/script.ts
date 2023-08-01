let $resWatch = document.querySelector("#res-watch")
let $resWeather = document.querySelector("#res-weather") 
let $btnWeather = document.querySelector("#btn-weather") as HTMLButtonElement
let $inputWeather = document.querySelector("#input-weather") as HTMLInputElement
let myMain = document.getElementById("main")
let message = document.querySelector(".message")
let API_BASE = "https://api.api-ninjas.com/v1/weather?city="
message.innerHTML = ""
let indexPhrase:number



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

/******Calls*********/
$btnWeather.addEventListener("click", () => {
    renderWeather(getInputValue())
    
})
window.addEventListener("keypress", (e)=> {
    if(e.keyCode===13){
        renderWeather(getInputValue())
    }
})






/*******Functions*********/


//Taking random number
function getRandomInt(min:number, max:number) {
    return min + Math.floor(Math.random() * (max - min - 1));
}

//Getting a random number from 0 to the array length 
function shufflePhrases(){
    indexPhrase = getRandomInt(0,phrasesLength)
    return indexPhrase 
}

//Using the number that we got from shufflePhrases as index to choose randomly a phrase
function renderPhrase(){
    shufflePhrases()
    return message.innerHTML = `${phrases[indexPhrase]}`

}

// build the watch logic, checking each second
function runTime(){
    let date = new Date()
    let seconds:string|number = date.getSeconds()
    let minutes:string|number = date.getMinutes()
    let hours:string|number = date.getHours()
    let time
    $resWatch.innerHTML =''
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
    time = `${hours}:${minutes}:${seconds}`
    $resWatch.innerHTML += time
setTimeout(runTime, 1000)
}
runTime()

//Checking the hour to change the bg-color and bg-image
function checkHourForChangeBg(){
    let date = new Date
    let hours = date.getHours()
    let minutes = date.getMinutes()
    if (hours <=11){
        myMain.classList.add("morning")
        document.body.classList.add ("morning")
        renderPhrase()    }
     if (hours > 11 && hours <= 17){
        myMain.classList.remove("morning")
        document.body.classList.remove("morning")
        myMain.classList.add("evening")
        document.body.classList.add ("evening")
    renderPhrase()
    }

    if (hours >= 18 && hours <= 23 && minutes <= 59){
        myMain.classList.remove("evening")
        document.body.classList.remove("evening")
        myMain.classList.add("night")
        document.body.classList.add ("night")
        renderPhrase()
        }
    
   
}
checkHourForChangeBg()



/********* API *************/
//Getting the input value
function getInputValue(){
    let $inputValue = $inputWeather.value
    $inputValue.toString()
    console.log($inputValue);
    return $inputValue
    
}

//Getting the promise 
async function getPromise(city:string){
let apiRaw = fetch(`${API_BASE}${city}`, {
method: "GET",
headers: {
    "Content-Type": "application/json",
    "X-Api-Key": "Yib7q/9YovoiTKUW/4In5w==EGflnfYzclwo4y1v",
}
})
return (await apiRaw).json()
}

//Destructuring the Obj returned by the promise and doing Render to the infos
async function renderWeather(city:string){
    let weatherObj = await getPromise(city)
    let {temp,min_temp,max_temp} = weatherObj
    $resWeather.innerHTML = `
    <br>
    City: ${city} <br>
    Temp: ${temp} <br>
    Max-Temp: ${max_temp} <br>
    Min-Temp: ${min_temp}
    `
    
}



