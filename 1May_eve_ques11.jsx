
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Enter your name" onChange={handleNameChange} />
      <TopMain name={name} />
    </div>
  );
}

function TopMain({ name }) {
  return (
    <div>
      <MiddleMain name={name} />
    </div>
  );
}

function MiddleMain({ name }) {
  return (
    <div>
      <BottomMainRight name={name} />
    </div>
  );
}

function BottomMainRight({ name }) {
  return <h1>Hello, {name}</h1>;
}

export default App;

