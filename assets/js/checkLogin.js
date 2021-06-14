function checkLogin() {
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    if (email.toLowerCase() === "admin@binshaher.com" && password.toLowerCase() === "admin") {
        alert("Successfully Logged in.")
        window.location.href = 'dashboard.html'
        return false;
    } else {
        alert("wrong login, email: admin@binshaher.com, password: admin")
        window.location.href = 'login.html';
        return false;
    }
}