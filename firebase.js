// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase Authentication service
const auth = firebase.auth();

// Get a reference to the login form elements
const loginForm = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const errorMessage = document.querySelector('#errorMessage');

// Add an event listener to the login form to handle form submission
loginForm.addEventListener('submit', e => {
	e.preventDefault(); // Prevent the form from submitting
	const email = emailInput.value;
	const password = passwordInput.value;
	// Call the Firebase signInWithEmailAndPassword method to authenticate the user
	auth.signInWithEmailAndPassword(email, password)
		.then(() => {
			// Redirect the user to the home page or do something else
			window.location.href = 'index.html';
		})
		.catch(error => {
			// Display an error message if the authentication fails
			errorMessage.textContent = error.message;
		});
});

const authen = firebase.auth();

// Get a reference to the signup form elements
const signupForm = document.querySelector('form');
const emailidInput = document.querySelector('#email');
const passwordasInput = document.querySelector('#password');
const errorsMessage = document.querySelector('#errorMessage');

// Add an event listener to the signup form to handle form submission
signupForm.addEventListener('submit', e => {
	e.preventDefault(); // Prevent the form from submitting
	const email = emailidInput.value;
	const password = passwordasInput.value;
	// Call the Firebase createUserWithEmailAndPassword method to create a new user
	auth.createUserWithEmailAndPassword(email, password)
		.then(() => {
			// Redirect the user to the home page or do something else
			window.location.href = 'home.html';
		})
		.catch(error => {
			// Display an error message if the signup fails
			errorsMessage.textContent = error.message;
		});
});