// Mocking navigation (you can replace it with actual routing if needed)
function navigate(url) {
  alert(`Navigating to: ${url}`);
  window.location.href = url; // Replace with actual routing logic if needed
}

// App state
let currentState = 'Login'; // 'Login' or 'Sign Up'
let isLoggedIn = false;
let user = null;

// Check for saved user data
function checkLoggedIn() {
  const loggedInStatus = localStorage.getItem('isLoggedIn');
  const savedUser = JSON.parse(localStorage.getItem('user'));
  if (loggedInStatus === 'true' && savedUser) {
    isLoggedIn = true;
    user = savedUser;
    renderWelcome();
  } else {
    renderForm();
  }
}

// Render login or signup form
function renderForm() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <form id="auth-form">
      <div>
        <h2>${currentState}</h2>
      </div>
      <p id="error-message" class="error"></p>
      ${
        currentState === 'Sign Up'
          ? '<input type="text" id="name" placeholder="Name" required />'
          : ''
      }
      <input type="email" id="email" placeholder="Email address" required />
      <input type="password" id="password" placeholder="Password" required />
      <button type="submit">${currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
      <p class="toggle-state" onclick="toggleState()">
        ${
          currentState === 'Login'
            ? 'Create Account'
            : 'Already have an account? Login here'
        }
      </p>
    </form>
  `;

  const form = document.getElementById('auth-form');
  if (form) form.addEventListener('submit', handleSubmit);
}

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();
  const errorMessage = document.getElementById('error-message');
  errorMessage.textContent = '';

  const name = document.getElementById('name')?.value || '';
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (currentState === 'Sign Up') {
    if (!name) {
      errorMessage.textContent = 'Name is required';
      return;
    }
    if (!email) {
      errorMessage.textContent = 'Email is required';
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMessage.textContent = 'Please enter a valid email address';
      return;
    }
    if (!password || password.length < 6) {
      errorMessage.textContent = 'Password must be at least 6 characters long';
      return;
    }

    // Save user data
    const newUser = { name, email, password };
    localStorage.setItem('user', JSON.stringify(newUser));
    alert('User registered successfully! Please log in.');
    currentState = 'Login';
    renderForm();
  } else if (currentState === 'Login') {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      // Login successful
      isLoggedIn = true;
      user = savedUser;
      localStorage.setItem('isLoggedIn', 'true');
      alert('Login successful');
      renderWelcome();
    } else {
      errorMessage.textContent = 'Invalid credentials';
    }
  }
}

// Toggle between Login and Sign Up
function toggleState() {
  currentState = currentState === 'Login' ? 'Sign Up' : 'Login';
  renderForm();
}

// Render welcome screen
function renderWelcome() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="welcome">
      <h2>Welcome, ${user.name}!</h2>
      <p>Email: ${user.email}</p>
      <button id="logout-button">Logout</button>
    </div>
  `;

  const logoutButton = document.getElementById('logout-button');
  if (logoutButton) logoutButton.addEventListener('click', handleLogout);
}

// Handle logout
function handleLogout() {
  isLoggedIn = false;
  user = null;
  localStorage.removeItem('isLoggedIn');
  alert('You have been logged out');
  renderForm();
}

// Initial load
checkLoggedIn();
