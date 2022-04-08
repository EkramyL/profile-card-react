import React from 'react';
import Image from './components/Image.js';
import CardInfo from './components/CardInfo.js';
function App() {
  return (
    <div className="container">
      <div className="card">
        <Image />
        <CardInfo />
      </div>
    </div>
  );
}
export default App;
