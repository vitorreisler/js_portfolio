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

 document.addEventListener("touchstart", (e) => {
    let target = e.target as HTMLElement 
    let touchTargetValue = target.innerText
    
    touchTargetValue === "A" ? audio1.play() : null
        touchTargetValue === "S" ? audio2.play() : null
        touchTargetValue === "D" ? audio3.play() : null
        touchTargetValue === "F" ? audio4.play() : null
        touchTargetValue === "G" ? audio5.play() : null
        touchTargetValue === "H" ? audio6.play() : null
        touchTargetValue === "J" ? audio7.play() : null
        touchTargetValue === "K" ? audio8.play() : null

    }
    
 )


