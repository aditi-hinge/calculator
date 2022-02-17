let calcBody= document.getElementById("calc-body");
let screen = document.getElementById("screen");
let equalsButton = document.getElementById("equals-button");
let acButton = document.getElementById("ac-button");
let brackets = document.getElementById("brackets");
let solutionDisplay = document.getElementById("solution-display");
let equationDisplay = document.getElementById("equation-display");
let percentage = document.getElementById("percentage");
let root = document.getElementById("root");
let factorial = document.getElementById("factorial");

//subtract
let subtract = (num1, num2) => {
    if(!num2){num2=0;equationDisplay.textContent = "";}
    let result = +num1 - +num2;
    solutionDisplay.textContent = result;
}

//multiply
let multiply = (num1, num2) => {
    if(!num2){num2=1;equationDisplay.textContent = "";}
    let result = +num1 * +num2;
    solutionDisplay.textContent = result;
}

//divide
let divide = (num1, num2) => {
    if(!num2){solutionDisplay.textContent = num1;equationDisplay.textContent = "";}
    else if (+num2 === 0) {solutionDisplay.textContent = "Can't divide by 0";}
    else { let result = +num1 / +num2;
        solutionDisplay.textContent = result;
    }
}

//add
let add = (num1,num2) => {
    if(!num2){num2=0;equationDisplay.textContent = "";}
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
    number.addEventListener("click",()=>{
    solutionDisplay.textContent += number.textContent;
    })
});


//SOLVED FOR NOW
document.querySelectorAll(".operators").forEach(operator => {
    operator.addEventListener("click", () => {
        let operatorsArray = ["+", "-", "*", "/"];
        //only evaluate a single pair of numbers at a time
        if (operatorsArray.some(el => solutionDisplay.textContent.includes(el))) {
            let display = solutionDisplay.textContent;
            let num2 = display.split(" ").pop();
            let operator = display.split(" ")[1];
            let num1 = display.split(" ").shift();
            equationDisplay.textContent = `${display}`;
            operate(num1,operator,num2);
            }
        //for normally evaluating a pair at a time
        let operatorChoice = operator.textContent;
        solutionDisplay.textContent += operatorChoice;
        // equationDisplay.textContent = solutionDisplay.textContent[0];
     })
   })


equalsButton.addEventListener("click", () => {
    let initialDisplay = solutionDisplay.textContent;
    if(!initialDisplay){return;}
    
    let arrayFromDisplay = initialDisplay.split(" ");
    let num2 = arrayFromDisplay[arrayFromDisplay.length - 1];
    let num1 = arrayFromDisplay[0];
        if (!num1){solutionDisplay.textContent = "Format error"; return;}
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

//delete button SOLVED NOT, HAVE TO CLICK TWICE TO DELETE ONCE IN CASE OF OPERATORS
const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", ()=>{
    if(!solutionDisplay.textContent){equationDisplay.textContent = "";
    return;}
    else if (solutionDisplay.textContent === "Format error"){solutionDisplay.textContent = "";
    return;}
        //to remove spaces in the equation
        let display = solutionDisplay.textContent.replace(/\s/g,"");
        // console.log(display);
        let lastNumberArray = display.split("");
        lastNumberArray.pop().toString();
        solutionDisplay.textContent = lastNumberArray.join("");
    });


//percentage SOLVED for combination of operators but solution not rounded
percentage.addEventListener("click", () => {
    if(!solutionDisplay.textContent){return;}
    else if (solutionDisplay.textContent.includes(" ")) {
        let display = solutionDisplay.textContent;
        let lastNumber = display.split(" ").pop();
        let num1 = display.split(" ").shift();
        let operator = display.split(" ")[1];
        console.log(operator);
        console.log(num1);
        // console.log(display);
        let num2 = lastNumber / 100;
        // console.log(result);
        // solutionDisplay.textContent = result;
        equationDisplay.textContent = `${display}%`;
        operate(num1,operator,num2);
    } else {
        let display = solutionDisplay.textContent;
        // console.log(display);
        let result = display / 100;
        // console.log(result);
        solutionDisplay.textContent = result;
        equationDisplay.textContent = `${display}%`;
    }
    
});

//root SOLVED but solution not rounded
root.addEventListener("click", () => {
    if(!solutionDisplay.textContent){return;}
    else if (solutionDisplay.textContent.includes(" ")) {
        let display = solutionDisplay.textContent;
        console.log(display);
        let lastNumber = display.split(" ").pop();
        console.log(lastNumber);
        let num1 = display.split(" ").shift();
        let operator = display.split(" ")[1];
        console.log(operator);
        console.log(num1);
        // // console.log(display);
        let num2 = Math.sqrt(lastNumber);
        console.log(num2);
        // // console.log(result);
        // // solutionDisplay.textContent = result;
        equationDisplay.textContent = `${num1} ${operator} √${lastNumber}`;
        operate(num1,operator,num2);
    } else {
    let display = solutionDisplay.textContent;
    // console.log(display);
    let result = Math.sqrt(`${display}`);
    // console.log(result);
    solutionDisplay.textContent = result;
    equationDisplay.textContent = `√${display}`;
    }
});


//FACTORIAL SOLVED rounding up no

factorial.addEventListener("click", ()=>{
    if(!solutionDisplay.textContent){return;}
    else if(solutionDisplay.textContent.includes(" ")){
        let display = solutionDisplay.textContent;
        console.log(+display);
        let lastNumber = display.split(" ").pop();
        console.log(lastNumber);
            if (!lastNumber){solutionDisplay.textContent = "Format error"; return;}
        let num1 = display.split(" ").shift();
        let operator = display.split(" ")[1];
        console.log(operator);
        console.log(num1);
            if(+lastNumber < 0){solutionDisplay.textContent ="Not possible";}
            else if(+lastNumber === 0 || +lastNumber === 1){
                let num2 = 1;
                equationDisplay.textContent = `${num1}-${lastNumber}!`;
                operate(num1,operator,num2);}
            else if(+lastNumber > 11){solutionDisplay.textContent = "Can't calculate";}
            else {
                equationDisplay.textContent = `${num1}-${lastNumber}!`
                for (let i = +lastNumber - 1; i >= 1; i--) {
                    lastNumber *= i;
                }
                operate(num1,operator,lastNumber);
                }
        }
    else {
        let num = solutionDisplay.textContent.replace(/\s/g,"");
        console.log(+num);
        if(+num < 0){solutionDisplay.textContent ="Not possible";}
        else if(+num === 0 || +num === 1){
                solutionDisplay.textContent = 1;
                equationDisplay.textContent = `${num}!`}
        else if(+num > 20){
            solutionDisplay.textContent = "Can't calculate";}
        else {
            equationDisplay.textContent = `${num}!`
            for (let i = +num - 1; i >= 1; i--) {
              num *= i;
            }
            solutionDisplay.textContent = +num;
            }
        }
    }
)






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

//DONT LOOK BELOW THIS LINE!

// document.querySelectorAll(".operators").forEach(operator => {
//     operator.addEventListener("click", () => {
//         let operatorsArray = ["+", "-", "*", "/"];
//         //only evaluate a single pair of numbers at a time
//         if (operatorsArray.some(el => solutionDisplay.textContent.includes(el))) {
//             let display = solutionDisplay.textContent;
//             let operator = display.split(" ")[1];
//             let num1 = display.split(" ").shift();
//             equationDisplay.textContent = `${display}`;
//             operate(num1,operator,num2);
//             }
//         //for normally evaluating a pair at a time
//         let operatorChoice = operator.textContent;
//         solutionDisplay.textContent += operatorChoice;
//     })
//    })

// //operators function
// document.querySelectorAll(".operators").forEach(operator => {
//     operator.addEventListener("click", () => {
//         let operatorsArray = ["+", "-", "*", "/"," + ", " - ", " * ", " / "];
    
//         //only evaluate a single pair of numbers at a time
//         if (operatorsArray.some(el => solutionDisplay.textContent.includes(el))) {
//             // if (operatorsArray.some(el => console.log(el))) {    
//             let display = solutionDisplay.textContent;
//             let num2 = display.split(" ").pop();

//             let operator = display.split(" ")[1];
//             let num1 = display.split(" ").shift();
//             // console.log(num2+num1+operator);
//             equationDisplay.textContent = `${display}`;
//             console.log(equationDisplay.textContent);

//             //trying to solve for */
//                 // if(num2 === ""){console.log("operator: "+operator);
//                 // }
//             operate(num1,operator,num2);
//         }
//         //for normally evaluating a pair at a time
//         let operatorChoice = operator.textContent;
//         solutionDisplay.textContent += operatorChoice;
//         // equationDisplay.textContent = solutionDisplay.textContent[0];
        
//     })
//    })

//operators function
// document.querySelectorAll(".operators").forEach(operator => {
//     operator.addEventListener("click", () => {
//         let operatorsArray = ["+", "-", "*", "/"];
//         // if(solutionDisplay.textContent.includes("/") &&){
//         //     console.log("mee");
//         // }
//         //only evaluate a single pair of numbers at a time
//         if (operatorsArray.some(el => solutionDisplay.textContent.includes(el))) {
//             // if (operatorsArray.some(el => console.log(el))) {    
//             let display = solutionDisplay.textContent;
//             let num2 = display.split(" ").pop();
//                 if(solutionDisplay.textContent.includes("/") && !num2){
//                 console.log("mee11");
//                 // let operator = solutionDisplay.textContent.split("");
//                 // console.log(operator.replace(/\s/g,""));
//                 let removeSpaces = solutionDisplay.textContent.replace(/\s/g,"");
                
//                 // console.log(operator);
//                 // solutionDisplay.textContent += removeSpaces.split("")[0];
//                 return;
//             }
//             let operator = display.split(" ")[1];
//                 // if(operator){return;}
//             let num1 = display.split(" ").shift();
//             // console.log(num2+num1+operator);
//             equationDisplay.textContent = `${display}`;
//             // console.log(equationDisplay.textContent);

//             //trying to solve for */
//                 // if(num2 === ""){console.log("operator: "+operator);
//                 // }
//             operate(num1,operator,num2);
//                 if(operator === "/"){console.log(solutionDisplay.textContent +" "+ operator);}
//         }
//         //for normally evaluating a pair at a time
//         let operatorChoice = operator.textContent;
//         solutionDisplay.textContent += operatorChoice;
//         // equationDisplay.textContent = solutionDisplay.textContent[0];
        
//     })
//    })

//percentage SOLVED but solution not rounded
// percentage.addEventListener("click", () => {
//     let display = solutionDisplay.textContent;
//     // console.log(display);
//     let result = display / 100;
//     // console.log(result);
//     solutionDisplay.textContent = result;
//     equationDisplay.textContent = `${display}%`;
// });

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