
let loginForm = document.getElementById('login-Container');
loginForm.style.animation = "fadeIn 1s linear";

window.onload = (function () {

    let loginForm = document.getElementById('login-Container');

    let signUpForm = document.getElementById('signUp-Container');

    document.getElementById('signUpBut').addEventListener('click', function() {

        loginForm.style.visibility = "hidden";
        loginForm.style.position = "absolute"
        loginForm.style.animation = "";

        signUpForm.style.visibility = "visible";
        signUpForm.style.position = "relative";
        signUpForm.style.animation = "fadeIn 1s linear";
    });

    document.getElementById('submitSignUp').addEventListener('click', function() {

        signUpForm.style.visibility = "hidden";
        signUpForm.style.position = "absolute"
        signUpForm.style.animation = "";

        loginForm.style.visibility = "visible";
        loginForm.style.position = "relative"
        loginForm.style.animation = "fadeIn 1s linear";
    });
});