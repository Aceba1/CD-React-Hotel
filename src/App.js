import React from 'react';
import RoomsContextProvider from './contexts/RoomsContext';
import Pager from './components/Pager';

function App() {
  return (
    <div className="App">
      <RoomsContextProvider>
        <Pager/>
      </RoomsContextProvider>
    </div>
  );
}

export default App;
