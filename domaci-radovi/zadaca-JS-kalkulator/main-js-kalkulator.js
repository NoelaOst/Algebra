var count = 0;
var display = document.querySelector(".number-display");
var one = document.querySelector(".number-1");
var two = document.querySelector(".number-2");
var three = document.querySelector(".number-3");
var four = document.querySelector(".number-4");
var five = document.querySelector(".number-5");
var six = document.querySelector(".number-6");
var seven = document.querySelector(".number-7");
var eight = document.querySelector(".number-8");
var nine = document.querySelector(".number-9");
var zero = document.querySelector(".number-0");
var equal = document.querySelector(".equal-btn");
var deleteBtn = document.querySelector(".delete-btn");
var plusBtn = document.querySelector(".plus-btn");
var minusBtn = document.querySelector(".minus-btn");
var divideBtn = document.querySelector(".divide-btn");
var multiplyBtn = document.querySelector(".multiply-btn");
var numberBtns = document.querySelectorAll(".number")

display.innerText = count;

function number1() {
    display.innerText = one;
}

one.addEventListener("click", number1);