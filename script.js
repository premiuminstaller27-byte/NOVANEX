```javascript
/* ========================================
   NOVANEX — WEBSITE FUNCTIONALITY
   ======================================== */

/*
  IMPORTANT:
  Replace the placeholder below with your WhatsApp number.
  Include the country code, but do NOT include +, spaces, or dashes.
  Example format for an Indian number: 91XXXXXXXXXX
*/
const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER_WITH_COUNTRY_CODE";


/* MOBILE NAVIGATION */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });

    document.addEventListener("click", (event) => {
        if (
            !navLinks.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        }
    });
}


/* AUTOMATIC FOOTER YEAR */

document.querySelectorAll(".current-year").forEach((element) => {
    element.textContent = new Date().getFullYear();
});


/* PRESELECT SERVICE FROM URL */

const serviceSelect = document.querySelector("#service");

if (serviceSelect) {
    const params = new URLSearchParams(window.location.search);
    const requestedService = params.get("service");

    if (requestedService) {
        const matchingOption = Array.from(serviceSelect.options).find(
            (option) =>
                option.value.toLowerCase() === requestedService.toLowerCase()
        );

        if (matchingOption) {
            serviceSelect.value = matchingOption.value;
        }
    }
}


/* PROJECT REQUIREMENTS → WHATSAPP */

const projectForm = document.querySelector("#projectForm");

if (projectForm) {
    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (
            !WHATSAPP_NUMBER ||
            WHATSAPP_NUMBER === "YOUR_WHATSAPP_NUMBER_WITH_COUNTRY_CODE" ||
            !/^\d+$/.test(WHATSAPP_NUMBER)
        ) {
            alert(
                "The WhatsApp number has not been configured yet. " +
                "Please contact the website owner."
            );
            return;
        }

        const name = document.querySelector("#name").value.trim();
        const service = document.querySelector("#service").value;
        const budget = document.querySelector("#budget").value;
        const deadline = document.querySelector("#deadline").value.trim();
        const details = document.querySelector("#details").value.trim();

        if (!name || !service || !details) {
            alert("Please fill in your name, service, and project details.");
            return;
        }

        const message = [
            "Hello NOVANEX! I'd like to discuss a project.",
            "",
            "*Name:* " + name,
            "*Service:* " + service,
            "*Budget:* " + budget,
            "*Expected deadline:* " + (deadline || "Not specified"),
            "",
            "*Project details:*",
            details
        ].join("\n");

        const whatsappURL =
            "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
}
```
