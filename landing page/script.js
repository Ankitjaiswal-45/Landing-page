
const loginButton = document.getElementById('login-btn');
const signupButton = document.getElementById('signup-btn');

loginButton.addEventListener('click', () => {
    alert('Redirecting to login page.');
   
});

signupButton.addEventListener('click', () => {
    alert('Redirecting to sign-up page.');
    
});

r
const searchBar = document.querySelector('.search-bar input');
searchBar.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        alert(`Searching for: ${searchBar.value}`);
        
    }
});
