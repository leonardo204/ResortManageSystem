import React from 'react';
import './App.css';
import InputDesign from './components/InputDesign';

function App() {
  const handleSubmit = (email: string) => {
    console.log('Email submitted:', email);
    // Handle email submission logic here
  };

  const handleCancel = () => {
    console.log('Signup cancelled');
    // Handle cancel logic here
  };

  return (
    <div className='App'>
      <InputDesign onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
}

export default App;
