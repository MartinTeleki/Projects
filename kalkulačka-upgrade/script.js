"use strict";

const plus = document.querySelector(".btn--plus")
const minus = document.querySelector(".btn--minus")
const times = document.querySelector(".btn--times")
const divided = document.querySelector(".btn--divided")
const openBracket = document.querySelector(".btn--openBracket")
const closeBracket = document.querySelector(".btn--closeBracket")

const calculateResult = document.querySelector(".btn--result")
const displayResult = document.querySelector(".result")

const writeNumber = document.querySelector(".input--text-1")


const performanceCalculation = () => {
    const text = writeNumber.value;
    try {
        const result = eval(text);
        const roundedResult = result.toFixed(2)
        displayResult.style.color = "black"
        displayResult.textContent = roundedResult;
        writeNumber.value = "";
    } catch (error) {
        writeNumber.value = ""
        displayResult.style.color = "red"
        displayResult.textContent = "Error";
        console.log("Chyba při vyhodnocování výrazu:", error);
    }
}

calculateResult.addEventListener("click", performanceCalculation);

writeNumber.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
        e.preventDefault()
        performanceCalculation()
    }
})



const appendSymbol = (symbol) => {
    writeNumber.value += symbol;
    writeNumber.focus()
};

plus.addEventListener("click", () => {
    appendSymbol("+");
});

minus.addEventListener("click", () => {
    appendSymbol("-");
});

times.addEventListener("click", () => {
    appendSymbol("*");
});

divided.addEventListener("click", () => {
    appendSymbol("/");
});

openBracket.addEventListener("click", () => {
    appendSymbol("(");
});

closeBracket.addEventListener("click", () => {
    appendSymbol(")");
});

