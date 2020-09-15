import React from 'react';
import './App.scss';
import WidgetMeteo from '../MeteoWidget';

function App() {
  return (
    <div className="App">
      <WidgetMeteo city="Angers" code={49} />
      <WidgetMeteo city="Paris" code={75} />
      <WidgetMeteo city="Nimes" code={30} />
      <WidgetMeteo city="Kleinfrankenheim" code={67} />
    </div>
  );
}

export default App;
