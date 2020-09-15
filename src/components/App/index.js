import React from 'react';
import './App.scss';
import WidgetMeteo from '../MeteoWidget';

function App() {
  return (
    <div className="App">
      <WidgetMeteo city="Angers" code="49000" />
      <WidgetMeteo city="Paris" code="75000" />
      <WidgetMeteo city="Tréal" code="56140" />
      <WidgetMeteo city="Caen" code="14000" />
    </div>
  );
}

export default App;
