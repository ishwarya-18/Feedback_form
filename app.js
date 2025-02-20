document.getElementById('myForm').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent default form submission

  const form = document.getElementById('myForm');
  const formData = new FormData(form);
  const responseMessage = document.getElementById('responseMessage');

  // Reset previous messages
  responseMessage.innerHTML = "";
  responseMessage.classList.remove('alert', 'success');

  // Client-side validation
  const email = formData.get('email');
  const password = formData.get('password');
  const terms = document.getElementById('terms').checked;

  if (!email.includes('@')) {
      responseMessage.innerHTML = 'Please enter a valid email address.';
      responseMessage.classList.add('alert');
      return;
  } else if (password.length < 6) {
      responseMessage.innerHTML = 'Password must be at least 6 characters.';
      responseMessage.classList.add('alert');
      return;
  } else if (!terms) {
      responseMessage.innerHTML = 'You must accept the terms and conditions.';
      responseMessage.classList.add('alert');
      return;
  }

  // Submit form using Fetch API
  try {
      const response = await fetch('/submit', {
          method: 'POST',
          body: new URLSearchParams(formData), // Convert FormData to URL-encoded string
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });

      const result = await response.json();
      
      responseMessage.innerHTML = result.message;
      responseMessage.classList.add(result.success ? 'success' : 'alert');
  } catch (error) {
      responseMessage.innerHTML = 'An error occurred. Please try again.';
      responseMessage.classList.add('alert');
  }
});
