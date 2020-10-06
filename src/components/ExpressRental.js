import React, { useState, useContext } from 'react'
import { RoomsContext } from '../contexts/RoomsContext'
import PropTypes from 'prop-types'

function ExpressRental(props) {
  const {rooms, setRooms} = useContext(RoomsContext);
  const {roomID, fI, rI, price} = props.room;
  const [name, setName] = useState("")
  const [log, setLog] = useState("")

  const handleClick = (e) => {
    e.preventDefault();
    if (!name || name.trim() == "") return;
    const _name = name.trim();
    // let newRooms = [];
    // for (let f = 0; f < rooms.length; f++) {
    //   const arr = rooms[f];
    //   let newArr = [];
    //   for (let r = 0; r < arr.length; r++) {
    //     let item = arr[r];
    //     if (fI == f && rI == r) {
    //       item = {...item, renter:name};
    //     }
    //     newArr.push(item);
    //   }
    //   newRooms.push(newArr);
    // }
    //setRooms(newRooms);
    setName("");
    setLog(`Rented ${roomID} to ${_name}!`)
  }

  return (
    <form className="ExpressRental">
      <p>Express Rental</p>
      <input type="text" placeholder="Name of Renter" value={name} onChange={(event) => {setName(event.target.value)}}/>
      <br/>
      <div className="express-button">
        <label>Room {roomID}, Price ${price}</label>
        <button onClick={handleClick}>Express Checkout</button> 
      </div>
      <label>{log}</label>
    </form>
  )
}

ExpressRental.propTypes = {

}

export default ExpressRental

