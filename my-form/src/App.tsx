
import React from 'react';
import './App.css';
import MyForm from './MyForm';
import AddressForm from './AddressForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Basic information</h1>
        <MyForm />
        <div className="form-divider"> 
        <h1>Address details </h1></div>
        <AddressForm />
      </header>
    </div>
  );
};

export default App;
