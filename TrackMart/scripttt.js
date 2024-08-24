// scripts.js
document.getElementById('openSignInBtn').onclick = function () {
    document.getElementById('signInModal').style.display = 'block';
}

document.getElementById('openSignUpBtn').onclick = function () {
    document.getElementById('signUpModal').style.display = 'block';
}

document.getElementById('closeSignIn').onclick = function () {
    document.getElementById('signInModal').style.display = 'none';
}

document.getElementById('closeSignUp').onclick = function () {
    document.getElementById('signUpModal').style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == document.getElementById('signInModal')) {
        document.getElementById('signInModal').style.display = 'none';
    } else if (event.target == document.getElementById('signUpModal')) {
        document.getElementById('signUpModal').style.display = 'none';
    }
}
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        link.classList.remove('visited');
    });
});