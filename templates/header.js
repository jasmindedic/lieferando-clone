// Get header container to generate html content for header
let header = document.querySelector(".header");


// Header generating function
function generateHeader() {
    header.innerHTML = /*html*/`
        <div class="logoContainer">
            <img class="logo" src="./images/logo.png">
        </div>
        <div class="headerAdress">
            <h3><a class="address" href="#">Wo möchtest du Essen bestellen?</a></h3>
        </div>
        <div class="flagDarkLightContainer"> 
            <!-- English flag -->
        <div class="flagContainer">
            <img class="englishFlag" src="./images/english-flag.png">
        </div>
        <!-- Dark light mode switch -->
        <div class="darkLightMode">
            <i onclick="darkLightMode()" class="fa-solid fa-moon"></i>
        </div>
    </div>
        <!-- Hamburger menu -->
        <div class="toggleBtn" onclick="toggleHamburger()">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    `;
}

// Function to toggle dark light mode
function darkLightMode() {
    // Get needed elements
    let bodyElem = document.querySelector("body");
    let header = document.querySelector(".header");
    let logo = document.querySelector(".logo");
    let headerAdress = document.querySelector(".address");
    let moonIcon = document.querySelector(".fa-moon");
    let hamburgerBars = document.querySelectorAll(".bar");

    // Content elements
    let restaurantLogo = document.querySelector(".restaurantLogo");

    // Toggle active class
    bodyElem.classList.toggle("active");
    header.classList.toggle("active");
    logo.classList.toggle("active");
    headerAdress.classList.toggle("active");
    moonIcon.classList.toggle("active");

    // ForEach loop to iterate over all three bars and apply same toggle at the same time
    hamburgerBars.forEach(bar => {
        bar.classList.toggle("active");
    });

    // Content element toggle
    restaurantLogo.classList.toggle("active");
}


// Hamburger menu
function toggleHamburger() {
    // Get elements needed to create hamburger menu functionality 
    let header = document.querySelector(".header");
    let logoContainer = document.querySelector(".logoContainer");
    let headerAdressCon = document.querySelector(".headerAdress");
    let flagDarkLightContainer = document.querySelector(".flagDarkLightContainer");

    header.classList.toggle("activeHeight");
    logoContainer.classList.toggle("active");
    headerAdressCon.classList.toggle("active");
    flagDarkLightContainer.classList.toggle("active");

    console.log("works")
};



