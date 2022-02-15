let calcBody= document.getElementById("calc-body");
let screen = document.getElementById("screen");
let equalsButton = document.getElementById("equals-button");
let acButton = document.getElementById("ac-button");
let brackets = document.getElementById("brackets");
let solutionDisplay = document.getElementById("solution-display");
let equationDisplay = document.getElementById("equation-display");

//subtract
let subtract = (num1, num2) => {
    solutionDisplay.textContent = +num1 - +num2;
}

//multiply
let multiply = (num1, num2) => {
    // solutionDisplay.textContent ="";
    solutionDisplay.textContent = +num1 * +num2;
}

//divide
let divide = (num1, num2) => {
    if (+num2 === 0) {solutionDisplay.textContent = "Can't divide by 0";}
    else {solutionDisplay.textContent = +num1 / +num2;}
    }

//add
let add = (num1,num2) => {
    solutionDisplay.textContent = +num1 + +num2;
  };

let operate = (num1,operator,num2) => {
    if(operator === " + "){
        add(num1,num2);
    } else if (operator === " - "){
        subtract(num1,num2);
    } else if (operator === " * "){
        multiply(num1,num2);
    } else if (operator === " / "){
        divide(num1,num2);
    } else {
        return "error";
    }
 };
//click animation
document.querySelectorAll(".buttons").forEach(button => {
    button.addEventListener("click",() =>{
        button.classList.add("clicked");
        setTimeout(() =>{button.classList.remove("clicked");}, 100);
    })
});



//function for displaying and storing values

//display buttons on screen
document.querySelectorAll(".numbers").forEach(number => {
    let store = () => {
        solutionDisplay.textContent += number.textContent;
    }
    number.addEventListener("click",store);
});

document.querySelectorAll(".operators").forEach(operator => {
    operator.addEventListener("click", () => {
        let num1 = solutionDisplay.textContent;
        let operatorChoice = operator.textContent;
        solutionDisplay.textContent += operatorChoice;

            equalsButton.addEventListener("click", () => {
                let arrayFromDisplay = solutionDisplay.textContent.split(" ");
                let num2 = arrayFromDisplay[arrayFromDisplay.length - 1];
                finalDisplay = solutionDisplay.textContent;
                equationDisplay.textContent = finalDisplay;
                operate(num1,operatorChoice,num2);
                });
      })
   })




//AC button
acButton.addEventListener("click", () => {
    finalDisplay = "";
    solutionDisplay.textContent = "";
    equationDisplay.textContent = "";
})

//delete button SOLVED
const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", ()=>{
    if(!solutionDisplay.textContent){equationDisplay.textContent = "";
    console.log(solutionDisplay.textContent);
    return;}
    let display = solutionDisplay.textContent;
        let lastNumberArray = display.split("");
        lastNumberArray.pop().toString();
    solutionDisplay.textContent = lastNumberArray.join("");
    
    });

    //arrayFromDisplay finalDisplay num2 num1 operatorChoice lastNumberArray solutionDisplay.textContent
    