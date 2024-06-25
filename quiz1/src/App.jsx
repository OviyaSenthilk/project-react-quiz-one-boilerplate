import React from 'react';
import './App.css';
import Name from './Component/Home Comp';
import Quiz from './Component/Quiz comp';
import Score from './Component/Result comp';
function App() {
  return (
    <div className="App">
    <Name/>
    <Quiz />
    <Score />
    </div>
  );
}

export default App;