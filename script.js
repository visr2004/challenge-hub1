document.getElementById('email-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const emailField = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');
  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  if (!emailField.value) {
    errorMessage.textContent = 'Email address is required';
  } else if (!emailPattern.test(emailField.value)) {
    errorMessage.textContent = 'Please enter a valid email address';
  } else {
    errorMessage.textContent = '';
    // Handle successful form submission here
  }
});
