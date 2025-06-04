function handleAccordianToggle(element) {
    const allContents = document.querySelectorAll(".accordion-content");
    const allArrows = document.querySelectorAll(".arrow");
    const content = element.nextElementSibling;
    const arrow = element.querySelector(".arrow");

    allContents.forEach((el) => {
        if (el !== content) {
            el.style.maxHeight = null; // Collapse other accordions
        }
    });
    
    allArrows.forEach((el) => {
        if (el !== arrow) {
            el.innerHTML = "&#8595"; // Reset other arrows to down
        }
    });
    
    if (content.style.maxHeight) {
        // Collapse the accordion
        content.style.maxHeight = null;
        arrow.innerHTML="&#8595"; // Down arrow
    } else {
        // Expand the accordion
        content.style.maxHeight = content.scrollHeight + "px";
        arrow.innerHTML= "&#8593;"; // Up arrow
    }
}

