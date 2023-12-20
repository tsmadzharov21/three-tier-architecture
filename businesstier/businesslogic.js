async function authenticate() {
    try {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
  
        const response = await fetch('../data/data.txt');
        const data = await response.text();
  
        const users = data.split('\n');
        let isValid = false;
  
        users.forEach(user => {
            const [storedUsername, storedPassword] = user.split(':');
            if (username === storedUsername && password === storedPassword) {
                isValid = true;
            }
        });
  
        if (isValid) {
            alert("Login successful! We welcome you to our website" + username);
        } else {
            alert("Invalid username or password. Please try again.");
        }
    } catch (error) {
        console.error('Error while reading the file:', error);
    }
  }