  document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const thankYouMessage = document.getElementById("thankYouMessage");

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // Here you can add code to send the form data to your server
      // using XMLHttpRequest or Fetch API.
      // For this example, we'll just show the "Thank you" message.
      thankYouMessage.style.display = "block";
    });
  });
