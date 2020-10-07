import React, { useContext } from 'react'
import { RoomsContext } from '../contexts/RoomsContext'
import filterRooms from '../utils/filterRooms';
import ExpressRental from './ExpressRental';
import RoomsList from './RoomsList';

export default function RentalPage() {
  const {rooms} = useContext(RoomsContext);

  let expressRoom = null;
  
  const filter = filterRooms(rooms, (room) => {
    const accept = !room.renter || room.renter === "";

    if (accept && (expressRoom === null || room.price < expressRoom.price)) {
      expressRoom = {price:room.price, roomID:room.room};
    }

    return accept;
  })
  
  return (
    <div className="Rental page">
      <h2>CareerDevs Hotel - Rent a Room: </h2>
      {
        filter ? (
          <>
          <ExpressRental items={filter} room={expressRoom}/>
          <RoomsList items={filter}/>
          </>
        ) : (
          <label>No rooms available!</label>
        )

      }
    </div>
  )
}
