import { salaryCalc } from "./logic.class.js";

let run = document.getElementById("btn-run")

let newSalaryCalc = new salaryCalc()
run.addEventListener("click", newSalaryCalc.normalWorkDay)
run.addEventListener("click", newSalaryCalc.dayWith125)
run.addEventListener("click", newSalaryCalc.dayWith150)
run.addEventListener("click", newSalaryCalc.renderTotal)

let try2 = new salaryCalc().normalWorkDay(37, 8)
try2 = new salaryCalc().dayWith150(37, 10, 2)
console.log(try2);

window.addEventListener("keypress", (e) => {
if(e.keyCode === 13){
    newSalaryCalc.normalWorkDay()
    newSalaryCalc.dayWith125()
    newSalaryCalc.dayWith150()
    newSalaryCalc.renderTotal()
}
})