
# Encountered a bug in this phrase
   The current application experiences a problem where the authentication state is shared among all clients. When one client logs in or out, it inadvertently affects the authentication status of other clients. This issue may lead to unexpected behavior and is an area for improvement in the application's design.

# video sasmple
   https://github.com/SANJAY-P-M/handleLoginExpress/assets/106712995/24b2736f-02b2-4419-97ba-0784daca7a5d

# Task 5: Creating a Login Form with Express.js

In this repository, we have implemented a simple login form using Express.js to handle login form submissions and authenticate users. Additionally, we have added a logout button that allows users to log out, preventing them from accessing their accounts and redirecting them to the login page.

## Features

- **Login Form**: A basic login form that collects user credentials (username and password).

- **Authentication**: The application uses simple in-memory user authentication. User data is stored in a JavaScript object and is used for authentication.

- **Logout Button**: Once a user is logged in, they have the option to log out. Clicking the "Logout" button will destroy the session and return the user to the login page.

## Usage

To run this application locally, follow these steps:

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/SANJAY-P-M/handleLoginFormExpress
   ```

2. Navigate to the project directory.

   ```bash
   cd handleLoginFormExpress
   ```

3. Install the project dependencies.

   ```bash
   npm install
   ```

4. Start the Express.js server.

   ```bash
   npm start
   ```

5. Open a web browser and go to `http://localhost:3000` to access the login page.

## Configuration

You can modify the user authentication logic, user data, and any other aspects of the application as needed. User data and authentication logic can be found in the `users.js` file.

```javascript
// users.js

const users = [
  {
    username: "admin",
    password: "password123",
  },
  // Add more users as needed
];
```

## Contributing

Feel free to contribute to this project by creating issues or submitting pull requests. We welcome any improvements or additional features you'd like to add.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

- Your Name : [SANJAY P M](https://github.com/SANJAY-P-M)

---

Thank you for using our login form application with Express.js. We hope it meets your requirements and serves as a useful starting point for your web development projects. If you have any questions or need further assistance, please don't hesitate to contact us.
