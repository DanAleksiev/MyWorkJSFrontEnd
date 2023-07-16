function addItem() {
    const inputsText = document.getElementById("newItemText");
    const inputsValue = document.getElementById("newItemValue");
    
    const targetWindow = document.getElementById("menu");
    const option = document.createElement("option");

    option.textContent = inputsText.value;
    option.value = inputsValue.value;

    targetWindow.appendChild(option)

    // document.getElementById("newItemText").value = "";
    // document.getElementById("newItemValue").value = "";

    inputsText.value = "";
    inputsValue.value = "";

    //use the element if you want to overwrite it afterwords instead of just it's value. It could be potentially more useful in the future to take the value only when you need it and leave the element as a var
}