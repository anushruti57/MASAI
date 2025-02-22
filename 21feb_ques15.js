function registerUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User registered successfully");
            resolve();
        }, 1000);
    });
}

function sendVerification() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Verification email sent");
            resolve();
        }, 1000);
    });
}

function loginUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User logged in successfully");
            resolve();
        }, 1000);
    });
}

function displayWelcomeMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Welcome, user!");
            resolve();
        }, 1000);
    });
}

registerUser()
    .then(sendVerification)
    .then(loginUser)
    .then(displayWelcomeMessage)
    .then(() => console.log("Workflow completed successfully"))
    .catch(error => console.error("Error:", error));