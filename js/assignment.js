"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

// Function to return the remainder of the division of two numbers
function returnTheRemainder(a, b) {
    return a % b;
}

// Function to check if a number is even
function checkIfEven(number) {
    return number % 2 === 0;
}

// Function to get the fourth element of the array
function getTheFourthElement(arr) {
    return arr[3]; 
}

// Function to render answers
function renderAnswers() {
    const remainder = returnTheRemainder(5, 4);
    const isEven = checkIfEven(47);
    const fourthElement = getTheFourthElement(lostNumbers);

    remainderElement.textContent = `${remainder}`;
    checkIfEvenElement.textContent = `${isEven}`;
    lostNumbersElement.textContent = `${fourthElement}`;
}

// Event listener for the submission button
submissionBtn.addEventListener("click", renderAnswers);