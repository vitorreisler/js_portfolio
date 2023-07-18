const $audio:NodeListOf<HTMLAudioElement> = document.querySelectorAll("audio")
const audio: HTMLAudioElement[] = Array.from($audio)


const [
    audio1, //audio[0]
    audio2, //audio[1]
    audio3, 
    audio4,
    audio5,
    audio6,
    audio7,
    audio8
] = audio


document.addEventListener("keydown", (element) => {
    let dataSetValue = element.keyCode
    console.log(dataSetValue);
    
        dataSetValue === 65 ? audio1.play() : null
        dataSetValue === 83 ? audio2.play() : null
        dataSetValue === 68 ? audio3.play() : null
        dataSetValue === 70 ? audio4.play() : null
        dataSetValue === 71 ? audio5.play() : null
        dataSetValue === 72 ? audio6.play() : null
        dataSetValue === 74 ? audio7.play() : null
        dataSetValue === 75 ? audio8.play() : null
     
})
 



