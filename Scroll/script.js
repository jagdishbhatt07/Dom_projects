// // Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// // pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// // slice extracts a section of a string without modifying original string
// //offsetTop - A Number, representing the top position of the element, in pixels

// // ********** set date ************
// // select span
// const date = document.getElementById("date");
// date.innerHTML = new Date().getFullYear();

// // ********** close links ************
// const navToggle = document.querySelector(".nav-toggle");
// const linksContainer = document.querySelector(".links-container");
// const links = document.querySelector(".links");

// navToggle.addEventListener("click", function () {
//   // linksContainer.classList.toggle("show-links");

//   const linksHeight = links.getBoundingClientRect().height;
//   const containerHeight = linksContainer.getBoundingClientRect().height;
//   if (containerHeight === 0) {
//     linksContainer.style.height = `${linksHeight}px`;
//   } else {
//     linksContainer.style.height = 0;
//   }
//   // console.log(linksContainer.getBoundingClientRect());
// });

// // ********** fixed navbar ************

// const navbar = document.getElementById("nav");
// const topLink = document.querySelector(".top-link");

// window.addEventListener("scroll", function () {
//   const scrollHeight = window.pageYOffset;
//   const navHeight = navbar.getBoundingClientRect().height;
//   if (scrollHeight > navHeight) {
//     navbar.classList.add("fixed-nav");
//   } else {
//     navbar.classList.remove("fixed-nav");
//   }
//   // setup back to top link

//   if (scrollHeight > 500) {
//     console.log("helo");

//     topLink.classList.add("show-link");
//   } else {
//     topLink.classList.remove("show-link");
//   }
// });

// // ********** smooth scroll ************
// // select links
// const scrollLinks = document.querySelectorAll(".scroll-link");
// scrollLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     // prevent default
//     e.preventDefault();
//     // navigate to specific spot
//     const id = e.currentTarget.getAttribute("href").slice(1);
//     const element = document.getElementById(id);

//     const navHeight = navbar.getBoundingClientRect().height;
//     const containerHeight = linksContainer.getBoundingClientRect().height;
//     const fixedNav = navbar.classList.contains("fixed-nav");
//     let position = element.offsetTop - navHeight;

//     if (!fixedNav) {
//       position = position - navHeight;
//     }
//     if (navHeight > 82) {
//       position = position + containerHeight;
//     }

//     window.scrollTo({
//       left: 0,
//       top: position,
//     });
//     // close
//     linksContainer.style.height = 0;
//   });
// });
// // calculate heights


// Set the current year in the span element with id "date"
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// Toggle the display of links when the navToggle is clicked
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  
  // Toggle the height of linksContainer
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// Add a fixed navbar when scrolling down, and a back-to-top link
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  
  // Add or remove fixed-nav class based on scroll height
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  // Show or hide the back-to-top link based on scroll height
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// Smooth scroll to section when a scroll-link is clicked
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Calculate the position to scroll to
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    // Scroll to the calculated position
    window.scrollTo({
      left: 0,
      top: position,
    });
    
    // Close links container after scrolling
    linksContainer.style.height = 0;
  });
});
