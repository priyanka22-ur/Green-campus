// Green Campus Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const formMessage = document.getElementById("formMessage");

    if (name.trim() === "" ||
        email.trim() === "" ||
        message.trim() === "") {

        formMessage.textContent = "Please fill all fields.";
        return;
    }

    formMessage.textContent =
        "Thank you, " + name +
        "! Your message has been received.";

    contactForm.reset();

});