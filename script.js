// Global variables
// Get main container where the generated content will go
let contentContainer = document.querySelector(".content");


/* Array for images */
let dishImages = [
    "./images/pizza_banner.jpg",
    "./images/pommes.jpg",
    "./images/burger.jpg"
];

/* Onload functions, (Function that i will run onload in the body). With this construct i have them at one place 
and only need to call the onload() function to run all of them in the body */
function onLoad() {
    generateHeader();
    render()
}

// Render function
function render() {
    contentContainer.innerHTML = "";
    contentContainer.innerHTML += generateRestaurantSection();
    contentContainer.innerHTML += generateBasket();
    generateFirstDishSec();
}

// Functions to create html content
// Function to generate restaurant section
function generateRestaurantSection() {
    return `
    <!-- Restauratn section -->
    <div class="restaurantSection">
        <div class="imageLogo">
            <img class="pizzaImg" src="./images/pizza_img.jpg">
            <img class="restaurantLogo" src="./images/restaurant_logo.png">
        </div>
        <div class="titleBtnContainer">
            <h3 class="restaurantTitle">Chicago Pizza</h3>
            <div class="twoBtn">
                <button type="button"><i class="fa-solid fa-circle-info"></i></button>
                <button type="button"><i class="fa-solid fa-heart"></i></button>
            </div>
        </div>
        <div class="ratingContainer">
            <ul class="stars">
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i id="lastStar" class="fa-solid fa-star"></i></li>
            </ul>
            <p class="rating"><a href="#">(327 Bewertungen)</a></p>
        </div>
        <div class="shippingInfoContainer">
            <div class="infos">
                <div class="shippingTime">
                    <i class="fa-solid fa-clock"></i>
                    <p>30-55 min</p>
                </div>
                <div class="shippingCost">
                    <i class="fa-solid fa-bicycle"></i>
                    <p>1,90€</p>
                </div>
                <div class="orderMin">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>Min. 15,00€</p>
                </div>
            </div>
            <div class="infoText">
                <p>Bei diesem Restaurant kannst du Stempel sammeln. Stelle beim Bestellabschluss bitte sicher, dass du dich für unseren Newsletter angemeldet hast, um deine Stempel per E-Mail zu erhalten.</p>
            </div>
        </div>
        <div class="optionBarContainer">
            <div class="optionBar"> 
            <ul class="optionBarList">
                <li><i class="fa-solid fa-magnifying-glass"></i></li>
                <li><a class="darkMode" href="#">Beliebte Gerichte</a></li>
                <li><a class="darkMode" href="#">Burger</a></li>
                <li><a class="darkMode" href="#">Pommes</a></li>
                <li><a class="darkMode" href="#">Salate</a></li>
            </ul>
        </div>
        </div>
        <!-- Most popular dishes -->
        <div class="popularDishesContainer">
            <div class="popDishHeadlineContainer">
                <h3 class="popularDishHeadliner">Beliebte Gerichte</h3>
            </div>
        </div>
    </div>

    `;
}

// Function to generate shopping basket
function generateBasket() {
    return `
    <!-- Shopping basket -->
    <div class="shoppingBasket">
        <div class="wrapperSticky"> 
            <div class="basketStatus">
                <h3 class="basketTitle">Warenkorb</h3>
                <hr>
                <i class="fa-solid fa-bag-shopping darkMode"></i>
                <p class="pickMenuText">Wähle leckere Gerichte aus der Karte und <br> bestelle Dein Menü</p>
            </div>
            <!-- Total and subtotal price  -->
            <div class="pricesSum">
                <hr>
                <div class="subtotalContainer">
                    <p class="subtotalText">Zwischensumme</p>
                    <p class="subTotal">0.00€</p>
                </div>
                <div class="totalPriceContainer">
                    <p class="totalPriceText">Gesamt</p>
                    <p class="total">0.00€</p>
                </div>
                <hr>
            </div>
            <!-- Minimum order value, explanation text for customer -->
            <div class="minOrder">
                <p>Leider kannst Du noch nicht bestellen. Chicago Pizza liefert erst ab einem Mindestbestellwert von 10.00€ (inkl. Lieferkosten).</p>
            </div>
            <!-- Pay button -->
            <div class="payContainer">
                <button class="payBtn darkMode">Bezahlen</button>
            </div>
        </div>
    </div>
    `;
}

// Functions to generate dishes section
// First function to generate first dish section
// Second function is for the rest
function generateFirstDishSec() {
    for (let i = 0; i < dishes.length; i++) {
        const dish = dishes[i];

        let restaurantSection = document.querySelector(".restaurantSection");

        restaurantSection.innerHTML += `
            <div id="dishImg${i}" class="dishSection">
            <div class="dishBox" onclick="addDish()">
                <h3>${dish["name"]}</h3>
                <p class="dishDesc">${dish["desc"]}</p>
                <p class="dishPrice">${dish["price"]}</p>
                <i class="fa-solid fa-plus"></i>
            </div>
            </div>
        `;
    }
}


// Function to add clicked dish to localstorage
function addDish() {
    console.log("It works!!")
}

