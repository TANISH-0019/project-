// Import navigation links
import { navLinks } from "./data.js";

// Select elements
const navLinksContainer = document.querySelector(".nav-links");
const footerNavLinksContainer = document.querySelector(".footer-section .nav-links");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navModal = document.createElement("div");
const backButton = document.createElement("button");

// **NEW: Dynamic modal structure creation**
navModal.classList.add("nav-modal");
navModal.setAttribute("id", "navModal");

navModal.innerHTML = `
    <div class="nav-modal-content">
        <ul class="nav-modal-links">
        ${navLinks
        .map((link) => `<li><a href="#">${link}</a></li>`)
        .join("")
    }</ul> <!-- Placeholder for modal links -->
    </div>
`;

// Add modal to the body
document.body.appendChild(navModal);

backButton.classList.add("back-button");
backButton.setAttribute("id", "backButton");
backButton.textContent = "Back";
navModal.querySelector(".nav-modal-content").appendChild(backButton);

// Render navigation links
(function navLinkRender() {
    const allLinks = navLinks
        .map((link) => `<li><a href="#">${link}</a></li>`)
        .join("");
    navLinksContainer.innerHTML = allLinks;
    if (footerNavLinksContainer) {
        footerNavLinksContainer.innerHTML = allLinks;
    }
})();


function toggleModal() {
    navModal.classList.toggle("visible");
    document.body.classList.toggle("no-scroll");
}


hamburgerMenu.addEventListener("click", toggleModal);

backButton.addEventListener("click", toggleModal);
navModal.addEventListener("click", (e) => {
    if (e.target === navModal) toggleModal();
});
