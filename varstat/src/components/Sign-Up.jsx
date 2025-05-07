import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Nav from './Navigation'
<Nav/>

function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [signupResult, setSignupResult] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;
    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setSignupResult('Signup successful!');
      console.log('New user:', userCredential.user);
    } catch (error) {
      setSignupResult(`Signup failed: ${error.message}`);
    }
  };

  return (
    <><Nav/>
    <form className="signupForm" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password (6+ characters):</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={6}
        />
      </div>
      <button type="submit">Sign Up</button>
      <div style={{ marginTop: '1rem', color: 'blue' }}>{signupResult}</div>
    </form>
    </>
  );
}

export default SignupForm;
