let calcBody= document.getElementById("calc-body");
let screen = document.getElementById("screen");
let equalsButton = document.getElementById("equals-button");
let acButton = document.getElementById("ac-button");
let brackets = document.getElementById("brackets");
let solutionDisplay = document.getElementById("solution-display");
let equationDisplay = document.getElementById("equation-display");
let percentage = document.getElementById("percentage");
let root = document.getElementById("root");

//subtract
let subtract = (num1, num2) => {
    let result = +num1 - +num2;
    solutionDisplay.textContent = result;
}

//multiply
let multiply = (num1, num2) => {
    let result = +num1 * +num2;
    solutionDisplay.textContent = result;
}

//divide
let divide = (num1, num2) => {
    if (+num2 === 0) {solutionDisplay.textContent = "Can't divide by 0";}
    else { let result = +num1 / +num2;
        solutionDisplay.textContent = result;
    }
}

//add
let add = (num1,num2) => {
    let result = +num1 + +num2;
    solutionDisplay.textContent = result;
  };

let operate = (num1,operator,num2) => {
    if(operator === "+"){
        add(num1,num2);
    } else if (operator === "-"){
        subtract(num1,num2);
    } else if (operator === "*"){
        multiply(num1,num2);
    } else if (operator === "/"){
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
    // let store = () => {
    //     solutionDisplay.textContent += number.textContent;
    // }
    // number.addEventListener("click",store);
    number.addEventListener("click",()=>{
        solutionDisplay.textContent += number.textContent;
    })
});

//operators function
document.querySelectorAll(".operators").forEach(operator => {
    operator.addEventListener("click", () => {
        let operatorChoice = operator.textContent;
        console.log(operatorChoice);
        solutionDisplay.textContent += operatorChoice;
    })
   })

  //equals button function 
// equalsButton.addEventListener("click", () => {
//     let initialDisplay = solutionDisplay.textContent;
//     if(!initialDisplay){return;}
//     console.log(typeof initialDisplay);
//     let removedBrackets = initialDisplay.replace(/[^0-9+-/*]/g,"");
//     console.log(removedBrackets);
//     let arrayFromDisplay = removedBrackets.split("");
//     console.log(arrayFromDisplay);
//     let num2 = arrayFromDisplay[arrayFromDisplay.length - 1];
//     console.log(num2);
//     let num1 = arrayFromDisplay[0];
//     let operatorChoice = `${arrayFromDisplay[1]}`;
//     let finalDisplay = solutionDisplay.textContent;
//     equationDisplay.textContent = finalDisplay;
//     operate(num1,operatorChoice,num2);
//     });

equalsButton.addEventListener("click", () => {
    let initialDisplay = solutionDisplay.textContent;
    if(!initialDisplay){return;}
    // let removedBrackets = initialDisplay.replace(/[^0-9+-/*]/g,"");
    let arrayFromDisplay = initialDisplay.split(" ");
    let num2 = arrayFromDisplay[arrayFromDisplay.length - 1];
    let num1 = arrayFromDisplay[0];
    let operatorChoice = `${arrayFromDisplay[1]}`;
    let finalDisplay = solutionDisplay.textContent;
    equationDisplay.textContent = finalDisplay;
    operate(num1,operatorChoice,num2);
    });

//AC button
acButton.addEventListener("click", () => {
    solutionDisplay.textContent = "";
    equationDisplay.textContent = "";
})

//delete button SOLVED
const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", ()=>{
    if(!solutionDisplay.textContent){equationDisplay.textContent = "";
    return;}
    let display = solutionDisplay.textContent;
        let lastNumberArray = display.split("");
        lastNumberArray.pop().toString();
    solutionDisplay.textContent = lastNumberArray.join("");
    
    });

//brackets button WORKS for a paor of calculation
brackets.addEventListener("click", () => {
    let display = solutionDisplay.textContent;
    // console.log(display);
    let lastNumberArray = display.split("");
    // console.log(lastNumberArray);
    // console.log("new display:" + display);
    if(lastNumberArray.includes("(")){
        // console.log("includes");
        solutionDisplay.textContent += ")";
    } else {
        // console.log("doesnt include");
        solutionDisplay.textContent += "(";
    }
})  

//percentage SOLVED but solution not rounded
percentage.addEventListener("click", () => {
    let display = solutionDisplay.textContent;
    // console.log(display);
    let result = display / 100;
    // console.log(result);
    solutionDisplay.textContent = result;
    equationDisplay.textContent = `${display}%`;
});

//root SOLVED but solution not rounded
root.addEventListener("click", () => {
    if(!solutionDisplay.textContent){return;}
    let display = solutionDisplay.textContent;
    // console.log(display);
    let result = Math.sqrt(`${display}`);
    // console.log(result);
    solutionDisplay.textContent = result;
    equationDisplay.textContent = `√${display}`;
});