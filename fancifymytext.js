function AlertButton() {
    alert("Hello, world!");
    document.getElementById("inputText").style.fontSize = "24pt";
    document.getElementById("inputText").style.background = "red";
}

function AlertButton2() {
    alert("Changing styles eh?");
    document.getElementById("inputText").style.fontWeight = "bold";
    document.getElementById("inputText").style.color = "blue";
    document.getElementById().style.textDecoration = "underline";
}

function AlertButton3() {
    alert("why did you change back....that so boring");
    document.getElementById("inputText").style.fontWeight = "normal";
    document.getElementById("inputText").style.fontSize = "10pt";
    document.getElementById("inputText").style.background = "white";
    document.getElementById("inputText").style.color = "black";
    document.getElementById("inputText").style.textDecoration = "none";
}

function modifyingText(){
    var text = document.getElementById("inputText").value;
    text = text.trim().toUpperCase();
    var delimiter = text.split(" ");
    text = delimiter.join("-Moo ") + "-Moo";
    document.getElementById("inputText").value = text;
}