import { salaryCalc } from "./logic.class.js";

let teste = document.getElementById("btn-run")

let try1 = new salaryCalc()
teste.addEventListener("click", try1.normalWorkDay)
teste.addEventListener("click", try1.dayWith125)
teste.addEventListener("click", try1.dayWith150)
teste.addEventListener("click", try1.renderTotal)

let try2 = new salaryCalc().normalWorkDay(37, 8)
try2 = new salaryCalc().dayWith150(37, 10, 2)
console.log(try2);

window.addEventListener("keypress", (e) => {
if(e.keyCode === 13){
    try1.normalWorkDay()
    try1.dayWith125()
    try1.dayWith150()
    try1.renderTotal()
}
})