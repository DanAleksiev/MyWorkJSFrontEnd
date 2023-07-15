function toggle() {
    const text = document.querySelector("#extra")
    const target = document.querySelector("span.button")

    text.style.display = text.style.display === 
    "block" ? "none" : "block"; 

    target.textContent = target.textContent === 
    "More" ? "Less" : "More";
}