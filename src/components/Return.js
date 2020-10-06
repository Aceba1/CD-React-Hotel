import React, { useContext } from 'react'
import { RoomsContext } from '../contexts/RoomsContext'
import filterRooms from '../utils/filterRooms';
import RoomsList from './RoomsList';

export default function Return() {
  const {rooms, setRooms} = useContext(RoomsContext);
  const filter = filterRooms(rooms, (room) => {return room.renter && room.renter != ""})
  
  return (
    <div className="Return page">
      <label>Return a room: </label>
      {
        filter ? (
          <>
          <button className="express-button">Express Checkout</button> 
          <RoomsList items={filter}/>
          </>
        ) : (
          <label>No rooms available!</label>
        )

      }
    </div>
  )
}
