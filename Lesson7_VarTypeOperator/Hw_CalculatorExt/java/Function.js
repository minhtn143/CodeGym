let DisplayInput= document.getElementById("InputScreen");

function ClickButton(object) {
    DisplayInput.value+= object;
}
function Clear(object) {
    if (object== "C")
        DisplayInput.value = "";
    console.log(DisplayInput.value.length);
    if (object == "Back")
        DisplayInput.value = DisplayInput.value.substr(1,DisplayInput.value.length -1);
}
function ClickEqual() {
    console.log(eval(DisplayInput));
    DisplayInput.value = eval(DisplayInput.value);

}
