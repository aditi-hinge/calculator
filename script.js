let calcBody= document.getElementById("calc-body");
let screen = document.getElementById("screen");
let equalsButton = document.getElementById("equals-button");
let acButton = document.getElementById("ac-button");
let square = document.getElementById("square");
let solutionDisplay = document.getElementById("solution-display");
let equationDisplay = document.getElementById("equation-display");
let percentage = document.getElementById("percentage");
let root = document.getElementById("root");
let factorial = document.getElementById("factorial");
let pi = document.getElementById("pi");
let exponent = document.getElementById("exponent");
let period = document.getElementById("period");
let deleteButton = document.getElementById("delete");

//function to round the result
let round = (result) => {
    if(Math.floor(result) === result){
        return result;
    }
    return result.toFixed(3)/1;
}

//add
let add = (num1,num2) => {
    
    if(solutionDisplay.textContent.includes("^")){
        equationDisplay.textContent = "";
        return;}
    if(!num2){num2=0;equationDisplay.textContent = "";}
    let result = +num1 + +num2;
    solutionDisplay.textContent = round(result);
  };

//subtract
let subtract = (num1, num2) => {
    if(solutionDisplay.textContent.includes("^")){
        equationDisplay.textContent = "";
        return;}
    if(!num2){num2=0;equationDisplay.textContent = "";}
    let result = +num1 - +num2;
    solutionDisplay.textContent = round(result);
}

//multiply
let multiply = (num1, num2) => {
    if(solutionDisplay.textContent.includes("^")){
        equationDisplay.textContent = "";
        return;}
    if(!num2){num2=1;equationDisplay.textContent = "";}
    let result = +num1 * +num2;
    solutionDisplay.textContent = round(result);
}

//divide
let divide = (num1, num2) => {
    if(solutionDisplay.textContent.includes("^")){
        equationDisplay.textContent = "";
        return;}
    if(!num2){solutionDisplay.textContent = num1;equationDisplay.textContent = "";}
    else if (+num2 === 0) {solutionDisplay.textContent = "Can't divide by 0";}
    else { let result = +num1 / +num2;
        solutionDisplay.textContent = round(result);
    }
}



//power 
let power = (num1,num2) => {
    let display = solutionDisplay.textContent;
    if(display.includes("+")||display.includes("-")||
    display.includes("*")||display.includes("/")){
        equationDisplay.textContent = "";
        solutionDisplay.textContent="Format error";
        return;}
    if(!num2){num2=1;equationDisplay.textContent = "";}
    let result = Math.pow(num1,num2);
    solutionDisplay.textContent = round(result);
}  

let operate = (num1,operator,num2) => {
    if(operator === "+"){
        add(num1,num2);
    } else if (operator === "-"){
        subtract(num1,num2);
    } else if (operator === "*"){
        multiply(num1,num2);
    } else if (operator === "/"){
        divide(num1,num2);
    }  else if (operator === "^"){ 
        power(num1,num2); 
    } else {
        return "error";
    }
 };

//click animation
document.querySelectorAll(".buttons").forEach(button => {
    button.addEventListener("click",() =>{
        if(solutionDisplay.textContent.length > 16){
            equationDisplay.textContent = "";
            solutionDisplay.textContent = "Value too large";
            return;}
        button.classList.add("clicked");
        setTimeout(() =>{button.classList.remove("clicked");}, 100);
    })
});

//stop text overflow
document.querySelectorAll(".buttons").forEach(button => {
    button.addEventListener("click",() =>{
        if(solutionDisplay.textContent.length > 16)  return;
    })
});


//display buttons on screen
document.querySelectorAll(".numbers").forEach(number => {
    number.addEventListener("click",()=>{
    let display = solutionDisplay.textContent;
    if(display.length > 16 || display ==="Format error"||display === "Can't calculate"
    || display ==="Domain error" || display ==="Can't divide by 0" || display ==="Not possible" ||
        display === "Value too large") return;
    solutionDisplay.textContent += number.textContent;
    })
});


//operators event listener function
document.querySelectorAll(".operators").forEach(operator => {
    operator.addEventListener("click", () => {
        let display = solutionDisplay.textContent;
      if(display ==="Format error"||display === "Can't calculate" || display ==="Domain error" 
      || display ==="Can't divide by 0" || display ==="Not possible" ||
        display === "Value too large")  return;

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
     })
   })

//equals button
equalsButton.addEventListener("click", () => {
    let display = solutionDisplay.textContent;
      if(!display|| display ==="Format error"||display === "Can't calculate" || display ==="Domain error" 
      || display ==="Can't divide by 0" || display ==="Not possible" ||
        display === "Value too large")  return; 
       
    let arrayFromDisplay = display.split(" ");
    let num2 = arrayFromDisplay[arrayFromDisplay.length - 1];
    let num1 = arrayFromDisplay[0];
        if (!num1 || !num2 || num2==="."){solutionDisplay.textContent = "Format error"; return;}
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

//delete button
deleteButton.addEventListener("click", ()=>{
    let display = solutionDisplay.textContent;
    if(!display || display ==="Format error"||display === "Can't calculate" || display ==="Domain error" 
    || display ==="Can't divide by 0" || display ==="Not possible" ||
      display === "Value too large") {
        equationDisplay.textContent = "";
        solutionDisplay.textContent = "";
    }
    else{    
    //to remove spaces in the equation
        display.replace(/\s/g,"");
        let lastNumberArray = display.split("");
        lastNumberArray.pop().toString();
        solutionDisplay.textContent = lastNumberArray.join("");
        }
    });


//percentage
percentage.addEventListener("click", () => {
    let display = solutionDisplay.textContent;
    if(!display || display ==="Format error"||display === "Can't calculate" || display ==="Domain error" 
    || display ==="Can't divide by 0" || display ==="Not possible" ||
      display === "Value too large") return;
    
    else if (solutionDisplay.textContent.includes(" ")) {
        let display = solutionDisplay.textContent;
        let lastNumber = display.split(" ").pop();
        let num1 = display.split(" ").shift();
        let operator = display.split(" ")[1];
        let num2 = lastNumber / 100;
        equationDisplay.textContent = `${display}%`;
        operate(num1,operator,num2);
    } else {
        let display = solutionDisplay.textContent;
        let result = display / 100;
        solutionDisplay.textContent = round(result);
        equationDisplay.textContent = `${display}%`;
    }
    
});

//root
root.addEventListener("click", () => {
    let display = solutionDisplay.textContent;
    if(!display || display ==="Format error"||display === "Can't calculate" || display ==="Domain error" 
        || display ==="Can't divide by 0" || display ==="Not possible" ||
         display === "Value too large") return;

    else if (solutionDisplay.textContent.includes(" ")) {
        let display = solutionDisplay.textContent;
        let lastNumber = display.split(" ").pop();
        let num1 = display.split(" ").shift();
        let operator = display.split(" ")[1];
        let num2 = Math.sqrt(lastNumber);
        equationDisplay.textContent = `${num1} ${operator} √${lastNumber}`;
        operate(num1,operator,num2);
    } else {
    let display = solutionDisplay.textContent;
    let result = Math.sqrt(`${display}`);
    solutionDisplay.textContent = round(result);
    equationDisplay.textContent = `√${display}`;
    }
});

//pi
pi.addEventListener("click",()=>{
    let display = solutionDisplay.textContent;
    if(display ==="Format error"||display === "Can't calculate"
    || display ==="Domain error" || display ==="Value too large" || display ==="Can't divide by 0" 
    || display ==="Not possible") return;

    // for blank screen
    if(!solutionDisplay.textContent){
        solutionDisplay.textContent = 3.14;
        equationDisplay.textContent = "𝛑";
        return;}
    else if (solutionDisplay.textContent.includes(" ")) {
            let display = solutionDisplay.textContent;
            let lastNumber = display.split(" ").pop();
                if(!lastNumber){
                    let num1 = display.split(" ").shift();
                    let operator = display.split(" ")[1];
                    let num2 = 3.14;
                    equationDisplay.textContent = `${num1} ${operator} 𝛑`;
                    operate(num1,operator,num2);}
                else if(lastNumber!==3.14){
                    let num1 = display.split(" ").shift();
                    let operator = display.split(" ")[1];
                    let num2 = lastNumber * 3.14;
                    equationDisplay.textContent = `${num1} ${operator} ${lastNumber}𝛑`;
                    operate(num1,operator,num2);
                    return;
                }
    } else{
    //for single digit calculation    
    let display = solutionDisplay.textContent;
    let result = display * 3.14;
    solutionDisplay.textContent = round(result);
    equationDisplay.textContent = `${display}𝛑`;
    }

})

//factorial
factorial.addEventListener("click", ()=>{
    let display = solutionDisplay.textContent;
    if(!display || display ==="Format error"||display === "Can't calculate"
    || display ==="Domain error" || display ==="Can't divide by 0" || display ==="Not possible"
    || display ==="Value too large"){
        equationDisplay.textContent = "";
        solutionDisplay.textContent = "";
        return;}
    if(solutionDisplay.textContent.includes(".")){solutionDisplay.textContent ="Domain error";
        equationDisplay.textContent = "";
            return;}
    else if(solutionDisplay.textContent.includes(" ")){
        let display = solutionDisplay.textContent;
        let lastNumber = display.split(" ").pop();
            if (!lastNumber){solutionDisplay.textContent = "Format error"; return;}
        let num1 = display.split(" ").shift();
        let operator = display.split(" ")[1];
            if(+lastNumber < 0 || !num1){solutionDisplay.textContent ="Format error"; return;}
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
        if(+num < 0){solutionDisplay.textContent ="Not possible";}
        else if(+num === 0 || +num === 1){
                solutionDisplay.textContent = 1;
                equationDisplay.textContent = `${num}!`}
        else if(+num > 20){
            solutionDisplay.textContent = "Can't calculate";
            equationDisplay.textContent = "";         }
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

//exponent
exponent.addEventListener("click",()=>{
    let display = solutionDisplay.textContent;
    if(!display || display ==="Can't calculate" || display ==="Format error" ||
    display ==="Value too large" || display ==="Domain error" || display ==="Can't divide by 0" 
    || display ==="Not possible" || display.includes("^")) return;

    solutionDisplay.textContent += " ^ ";
})


//period
period.addEventListener("click", ()=>{
    let display = solutionDisplay.textContent;
    if(!display) solutionDisplay.textContent = "0.";

    else if(display ==="Format error"||display === "Can't calculate"  || display ==="Domain error"
     || display ==="Value too large" || display ==="Can't divide by 0" || display ==="Not possible")
      return;

    else if(solutionDisplay.textContent.includes(" ")){
        let display = solutionDisplay.textContent;
        let num2 = display.split(" ").pop();
            if(!num2.includes(".")){
                solutionDisplay.textContent += ".";
            }
    }
    else {
        let display = solutionDisplay.textContent;
        if(display.includes(".")){return;}
        solutionDisplay.textContent += ".";
    }
    })

//square
square.addEventListener("click", ()=>{
    let display = solutionDisplay.textContent;
    if(!display || display ==="Format error"||display === "Can't calculate"
        || display ==="Domain error" || display ==="Can't divide by 0" || display ==="Not possible"
        || display ==="Value too large") return;

    else if(solutionDisplay.textContent.includes(" ")){
        let display = solutionDisplay.textContent;
        let num1 = display.split(" ").shift();
        let operator = display.split(" ")[1];
        let lastNumber = display.split(" ").pop();
        let num2 = Math.pow(lastNumber,2);
            if(!num2){equationDisplay.textContent = "";
            solutionDisplay.textContent = "Format error"; return;}
        operate(num1,operator,num2)
        equationDisplay.textContent = `${num1} ${operator} sqr(${lastNumber})`;
    }
    else{
        let display = solutionDisplay.textContent;
        let result = Math.pow(display,2);
        solutionDisplay.textContent = round(result);
            if(solutionDisplay.textContent === "NaN"){
                equationDisplay.textContent = "";
                solutionDisplay.textContent = "Format error";
            }
        equationDisplay.textContent = `sqr(${display})`
    }
})
