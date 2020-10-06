import React, { useContext } from 'react'
import { RoomsContext } from '../contexts/RoomsContext'
import filterRooms from '../utils/filterRooms';
import ExpressRental from './ExpressRental';
import RoomsList from './RoomsList';

export default function Rental() {
  const {rooms, setRooms} = useContext(RoomsContext);

  let leastPrice = null;
  let cheapRoom = null;
  
  const filter = filterRooms(rooms, (room, fI, rI) => {
    const accept = !room.renter || room.renter == "";
    if (accept && (leastPrice===null || room.price < leastPrice)) {
      leastPrice = room.price;
      cheapRoom = {fI, rI, roomID:room.room};
    }
    return accept;
  })
  
  return (
    <div className="Rental page">
      <label>Rent a room: </label>
      {
        filter ? (
          <>
          <ExpressRental items={filter} room={{...cheapRoom, price:leastPrice}}/>
          <RoomsList items={filter}/>
          </>
        ) : (
          <label>No rooms available!</label>
        )

      }
    </div>
  )
}
