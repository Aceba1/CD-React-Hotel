import React, { createContext, useEffect, useState } from 'react'

export const BalanceContext = createContext();

function BalanceContextProvider(props) {
  const [balance, setBalance] = useState(() => {
    return JSON.parse(localStorage.getItem("balance")) ?? {pinned:0, store:0, bank:0};
  })

  useEffect(() => {
    localStorage.setItem("balance", JSON.stringify(balance))
  }, [balance]);

  return (
    <BalanceContext.Provider value={{balance:balance, setBalance}}>
      {props.children}
    </BalanceContext.Provider>
  )
}

export default BalanceContextProvider;

