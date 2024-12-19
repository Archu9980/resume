$(document).ready(function() {
    $("#contact-form").on("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Simple form validation
      let name = $("#name").val();
      let email = $("#email").val();
      let subject = $("#subject").val();
      let message = $("#message").val();
  
      if (name && email && subject && message) {
        alert("Thank you for contacting me! I will get back to you soon.");
      } else {
        alert("Please fill all the fields.");
      }
    });
  });
  