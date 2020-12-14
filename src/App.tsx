import React from 'react';
import { TextField } from './Textfield';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <TextField
        text="yo"
        person={{ fname: 'sasa', lname: 'bing' }}
        ok={false}
      />
    </div>
  );
};

export default App;
