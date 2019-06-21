import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Members from './components/members';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        Hello World!
        <Route path="/members" component={Members} />
      </div>
    </BrowserRouter>
  );
}

export default App;
