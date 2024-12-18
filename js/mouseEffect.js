

const cursor =document.createElement("div");
cursor.classList.add("cursor");
const cursorTrail = document.createElement("div");
cursorTrail.classList.add("cursor-trail");

document.body.appendChild(cursor);
document.body.appendChild(cursorTrail);

document.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
  
    // Move the main cursor instantly
    cursor.style.transform = `translate(${x}px, ${y}px)`;
  
    // Move the trail cursor smoothly
    cursorTrail.style.transform = `translate(${x}px, ${y}px)`;
  });
  
 // Select all anchor tags inside <li>
const links = document.querySelectorAll("li > a");

const btn = document.querySelectorAll("btn");

// Add hover effect to the cursor when hovering over links
links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
  });

  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

btn.forEach((b) => {
    b.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
    });
  
    b.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
    });
  });