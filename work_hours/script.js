import { salaryCalc } from "./logic.class.js";
let run = document.getElementById("btn-run")

let newSalaryCalc = new salaryCalc()
run.addEventListener("click", newSalaryCalc.normalWorkDay)
run.addEventListener("click", newSalaryCalc.dayWith125)
run.addEventListener("click", newSalaryCalc.dayWith150)
run.addEventListener("click", newSalaryCalc.renderTotal)
run.addEventListener("click", newSalaryCalc.playCashierSound)


window.addEventListener("keypress", (e) => {
if(e.keyCode === 13){
    newSalaryCalc.normalWorkDay()
    newSalaryCalc.dayWith125()
    newSalaryCalc.dayWith150()
    newSalaryCalc.renderTotal()
    newSalaryCalc.playCashierSound()
}
})


