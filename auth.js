// If you are reading this than fuck u for getting into my github

const valid = {
    username: "anotheruselesslife",
    password: "niggernuts",
    key: "AUTH_1A0-H9T-8R3-J7K-5U6-Y7T-2R1-E9W-5J7-J6J"
};

function authenticate() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const key = document.getElementById('key').value;
    const messageElement = document.getElementById('message');
    if (!username || !password || !key) {
        messageElement.textContent = "Please fill in all fields";
        return; }
    if (username === valid.username && 
        password === valid.password && 
        key === valid.key) {
        messageElement.textContent = "Authentication successful!";
        messageElement.style.color = "#4CAF50";
        
        // window.location.href = "success.html";
    } else {
        messageElement.textContent = "Invalid credentials!";
        messageElement.style.color = "#d9534f";
    }
}
// this is my basic auth system i might make a better one later tbh
