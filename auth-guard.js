// This script checks if a user is authenticated before allowing access to a page.

(function () {
  const token = localStorage.getItem("token");
  console.log("=====");

  if (!token) {
    // If no token is found, redirect the user to the login page.
    window.location.href = "login.html";
  }
})();
