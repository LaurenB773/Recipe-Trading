<template>
    <div class="register-container">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div class="input-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Enter username"
            required
          />
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter password"
            required
          />
        </div>
        <div class="input-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            placeholder="Confirm password"
            required
          />
        </div>
        <button type="submit" class="btn">Register</button>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
        <div v-if="successMessage" class="success">{{ successMessage }}</div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Register',
    data() {
      return {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        errorMessage: '',
        successMessage: '',
      };
    },
    methods: {
      register() {
        // Reset messages
        this.errorMessage = '';
        this.successMessage = '';
  
        // Simple validation
        if (!this.username || !this.email || !this.password || !this.confirmPassword) {
          this.errorMessage = 'All fields are required.';
          return;
        }
  
        // Check if passwords match
        if (this.password !== this.confirmPassword) {
          this.errorMessage = 'Passwords do not match.';
          return;
        }
  
        // Simulate a registration request (replace with actual API call)
        if (this.username === 'user' && this.email === 'user@example.com') {
          this.successMessage = 'Registration successful! You can now log in.';
          // Redirect or clear the form as needed
        } else {
          this.errorMessage = 'Registration failed. Please try again.';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .register-container {
    width: 300px;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 100px auto;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .input-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button.btn {
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button.btn:hover {
    background-color: #45a049;
  }
  
  .error {
    color: red;
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
  }
  
  .success {
    color: green;
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
  }
  </style>
  
  