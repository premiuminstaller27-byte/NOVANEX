```javascript
/* =========================================
   NOVANEX — MAIN JAVASCRIPT
========================================= */


/* =========================================
   WHATSAPP CONFIGURATION
   Replace the placeholder with your number.

   Example for India:
   const WHATSAPP_NUMBER = "919876543210";

   Use country code + number.
   Do not use +, spaces, or hyphens.
========================================= */

const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER_WITH_COUNTRY_CODE";


/* =========================================
   MOBILE NAVIGATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navMenu.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";

        });


        // Close the menu after selecting a navigation link.

        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.setAttribute("aria-label", "Open navigation");

                menuToggle.textContent = "☰";

            });

        });


        // Close the menu when clicking outside it.

        document.addEventListener("click", function (event) {

            const clickedInsideMenu = navMenu.contains(event.target);
            const clickedToggle = menuToggle.contains(event.target);

            if (!clickedInsideMenu && !clickedToggle) {

                navMenu.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.setAttribute("aria-label", "Open navigation");

                menuToggle.textContent = "☰";

            }

        });

    }


    /* =========================================
       AUTOMATIC COPYRIGHT YEAR
    ========================================= */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* =========================================
       AUTOMATIC SERVICE SELECTION
       Example:
       contact.html?service=Website%20Creation
    ========================================= */

    const serviceSelect = document.getElementById("service");

    if (serviceSelect) {

        const params = new URLSearchParams(window.location.search);

        const requestedService = params.get("service");

        if (requestedService) {

            const matchingOption = Array.from(serviceSelect.options).find(
                function (option) {
                    return option.value.toLowerCase() ===
                           requestedService.trim().toLowerCase();
                }
            );

            if (matchingOption) {
                serviceSelect.value = matchingOption.value;
            }

        }

    }


    /* =========================================
