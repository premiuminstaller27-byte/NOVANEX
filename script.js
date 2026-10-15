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

    const fields = [
      ["Customer name", "name"],
      ["Contact details", "contact"],
      ["Selected service", "service"],
      ["Project purpose", "purpose"],
      ["Requirements", "requirements"],
      ["Budget", "budget"],
      ["Deadline", "deadline"],
      ["Reference link", "reference"]
    ];

    const message = [
      "Hello NOVANEX! I'd like to start a project.",
      "",
      ...fields.map(([label, key]) => {
        const value = String(form.get(key) || "").trim();
        return value ? `${label}: ${value}` : "";
      }).filter(Boolean)
    ].join("\n");

    const whatsappURL =
      "https://wa.me/919042479227?text=" +
      encodeURIComponent(message);

    window.location.href = whatsappURL;
  });
}
