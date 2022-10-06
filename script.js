// Global variable
let basketDishes = [];
// Get main container where the generated content will go
let contentContainer = document.querySelector(".content");

/* Onload functions, (Function that i will run onload in the body). With this construct i have them at one place 
and only need to call the onload() function to run all of them in the body */
function onLoad() {
    generateHeader();
    generateFooter();
    render();
}

// Render function
function render() {
    contentContainer.innerHTML = "";
    contentContainer.innerHTML += generateRestaurantSection();
    contentContainer.innerHTML += generateBasket();
    contentContainer.innerHTML += generateButton();
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
                    <p>3,90€</p>
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
        <h3 class="basketTitle">Warenkorb</h3>
        <hr class="d-none basketHR">
            <div class="basketStatus">
                <hr>
                <i class="fa-solid fa-bag-shopping darkMode"></i>
                <p class="pickMenuText">Wähle leckere Gerichte aus der Karte und <br> bestelle Dein Menü</p>
            </div>
            <!-- Total and subtotal price  -->
            <div class="pricesSum">
                <hr id="hr">
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
function generateFirstDishSec() {
    for (let i = 0; i < dishes.length; i++) {
        const dish = dishes[i];

        let restaurantSection = document.querySelector(".restaurantSection");

        restaurantSection.innerHTML += `
            <div id="dishImg${i}" class="dishSection">
            <div class="dishBox" onclick="addDish(${i})">
                <h3>${dish["name"]}</h3>
                <p class="dishDesc">${dish["desc"]}</p>
                <p class="dishPrice">${dish["price"]}</p>
                <i class="fa-solid fa-plus dishBoxPlus"></i>
            </div>
            </div>
        `;
    }
}

// Generate button when width is under 900px to show price
function generateButton() {
    return /* html */`
        <div class="btnContainer">
            <button class="totalBtn invisibleBtn" onclick="showMobileBasket()">0.00€</button>
        </div>
    `;
}


// Function to add clicked dish to localstorage
function addDish(i) {

    if (basketDishes.includes(dishes[i])) {
        dishes[i].amount++;
    } else {
        basketDishes.push(dishes[i]);
        dishes[i].amount++;
    }


    // Invoke functions
    changeVisibility();
    getBasketSubTotal()
    getBasketPrice();
    getBasketPriceButton()
    showBasketDishes();
    saveDishes();
}


/* Function to make elements in shopping basket display none */
function changeVisibility() {
    let basketOder = document.querySelector(".minOrder");

    if (!basketOder.classList.contains("d-none")) {
        document.querySelector(".fa-bag-shopping").classList.add("d-none");
        document.querySelector(".pickMenuText").classList.add("d-none");
        document.querySelector(".minOrder").classList.add("d-none");
        document.querySelector("#hr").classList.add("d-none");
        document.querySelector(".basketHR").classList.remove("d-none");

        /* Add padding top to pay button */
        let payBtn = document.querySelector(".payBtn");
        payBtn.style.marginTop = "1rem";
    }
}

// Function to show stored names and prices in the shopping basket 
function showBasketDishes() {
    let basketContainer = document.querySelector(".basketStatus");
    basketContainer.innerHTML = "";
    for (let index = 0; index < basketDishes.length; index++) {
        basketContainer.innerHTML += showDishTemplate(basketDishes[index], index);
    }
}


// Function to create needed content to show dish in the basket
function showDishTemplate(basketDish, index) {
    return /*html*/`
        <div class="showDish">
            <div class="namePrice">
                <p class="basketAmount">${basketDish['amount']}</p>
                <p>${basketDish['name']}</p>
                <p class="basketPrice">${basketDish['price']}</p>
            </div>
            <div class="basketPlusMinus">
                <i class="fa-solid fa-plus basketPlus" onclick="increaseAmount(${index})"></i>
                <i class="fa-solid fa-minus basketMinus"onclick="decreaseAmount(${index})"></i>
            </div>
            <hr>
        </div>
    `;
}

// Function to sum up total price, with shipping expanses
function getBasketPrice() {
    let sum = 0;
    let shipping = 3.9;
    sum = sum + shipping;
    let total = document.querySelector(".total");
    total.innerHTML = "";
    for (let index = 0; index < basketDishes.length; index++) {
        const element = basketDishes[index];
        sum = sum + (element['price'] * element['amount']);
    }
    return total.innerHTML += sum.toFixed(2) + "€";
}


// Function to get sub total, without shipping expanses
function getBasketSubTotal() {
    let sum = 0;
    let subTotal = document.querySelector(".subTotal");
    subTotal.innerHTML = "";
    for (let index = 0; index < basketDishes.length; index++) {
        const element = basketDishes[index];
        sum = sum + (element['price'] * element['amount']);
    }
    return subTotal.innerHTML += sum.toFixed(2) + "€";
}

// Function to show total price amount on button (under 900px)
function getBasketPriceButton() {
    let sum = 0;
    let shipping = 3.9;
    sum = sum + shipping;
    let totalBtn = document.querySelector(".totalBtn");
    totalBtn.innerHTML = "";
    for (let index = 0; index < basketDishes.length; index++) {
        const element = basketDishes[index];
        sum = sum + (element['price'] * element['amount']);
    }
    return totalBtn.innerHTML += sum.toFixed(2) + "€";
}


// Function to increase amount 
function increaseAmount(index) {
    basketDishes[index].amount++;
    getBasketPrice();
    getBasketSubTotal();
    getBasketPriceButton()
    showBasketDishes();
}

// Function to decrease amount 
function decreaseAmount(index) {

    // First check if amount is bigger than zero 
    if (basketDishes[index].amount > 1) {
        basketDishes[index].amount--;
    } else {
        basketDishes.splice(index, 1);
    }
    getBasketPrice();
    getBasketSubTotal();
    getBasketPriceButton();
    showBasketDishes();

    // Delete dish from basket if amount is 1 and gets clicked
    /*  if (basketDishes[index].amount == 1) {
         basketDishes.splice(index, 1);
         console.log("works");
     } */
}


/* Function to show shopping basket in mobile when clicked on button */
function showMobileBasket() {
    let shoppingBasketContainer = document.querySelector(".shoppingBasket");
    let restaurantSection = document.querySelector(".restaurantSection");
    let btnContainerMobile = document.querySelector(".btnContainer");
    let footerContainer = document.querySelector(".footer");
    let invisibleBtn = document.querySelector(".invisibleBtn");

    shoppingBasketContainer.classList.toggle("active");
    restaurantSection.classList.toggle("active");
    btnContainerMobile.classList.toggle("active");
    footerContainer.classList.toggle("activeMobile");
    invisibleBtn.classList.toggle("active");
}



/* Localstorage */
function saveDishes() {
    // Convert to JSON string
    let dishToLocalStorage = JSON.stringify(basketDishes);
    localStorage.setItem("dish", dishToLocalStorage);
}

function loadDishes() {
    // Convert to an array
    let dishFromLocalStorage = JSON.parse(localStorage.getItem("dish"));

    if (dishFromLocalStorage) {
        basketDishes = dishFromLocalStorage;
    }
}