

const characterContainer = document.querySelector(".landing__img");
const characterFace = document.querySelector(".character-face");

// Calculate the initial position of the character container
const characterContainerRect = characterContainer.getBoundingClientRect();

// Track mouse movements within the character container
characterContainer.addEventListener("mousemove", (e) => {
    // Calculate the mouse position relative to the character container
    const mouseX = e.clientX - characterContainerRect.left;
    const mouseY = e.clientY - characterContainerRect.top;

    // Calculate the character's reaction based on the mouse position within the container
    const reactX = (mouseX / characterContainer.clientWidth) * 2 - 1;
    const reactY = (mouseY / characterContainer.clientHeight) * 2 - 1;

    // Apply a transform to the character's face based on the relative mouse position
    characterFace.style.transform = `translate(${reactX * 20}px, ${reactY * 10}px)`;
});

