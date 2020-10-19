import { BalanceContext } from '../contexts/BalanceContext';

import React, { useContext, useState } from 'react';
import Modal from './Modal';
import Button from './Button';

export default function Balance() {
  const [show, setShow] = useState(false);
  const { balance, setBalance } = useContext(BalanceContext);
  
  const canWithdraw = balance.store > balance.pinned && balance.store > 0;

  const handleDeposit = () => {
    if (!canWithdraw) return;

    const delta = balance.store - balance.pinned;
    console.log(`Deposited ${delta} to bank`);

    let newBalance = { 
      store: balance.pinned, 
      pinned: balance.pinned, 
      bank: balance.bank + delta 
    }
    setBalance(newBalance);
  };

  return (
    <>
    <Button text="Balance" className={(show ? "active" : "inactive") + " nav-button"} onClick={()=>{setShow(!show)}} />
    {
      show ? (
        <Modal hide={() => {setShow(false)}} >
          <div className="balance">
            <p className="title">Manage Balance</p>
            <div style={{textAlign: "left"}}>
            <label className="content">Stored: ${balance.store}</label>
            <label className="label">Pinned: ${balance.pinned}</label>
            </div>
            <div>
              <Button className={(canWithdraw?"active":"inactive disabled")} text="Deposit funds" onClick={handleDeposit} />
            </div>
            <label className="label centered">Bank: ${balance.bank}</label>
          </div>
        </Modal>
      ) : null
    }
    </>
  )
}
