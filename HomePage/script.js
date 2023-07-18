let $backgrounds = document.querySelectorAll(".bg-light")
let $text = document.querySelectorAll(".black-letter")
/* let $moonSun = document.querySelector(".fa-moon") */
let $moonSun = document.getElementById("darkLight-icon")
console.log($moonSun);
$moonSun.addEventListener("click", darkLightMode)

function darkLightMode(){
    $backgrounds.forEach((item) => {
        item.classList.toggle("bg-dark")
    })

    
    $text.forEach((item) => {
        item.classList.toggle("white-letter")
    })


    if (document.body.classList.contains("dark-theme")){
        $moonSun.src = "./imgs/moon-solid.png"
        document.body.classList.remove("dark-theme")
    } else {
        document.body.classList.add("dark-theme")
        $moonSun.src = "./imgs/sun-regular.png"
        
    }

   
}
