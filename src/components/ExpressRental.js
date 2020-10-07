import React, { useState, useContext } from 'react'
import { RoomsContext } from '../contexts/RoomsContext'
import modifyRoom from '../utils/modifyRoom';

function ExpressRental(props) {
  const {rooms, setRooms} = useContext(RoomsContext);
  const {roomID, price} = props.room;
  const [name, setName] = useState("")
  const [log, setLog] = useState("")

  const handleClick = (e) => {
    e.preventDefault();
    if (!name || name.trim() === "") return;
    const _name = name.trim();

    setRooms(modifyRoom(rooms, roomID, {renter: name})); // Set rooms

    setName(""); // Clear name
    setLog(`Rented ${roomID} to ${_name}!`) // Add log
  }

  return (
    <form className="express">
      <p>Express Rental</p>
      <input type="text" autoFocus placeholder="Name of Renter" value={name} onChange={(event) => {setName(event.target.value)}}/>
      <br/>
      <div className="express-button">
        <label>Room {roomID}, Price ${price}</label>
        <button onClick={handleClick}>Express Checkout</button> 
      </div>
      <label>{log}</label>
    </form>
  )
}

export default ExpressRental

