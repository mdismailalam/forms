// App.jsx or your layout component
import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="layout">
      <header className="header">
        <h1>Welcome to the App</h1>
        {/* Add the Link to AdmitCard */}
        <nav>
          <ul>
            <li><Link to="/">Portfolio</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/admitcard">Admit Card</Link></li> {/* Link to AdmitCard */}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default App;
