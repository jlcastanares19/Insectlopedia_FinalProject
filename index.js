document.addEventListener("DOMContentLoaded", function () {
  const adminBtn = document.getElementById("adminBtn");
  const adminModal = document.getElementById("adminModal");
  const closeBtn = document.getElementById("closeBtn");
  const loginForm = document.getElementById("loginForm");
  const errorMessage = document.getElementById("error-message");
  const startExploringBtn = document.querySelector(".btn[href='main.html']");

  const adminCredentials = {
    username: "admin",
    password: "admin123"
  };

  adminBtn.addEventListener("click", function () {
    adminModal.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    adminModal.style.display = "none";
  });

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === adminCredentials.username && password === adminCredentials.password) {
      localStorage.setItem("isAdmin", "true");

      adminModal.style.display = "none";

      errorMessage.style.display = "none";

      window.location.href = "main.html"; 
    } else {
      errorMessage.style.display = "block";
    }
  });

  if (localStorage.getItem("isAdmin") === "true") {
    enableAdminFeatures();
  } else {
    disableAdminFeatures();
  }

  function enableAdminFeatures() {
    console.log("Admin features are enabled.");
  }

  function disableAdminFeatures() {
    console.log("Admin features are disabled.");
  }

});
