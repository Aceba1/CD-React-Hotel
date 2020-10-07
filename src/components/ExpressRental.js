import React, { useState, useContext } from 'react'
import { BalanceContext } from '../contexts/BalanceContext';
import { RoomsContext } from '../contexts/RoomsContext'
import modifyRoom from '../utils/modifyRoom';
import { pinPrice } from '../utils/roomPrice';

function ExpressRental(props) {
  const {rooms, setRooms} = useContext(RoomsContext);
  const {balance, setBalance} = useContext(BalanceContext);
  const {roomID, price} = props.room;
  const [name, setName] = useState("")
  const [log, setLog] = useState("")

  const handleClick = (e) => {
    e.preventDefault();
    if (!name || name.trim() === "") return;
    const _name = name.trim();

    setRooms(modifyRoom(rooms, roomID, {renter: name})); // Set rooms

    setBalance({...balance, store:balance.store + price, pinned:balance.pinned + pinPrice})
    setName(""); // Clear name
    setLog(`Rented ${roomID} to ${_name}!`) // Add log
  }

  return (
    <form className="express">
      <p className="title">Express Rental</p>
      <input className="text-input" 
        type="text" 
        autoFocus 
        placeholder="Name of Renter" 
        value={name} 
        onChange={(event) => {setName(event.target.value)}}/>
      <br/>
      <div className="express-button">
        <label className="label">
          Room {roomID}, Price ${price}
        </label>
        <button onClick={handleClick}>
          Express Checkout
        </button> 
      </div>
      <label>{log}</label>
    </form>
  )
}

export default ExpressRental

