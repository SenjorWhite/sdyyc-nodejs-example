import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Members from './components/members';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link className="button" to="/">Home</Link>
        <Link className="button" to="/members">Members Page</Link>
        <Route path="/members" component={Members} />
      </div>
    </BrowserRouter>
  );
}

export default App;
