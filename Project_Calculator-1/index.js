function calculator(){
    event.preventDefault();

    const num1 = document.getElementById("x").value;
    const num2 = document.getElementById("y").value;
    const op = document.getElementById("option").value;
    const resultElement = document.getElementById("answer");
    
    let sum;
    if (op == "plus"){
        sum = Number(num1) + Number(num2);
    }else if (op == "subtract"){
        sum = Number(num1) - Number(num2);
    }else if (op == "multiply"){
        sum = Number(num1) * Number(num2);
    }else if (op == "divide"){
        sum = Number(num1) / Number(num2);
    }else if (op == "modulo"){
        sum = Number(num1) % Number(num2);
    }else{
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }
    resultElement.innerText = "Result: " + sum;
}