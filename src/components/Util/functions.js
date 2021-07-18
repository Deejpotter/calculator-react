
// Takes the input from a button and adds it to the output-text paragraph
export function Output(input) {
    if (document.getElementById("output-text").innerHTML === "0") {
        ClearDisplay();
    }
    var text = document.createTextNode(input);
    document.getElementById("output-text").appendChild(text);
}

// Take the string from output-text and evaluate it then print it back into output-text
export function Evaluate() {
    var text = document.getElementById("output-text").innerHTML;
    document.getElementById("old-text").innerHTML = text;
    text = eval(text);
    document.getElementById("output-text").innerHTML = text;
}

// Delete the number 
export function ClearDisplay() {
    document.getElementById("output-text").innerHTML = "";
}