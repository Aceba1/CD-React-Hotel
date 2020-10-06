import React from 'react';
import logo from './logo.svg';
import './App.css';
import RoomsContextProvider from './contexts/RoomsContext';

function App() {
  return (
    <div className="App">
      <RoomsContextProvider>
        
      </RoomsContextProvider>
    </div>
  );
}

export default App;
