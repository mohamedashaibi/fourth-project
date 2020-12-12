import './App.css';
import Profile from './Profile/Profile';
import user from './user.svg';
import React from 'react';

function App() {
  const handleName = name => alert(name);
  return (
    <div className="App">
      <Profile FullName="Mohamed" Profession="Developer" handleName={handleName}>
        {user}
      </Profile>
    </div>
  );
}

export default App;
