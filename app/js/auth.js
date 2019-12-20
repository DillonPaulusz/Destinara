
function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "ajmal" && password === "abc123") {
        window.location = "home.html"; // Redirecting to other page.
        } else {
        alert("Incorrect Login Credentials")

    }
}
