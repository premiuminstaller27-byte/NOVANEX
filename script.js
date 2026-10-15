const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const contactForm = document.querySelector("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(contactForm);
    const subject = encodeURIComponent("NOVANEX project enquiry - " + form.get("service"));
    const body = encodeURIComponent(
      "Name: " + form.get("name") + "\n" +
      "Email: " + form.get("email") + "\n" +
      "Service: " + form.get("service") + "\n\n" +
      "Project details:\n" + form.get("message")
    );
    // Replace hello@novanex.example with your real business email before publishing.
    window.location.href = "mailto:hello@novanex.example?subject=" + subject + "&body=" + body;
  });
}
