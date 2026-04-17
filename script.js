document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const btn = this.querySelector("button");
        const originalText = btn.textContent;
        
        btn.textContent = "Enviando...";
        btn.disabled = true;
        
        setTimeout(() => {
            alert("Gracias por contactar. Esto es una simulacion de envio para el portafolio.");
            btn.textContent = originalText;
            btn.disabled = false;
            contactForm.reset();
        }, 1500);
    });
}