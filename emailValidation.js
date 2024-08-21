document.addEventListener('DOMContentLoaded', function() {
    var subscriptionForm = document.getElementById('subscriptionForm');
    var emailInput = document.getElementById('emailInput'); // Get the email input field
    var errorText = document.getElementById('errorText');

    subscriptionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var email = emailInput.value;
        
        if (validateEmail(email) && email.trim() !== "") {
            errorText.style.display = 'none'; 
            emailInput.style.border = '1px solid #ccc'; 
            emailInput.style.backgroundColor = '#fff'; 
            window.location.href = 'success.html?email=' + encodeURIComponent(email);
        } 
     else {
            errorText.style.display = 'block'; 
            errorText.style.color = 'red';
            emailInput.style.border = '2px solid #FF6155'; 
            emailInput.style.backgroundColor = '#FFEBEB'; 
        }
    });

    function validateEmail(email) {
        var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
});
