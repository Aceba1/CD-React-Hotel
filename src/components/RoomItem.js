import React from 'react'

function RoomItem(props) {
  const {room, price, renter} = props.room;
  const rented = renter && renter !== "";
  return (
    <div className={"room-item " + props.className} onClick={props.onClick}>
      <div>Room {room}</div>
      <div>${price}{rented ? " - Occupied"/*` - ${renter}` --Not supposed to show renter!--*/:""}</div> 
    </div>
  )
}

export default RoomItem

