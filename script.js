document.getElementById('password').addEventListener('input', validatePassword);
document.getElementById('cpassword').addEventListener('input', validatePassword);

function validatePassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('cpassword');
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match.");
        errorMessage.textContent = "Passwords do not match.";
        errorMessage.style.display = "block"; 
    } else {
        confirmPassword.setCustomValidity("");
        errorMessage.textContent = ""; 
        errorMessage.style.dispslay = "none"; 
    }
}