// Accessible Form Validation (WCAG 3.3.1 Error Identification)
document.getElementById('audit-form').addEventListener('submit', function(e){
  e.preventDefault();
  const message = document.getElementById('form-message');

  if(!this.checkValidity()){
    message.textContent = "Please complete all required fields correctly.";
    return;
  }

  window.location.href = "thank-you.html";
});
