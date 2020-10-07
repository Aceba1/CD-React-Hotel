import React, { useContext, useState } from 'react'
import { RoomsContext } from '../contexts/RoomsContext'
import filterRooms from '../utils/filterRooms';
import PopupReturn from './PopupReturn';
import RoomsList from './RoomsList';

export default function ReturnPage() {
  const [returnRoom, setReturnRoom] = useState(null);
  const {rooms} = useContext(RoomsContext);
  
  const filter = filterRooms(rooms, (room) => {
    return room.renter && room.renter !== ""
  });
  
  const handleClick = (room) => {
    setReturnRoom(room);
    console.log("Returning " + room.room);
  }

  return (
    <div className="Return page">
      <h2>CareerDevs Hotel - Return a Room: </h2>
      {
        filter ? (
          <RoomsList items={filter} onClick={handleClick}/>
        ) : (
          <label>No rooms rented!</label>
        )
      } {
        returnRoom!==null ? <PopupReturn room={returnRoom} hide={() => {setReturnRoom(null)}}/>: null
      }
    </div>
  )
}
