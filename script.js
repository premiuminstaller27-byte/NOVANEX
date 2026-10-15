```javascript
const WHATSAPP_NUMBER = "919042479227";

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });
}

// Automatically update footer year
const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Select service from URL parameter
const serviceSelect = document.querySelector("#service");

if (serviceSelect) {
  const params = new URLSearchParams(window.location.search);
  const selectedService = params.get("service");

  if (selectedService) {
    const matchingOption = Array.from(serviceSelect.options).find(
      (option) =>
        option.value.toLowerCase() === selectedService.toLowerCase() ||
        option.textContent.toLowerCase() === selectedService.toLowerCase()
    );

    if (matchingOption) {
      serviceSelect.value = matchingOption.value;
    }
  }
}

// Project form: send details to WhatsApp
const projectForm = document.querySelector("#project-form");

if (projectForm) {
  projectForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name")?.value.trim() || "";
    const service = document.querySelector("#service")?.value || "";
    const budget = document.querySelector("#budget")?.value || "";
    const deadline = document.querySelector("#deadline")?.value || "";
    const details = document.querySelector("#details")?.value.trim() || "";

    if (!name || !service || !budget || !deadline || !details) {
      alert("Bro, please fill in all project details.");
      return;
    }

    const message = [
      "Hello NOVANEX! 👋",
      "",
      "I want to start a project.",
      "",
      `Name: ${name}`,
      `Service: ${service}`,
      `Budget: ${budget}`,
      `Deadline: ${deadline}`,
      "",
      "Project Details:",
      details,
      "",
      "Sent from the NOVANEX website."
    ].join("\n");

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    const whatsappWindow = window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

    if (!whatsappWindow) {
      window.location.href = whatsappURL;
    }
  });
}
```
