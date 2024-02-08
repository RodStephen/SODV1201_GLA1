
var fullName = "Rod Stephen Espiritu";


var h1Element = document.createElement("h1");


h1Element.innerText = fullName;


h1Element.style.textAlign = "center";
h1Element.style.color = "#A9A9A9";


document.body.appendChild(h1Element);


var container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";


var input1 = createInput("Box Number 1");
var input2 = createInput("Box Number 2");

// Create a button
var addButton = document.createElement("button");
addButton.innerText = "Calculate Sum";
addButton.style.padding = "10px"; //button padding
addButton.style.marginTop = "10px"; //button margin
addButton.style.backgroundColor = "#4CAF50"; //button background color
addButton.style.color = "white"; //button text color
addButton.style.border = "none"; //button border
addButton.style.borderRadius = "5px"; //button border radius
addButton.addEventListener("click", calculateSum);

//span element to display the result or error message
var resultSpan = document.createElement("span");

// Append elements to the container
container.appendChild(input1);
container.appendChild(input2);
container.appendChild(addButton);
container.appendChild(resultSpan);

// Append container to the body
document.body.appendChild(container);

// Arrow function to create input elements
function createInput(placeholder) {
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = placeholder;
    input.style.padding = "10px"; //input padding
    input.style.marginTop = "5px"; //input margin
    input.style.width = "200px"; //input width
    input.style.border = "1px solid #ccc"; //input border
    input.style.borderRadius = "5px"; //input border radius
    return input;
}

// Arrow function to validate input as a number
var validateNumber = (input) => {
    var value = parseFloat(input.value);
    if (isNaN(value)) {
        throw `Error: Please enter a valid number in "${input.placeholder}".`;
    } else {
        // Reset border style if validation is successful
        input.style.border = "";
    }
};

// Arrow function to calculate sum
function calculateSum() {
   
    input1.style.border = "";
    input2.style.border = "";

    try {
    
        validateNumber(input1);
        validateNumber(input2);
        var num1 = parseFloat(input1.value);
        var num2 = parseFloat(input2.value);

        var sum = num1 + num2;

        resultSpan.innerText = "Sum: " + sum;
    } catch (error) {
        // Display error message and set red border on the input box with the error
        resultSpan.innerText = error;
        if (error.includes(`"${input1.placeholder}"`)) {
            input1.style.border = "2px solid red";
        } else if (error.includes(`"${input2.placeholder}"`)) {
            input2.style.border = "2px solid red";
        }
    }
}
