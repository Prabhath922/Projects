import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Nav from './Navigation'

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [loginResult, setLoginResult] = useState(''); // <-- This line is important

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password ,username} = formData;
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password,username);
      setLoginResult('Login successful!');
      console.log('User:', userCredential.user);
    } catch (error) {
      setLoginResult(`Login failed: ${error.message}`);
    }
  };

  return (
    <><Nav/>

    <form className="loginForm" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">login</button>
      <div>{loginResult}</div>
    </form>
    </>
  );
}

export default LoginForm;
