import React from 'react';
import './App.scss';
import WidgetMeteo from '../MeteoWidget';

function App() {
  return (
    <div className="App">
      <WidgetMeteo city="Angers" code={49} />
    </div>
  );
}

export default App;
