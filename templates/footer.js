// Get footer container
let footer = document.querySelector(".footer");

// Create function to generate footer 
function generateFooter() {
    footer.innerHTML = /*html*/ `
        <div class="footerLeft">
            <img src="./images/logo.png">
            <ul class="socialLinks">
                <li><a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://twitter.com/i/flow/login" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="https://de-de.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
            </ul>
        </div>
        <div class="footerRight">
            <ul class="rightLinks">
                <li><a href="#">Restaurant empfehlen</a></li>
                <li><a href="#">Restaurant anmelden</a></li>
                <li><a href="#">Karriere</a></li>
                <li><a href="#">News about us</a></li>
            </ul>
            <ul class="rightLinks">
                <li><a href="#">AGB</a></li>
                <li><a href="#">Datenschutzerklärung</a></li>
                <li><a href="#">Impressum</a></li>
                <li><a href="#">Irgendwas</a></li>
            </ul>
        </div>
    `;
} 