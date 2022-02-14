let calcBody= document.getElementById("calc-body");
let screen = document.getElementById("screen");
let equalsButton = document.getElementById("equals-button");
let acButton = document.getElementById("ac-button");
let brackets = document.getElementById("brackets");

//click animation
document.querySelectorAll(".buttons").forEach(button => {
    button.addEventListener("click",() =>{
        button.classList.add("clicked");
        setTimeout(() =>{button.classList.remove("clicked");}, 100);
    })
});

//display buttons on screen
document.querySelectorAll(".buttons").forEach(button => {
    button.addEventListener("click", () => {
        screen.textContent += button.textContent;
    })
});

//AC button
acButton.addEventListener("click", () => {
    screen.textContent = "";
})

//
brackets.addEventListener("click", () => {
    if(!")") {

    }
})


//subtract
let subtract = (num1, num2) => {
    screen.textContent = num1 - num2;
}

//multiply
let multiply = (num1, num2) => {
    screen.textContent = num1 * num2;
}

//divide
let divide = (num1, num2) => {
    screen.textContent = num1 / num2;
}

//add
let add = (num1,num2) => {
    screen.textContent = +num1 + +num2;
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
// operate(3,"/",4);

equalsButton.addEventListener("click", () => {
    
    operate(num1,num2);
});
