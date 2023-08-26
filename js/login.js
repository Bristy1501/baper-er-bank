document.getElementById('submit-btn').addEventListener('click', function () {
    const email = document.getElementById('email');
    const providedEmail = email.value;
    console.log(providedEmail);
    const password = document.getElementById('password');
    const providedPassword = password.value;
    console.log(providedPassword);
    if (providedEmail == 'hello@gmail.com' && providedPassword == '1234') {
        window.location.href = 'bank.html'
    }

})