function calc() {
    const num1 = document.getElementById(`num1`).value; //select a window and get its value
    const num2 = document.getElementById(`num2`).value; //
    const sum = Number(num1) + Number(num2); 
    document.getElementById(`sum`).value = sum; //select output window and insert value
}
