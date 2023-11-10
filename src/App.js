// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const dobDate = new Date(dob);
    const currentDate = new Date();

    if (isNaN(dobDate.getTime())) {
      alert('Please enter a valid date of birth');
      return;
    }

    const ageDiff = currentDate.getFullYear() - dobDate.getFullYear();

    // Check if birthday has occurred this year
    const hasBirthdayOccurred =
      currentDate.getMonth() > dobDate.getMonth() ||
      (currentDate.getMonth() === dobDate.getMonth() &&
        currentDate.getDate() >= dobDate.getDate());

    const finalAge = hasBirthdayOccurred ? ageDiff : ageDiff - 1;

    setAge(finalAge);
  };

  return (
    <div className="App">
      <br/>
      <h1>Age Calculator</h1>
      <label>
        <b>
        Enter your date of birth
        </b>
        <br/>
        <br/>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <br/>
      </label>
      <br></br>
      <button
  onClick={calculateAge}
  style={{ backgroundColor: 'blue', width: '90px', height: '50px', borderRadius: '0' }}
>
  Calculate Age
</button>
      {age !== null && <p>Your are {age} years old</p>}
    </div>
  );
};

export default App;