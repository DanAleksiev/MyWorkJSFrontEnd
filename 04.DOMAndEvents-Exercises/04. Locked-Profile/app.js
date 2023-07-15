function lockedProfile() {
    function clicked(e) {
        const lockedOrNot = e.currentTarget.parentElement.querySelector("input[type=radio]");
        
        if(lockedOrNot.checked){
            return;
        }

        const isHidden = e.currentTarget.textContent === "Show more";
        const hiddenInfo = e.currentTarget.parentElement.querySelector("div");
    
        hiddenInfo.style.display = isHidden ? "block" : "none";
        e.currentTarget.textContent = isHidden ? "Hide it" : "Show more";

    }


    const buttons = Array.from(document.querySelectorAll("button"))
    buttons.forEach((b) => {
        b.addEventListener("click", clicked)
    })
}