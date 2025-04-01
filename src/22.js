// Example 1: Simple login page
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('login-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Perform authentication logic here
    
    if (validationSuccessful()) {
      alert('Login successful!');
      window.location.href = '/dashboard';
    } else {
      alert('Invalid username or password.');
    }
  });
});

// Example 2: Simple form validation
document.getElementById('form-validation').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Perform form validation logic here
    
  if (validationSuccessful()) {
    alert('Form submission successful!');
  } else {
    alert('There was an error with your form.');
  }
});

function validationSuccessful() {
  return true;
}
