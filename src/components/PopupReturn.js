
import React, { useContext, useState } from 'react'
import { RoomsContext } from '../contexts/RoomsContext'
import modifyRoom from '../utils/modifyRoom';
import Modal from './Modal';

export default function PopupReturn(props) {
  const {rooms, setRooms} = useContext(RoomsContext);
  const [log, setLog] = useState("")
  const [name, setName] = useState("")

  const handleReturn = (e) => {
    e.preventDefault();
    const _name = name.trim();
    if (_name === "") return; // Don't log if empty

    if (_name.toLowerCase() === props.room.renter.trim().toLowerCase()) {  
      setRooms(modifyRoom(rooms, props.room.room, {renter: null})); // Set rooms
      props.hide();
    } else {
      setLog("Wrong Name!");
    }
  }

  return (
    <Modal hide={props.hide}>
      <div className="return">
        <p className="title">Return Room {props.room.room}</p>
        <p>Enter the renter's name to proceed</p>
        <form>
          <input type="text" autoFocus value={name} placeholder="Name of Renter" onChange={(e) => {setLog(""); setName(e.target.value);}}></input>
          <button onClick={handleReturn}>Return</button>
        </form>
        <label>{log}</label>
      </div>
    </Modal>
  )
}
