import React from 'react';
import Dropdown from './components/Dropdown';


function App() {
  // These items array would be displayed in the dropdown list
  const options = ["Yes", "No", "Probably Not", "Probably Yes"];

  return (
    <div className="App">
      {/* Question */}
      <h2>Should you use a dropdown ?</h2>
      {/* Dropdown Component: options array is send as props to Dropdown component */}
      <Dropdown options={options} />
    </div>
  );
}

export default App;
