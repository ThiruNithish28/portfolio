// const header = document.querySelector(".header");
// const subheading = document.querySelector(".sub-heading");
// const letters = document.querySelectorAll(".letter");
// const logo = document.querySelector(".logo a");
// const aboutSection = document.querySelector(".about-banner");

// let lastScroll = 0;
// /* sectionHeight
//     //this is for make the scroll to section 
//     // if the value is too low ie; 10 it moves(animation) faster
//     if the value is too high ie;300 it moves slow
//         ie; for the 150px -> 1st pair element start moves up
//         300px -> next pair element moves up
//         450px -> next Pair element moves up 
// */
// const sectionHeigth = 150;

// window.addEventListener("scroll", () => {
//   const scrollY = window.scrollY;
//   //for remove the header when scroll down is completed. To slove the overlap with other section
//   if(scrollY > 600) {
//     header.style.display = "none";
//   }else if(scrollY < 600 && header.style.display === "none") {
//     header.style.display = "flex";
//   }


//   /*hiding the sub heading to solve the overlap with about (heading) problem  */
//   if (scrollY >= 115) {
//     subheading.style.display = "none";
//   } else if (scrollY < 115 && subheading.style.display === "none") {
//     subheading.style.display = "block";
//   }

//   /* OrderPair - which pair of character can move [it based on index (0-> n)] */
//   const orderPairs = [
//     [2, 5],
//     [3, 1],
//     [4, 0],
//   ];

//   //   for this explaination is in the last of file
//   orderPairs.forEach((pair, orderIndex) => {
//     const startScroll = sectionHeigth * orderIndex;

//     if (scrollY >= startScroll) {
//       const moveFactor = Math.min(1, (scrollY - startScroll) / sectionHeigth);
//       const translateY = -moveFactor * header.offsetHeight;
//       pair.forEach((idx) => {
//         const letter = letters[idx];
//         if (!letter) return;
//         gsap.to(letter, {
//           y: translateY,
//           zIndex: 1 - moveFactor,
//         });
//       });
//     } else {
//       pair.forEach((idx) => {
//         const letter = letters[idx];
//         gsap.to(letter, {
//           y: 0,
//           zIndex: 1,
//         });
//       });
//     }
//   });

//   /* logo reveal in the top nav */
//   const buffer = 10; // is a small extra value (50 pixels) that ensures a smooth transition when revealing the logo.
//   if (
//     scrollY >= orderPairs.length * sectionHeigth + buffer &&
//     !gsap.isTweening(logo)
//   ) {
//     /*show the logo in top nav*/
//     gsap.to(logo, {
//       top: "0px",
//       ease: "power1.out",
//       overwrite: true,
//     });

//     gsap.to(".logo-revealer", {
//       scaleY: 0,
//       overwrite: true,
//     });
//   } else if (
//     scrollY <= (orderPairs.length - 1) * sectionHeigth &&
//     !gsap.isTweening(logo)
//   ) {
//     /*this is for hide the top logo when scroll back*/
//     gsap.to(logo, {
//       top: "20px",
//       ease: "power1.out",
//       overwrite: true,
//     });

//     gsap.to(".logo-revealer", {
//       scaleY: 1,
//       overwrite: true,
//     });
//   }
//   lastScroll = scrollY;
// });

//page header animation
gsap.registerPlugin(ScrollTrigger);
// Clear previous styles to ensure no conflicts
gsap.set(".bg-text", { clearProps: "all" });

// Set initial state using GSAP
gsap.set(".bg-text", {
  xPercent: 0,
  y: 0,       
});

// Animate with ScrollTrigger
gsap.to(".bg-text", {
  xPercent: -50, // Animate horizontally by 50%
  y: -64,        // Animate vertically by 64px
  ease: "none",
  scrollTrigger: {
    trigger: ".about_section-intro",
    start: "top top",
    end: "bottom top",
    markers: false,
    scrub: true,
  },
});


gsap.to(".page-title",{
  transform: "translate3d(0px, -250.468px, 0px)",
  ease: "none",
  scrollTrigger: {
    trigger: ".about-banner-container",
    start: "top center",
    end: "bottom top",
    markers: false,
    scrub: true,
  },
})

gsap.to(".main-text",{
  transform: "translate3d(0px, -172px, 0px)",
  ease: "none",
  scrollTrigger: {
    trigger: ".about-banner-container",
    start: "top center",
    end: "bottom top",
    markers: false,
    scrub: true,
  },
})

gsap.to(".ph-image",{
  transform: "translate3d(0px, -250.468px, 0px)",
  ease: "none",
  scrollTrigger: {
    trigger: ".about-banner-container",
    start: "top center",
    end: "bottom top",
    markers: false,
    scrub: true,
  },
})

// below is for the section scroll effect
gsap.registerPlugin(ScrollTrigger);
const panels = gsap.utils.toArray(".panel");
panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    pin: true,
    start: "top top",
    end: () => `+=${panel.offsetHeight}`, // change to control how long it pins
    pinSpacing: false,
    scrub: true,
    markers: true,
  });
});

// hobby section
// const hobbyHovers = document.querySelectorAll(".hobby-hover");
// const hobbyImages = document.querySelectorAll(".hobby-image__item");
// const hobbyOuter = document.querySelector(".hobby-image");

// gsap.set(hobbyImages[0], { x: "0", y: "0", rotation: 0, scale: 1 });
// hobbyHovers.forEach((item, i) => {
//   let currentCloned= null;

//   function handleRemove() {
//     if (currentCloned) {
//       if (currentCloned.tagName === "VIDEO") {
//         currentCloned.pause();
//         currentCloned.currentTime = 0; // rewind to start
//       }
//       currentCloned.remove();
//       currentCloned = null;
//     }
//     gsap.set(hobbyImages[i], { clearProps: "all" });
//   }

//   function handleEnter() {
//     console.log("hovered");
//     const newItem = hobbyImages[i].cloneNode(true);
//     currentCloned = newItem; // Store the cloned item for later removal
//     hobbyOuter.append(newItem);

//      // If the cloned item is a video, ensure it plays automatically
//     if (newItem.tagName === "VIDEO") {
//       newItem.muted = false;  // Enable audio
//       newItem.autoplay = true;
//       newItem.play();
//     }
//     gsap.set(newItem, {
//       x: "100%",
//       y: "100%",
//       rotation: "-35deg",
//       scale: 1.1,
//     });
//     gsap.killTweensOf(newItem);
//     gsap.killTweensOf(hobbyImages[i]);
//     gsap.to([newItem, hobbyImages[i]], {
//       x: 0,
//       y: 0,
//       rotation: 0,
//       duration: 1.2,
//       ease: "power1.easeInOut",
//     });

//     gsap.to([newItem, hobbyImages[i]], {
//       scale: 1,
//       duration: 1.2,
//       ease: "power1.easeInOut",
//       delay: 0.35,
//     });
//     hobbyHovers.forEach((hobbyHover) => {
//       hobbyHover.classList.remove("active");
//     });
//     hobbyHovers[i].classList.add("active");
//   }

//   item.addEventListener("mouseenter", handleEnter);
//   item.addEventListener("mouseleave", handleRemove);
// });

 const hobbyHovers = document.querySelectorAll(".hobby-hover");
  const hobbyImages = document.querySelectorAll(".hobby-image__item");
  const hobbyOuter = document.querySelector(".hobby-image");
  gsap.set(hobbyImages[0], { x: "0", y: "0", rotation: 0, scale: 1 });

  hobbyHovers.forEach((item, i) => {
    function removeElement(element) {
      element.parentNode.removeChild(element);
      hobbyImages.forEach((el) => {
        if (el !== hobbyImages[i]) {
          gsap.set(el, { clearProps: "all" });
        }
      });
    }

    function handleEnter(e) {
      const newItem = hobbyImages[i].cloneNode(true);
      hobbyOuter.append(newItem);
      gsap.set(newItem, {
        x: "100%",
        y: "100%",
        rotation: "-35deg",
        scale: 1.1,
      });
      gsap.killTweensOf(newItem);
      gsap.killTweensOf(hobbyImages[i]);
      gsap.to([newItem, hobbyImages[i]], 1.2, {
        x: "0",
        rotation: 0,
        y: "0",
        ease: Power1.easeInOut,
        
      });
      gsap.to([newItem, hobbyImages[i]], 1.2, {
        scale: 1,
        ease: Power1.easeInOut,
        delay: 0.35,
      });
      hobbyHovers.forEach((hobbyHover) => {
        hobbyHover.classList.remove("active");
      });
      hobbyHovers[i].classList.add("active");
    }
    item.addEventListener("mouseenter", handleEnter);
    // item.addEventListener("mouseleave", removeElement);
  });

//-----------------------------------------------
//Achivement section
gsap.to(".achivement-card-wrapper", {
  scrollTrigger:{
    trigger:".about__section--achivement",
    start: "top top",
    end:"+=9000",
    scrub: true,
    markers:false,
    pin: true,
  },
  z:1500,
  ease: "none",
})

 