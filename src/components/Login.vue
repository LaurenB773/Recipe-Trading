<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
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
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit" class="btn">Login</button>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: '',
        errorMessage: '',
      };
    },
    methods: {
      login() {
        // Reset error message
        this.errorMessage = '';
  
        // Simple validation
        if (!this.username || !this.password) {
          this.errorMessage = 'Username and password are required.';
          return;
        }
  
        // Simulate a login request (you would normally call an API here)
        if (this.username === 'user' && this.password === 'password') {
          this.$router.push({ name: 'home' }); // Redirect to home page on success
        } else {
          this.errorMessage = 'Invalid username or password.';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
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
  </style>