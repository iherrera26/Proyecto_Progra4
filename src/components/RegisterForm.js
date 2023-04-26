import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    axios.post('/api/users', {
      user: {
        name,
        email,
        password
      }
    })
    .then(response => {
      console.log('User created successfully:', response.data.user);
    })
    .catch(error => {
      console.error('Error creating user:', error);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
