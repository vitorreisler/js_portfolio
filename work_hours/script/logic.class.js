export class salaryCalc {
  valuesArr = [];

  constructor(valueHour = 0, workedDays = 0, workedHours = 0) {
    this.valueHour = valueHour;
    this.workedDays = workedDays;
    this.workedHours = workedHours;
  }

  //Get the work hours and amount/h and multiplicate
  normalWorkDay() {
    const valueHour = parseFloat(document.getElementById("salary-hour").value);
    const workedHours = parseFloat(
      document.getElementById("worked-hours").value
    );
    let daySalary = valueHour * workedHours;
    console.log(daySalary);
    return daySalary;
  }

  //Getting the whole worked hours, inside this number taking hours with 125% and doing the math

  dayWith125() {
    const valueHour = parseFloat(document.getElementById("salary-hour").value);
    const workedHours = parseFloat(
      document.getElementById("worked-hours").value
    );
    const valueHsExtra125 = parseFloat(
      document.getElementById("extra-125").value
    );
    let daySalaryWith125perc =
      valueHour * (workedHours - valueHsExtra125) +
      valueHsExtra125 * (valueHour * 1.25);
    console.log(daySalaryWith125perc);
    return daySalaryWith125perc;
  }

  //Getting the whole worked hours, inside this number taking hours with 150% and doing the math
  dayWith150() {
    const valueHour = parseFloat(document.getElementById("salary-hour").value);
    const workedHours = parseFloat(
      document.getElementById("worked-hours").value
    );
    const valueHsExtra150 = parseFloat(
      document.getElementById("extra-150").value
    );
    let daySalaryWith150perc =
      valueHour * (workedHours - valueHsExtra150) +
      valueHsExtra150 * (valueHour * 1.5);
    console.log(daySalaryWith150perc);
    return daySalaryWith150perc;
  }

  //Doing all the math and rendering the html according with the right situation
  renderTotal() {
    const res = document.getElementById("res");
    const valueHour = parseFloat(document.getElementById("salary-hour").value);
    const workedHours = parseFloat(
      document.getElementById("worked-hours").value
    );
    const workedDays = parseFloat(document.getElementById("worked-days").value);
    const valueHsExtra125 = parseFloat(
      document.getElementById("extra-125").value
    );
    const valueHsExtra150 = parseFloat(
      document.getElementById("extra-150").value
    );

    let daySalary = valueHour * workedHours;
    let monthSalary = valueHour * workedHours * workedDays;
    let allDay150 = daySalary * 1.5;

    let daySalaryWith125perc =
      valueHour * (workedHours - valueHsExtra125) +
      valueHsExtra125 * (valueHour * 1.25);

    let daySalaryWith150perc =
      valueHour * (workedHours - valueHsExtra150) +
      valueHsExtra150 * (valueHour * 1.5);

    let workDay12Hours =
      valueHour * 8 + 2 * (valueHour * 1.25) + 2 * (valueHour * 1.5);

    if (valueHour && workedHours) {
      res.innerHTML = ` In your normal day you receive: ${daySalary} <br> `;
      //Salary based on normal day salary
      if (valueHour && workedHours && workedDays) {
        res.innerHTML = `Your salary based on your normal day work is: ${monthSalary.toLocaleString()}`;
      }
    }

    if (valueHour && workedHours && valueHsExtra125 && valueHsExtra150 === 0) {
      res.innerHTML = `
            In days that you have 125% you receive: ${daySalaryWith125perc} <br>
            `;
    }
    if (valueHour && workedHours && valueHsExtra150) {
      res.innerHTML = `
            In days that you have 150% you receive: ${daySalaryWith150perc} <br>
            `;
    }
    if (valueHour && workedHours && valueHsExtra150 === workedHours) {
      res.innerHTML = `
            In your 150% day you receive: ${allDay150} <br>
            `;
    }

    if (
      valueHour &&
      workedHours === 12 &&
      valueHsExtra125 === 2 &&
      valueHsExtra150 === 2
    ) {
      res.innerHTML = `
          In your 12 hours day work you receive: ${workDay12Hours} <br>
          `;
    }
  }

  //Playing the sound after enter
  playCashierSound() {
    let audio = document.getElementById("cashierSound");
    return audio.play();
  }
}
