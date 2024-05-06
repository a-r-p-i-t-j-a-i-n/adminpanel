class AuthService {
  async login(credentials) {
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const data = await response.json();
      localStorage.setItem('token', data.token); // Store the token in local storage
      return data;
    } catch (error) {
      throw error;
    }
  }

  async signup(userInfo) {
    try {
      const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
      if (!response.ok) {
        throw new Error('Signup failed');
      }
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    // Implement logout logic here
  }
}

export default new AuthService();
