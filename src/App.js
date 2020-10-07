import React from 'react';
import RoomsContextProvider from './contexts/RoomsContext';
import Pager from './components/Pager';
import BalanceContextProvider from './contexts/BalanceContext';

function App() {
  return (
    <div className="App">
      <RoomsContextProvider>
        <BalanceContextProvider>
          <Pager/>
        </BalanceContextProvider>
      </RoomsContextProvider>
    </div>
  );
}

export default App;
