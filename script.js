// Replace 'Your Full Name' with your actual full name
var fullName = "Rod Stephen Espiritu";

// Create an h1 element
var h1Element = document.createElement("h1");

// Set the text content of the h1 element
h1Element.innerText = fullName;

// Add styles to the h1 element
h1Element.style.textAlign = "center";
h1Element.style.color = "#A9A9A9"; // You can use "gray" or "#A9A9A9" for gray color

// Append the h1 element to the body
document.body.appendChild(h1Element);

// Create container div
var container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";

// Create input elements
var input1 = createInput("Box Number 1");
var input2 = createInput("Box Number 2");

// Create a button
var addButton = document.createElement("button");
addButton.innerText = "Calculate Sum";
addButton.style.padding = "10px"; // Example button padding
addButton.style.marginTop = "10px"; // Example button margin
addButton.style.backgroundColor = "#4CAF50"; // Example button background color
addButton.style.color = "white"; // Example button text color
addButton.style.border = "none"; // Example button border
addButton.style.borderRadius = "5px"; // Example button border radius
addButton.addEventListener("click", calculateSum);

// Create a span element to display the result or error message
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
    input.style.padding = "10px"; // Example input padding
    input.style.marginTop = "5px"; // Example input margin
    input.style.width = "200px"; // Example input width
    input.style.border = "1px solid #ccc"; // Example input border
    input.style.borderRadius = "5px"; // Example input border radius
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
    // Reset border styles on both inputs
    input1.style.border = "";
    input2.style.border = "";

    try {
        // Validate input for number
        validateNumber(input1);
        validateNumber(input2);

        // Get the values from the input elements
        var num1 = parseFloat(input1.value);
        var num2 = parseFloat(input2.value);

        // Calculate the sum
        var sum = num1 + num2;

        // Display the result below the h1 element
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
