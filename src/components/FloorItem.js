import React from 'react'
import RoomItem from './RoomItem'

function FloorItem(props) {
  if (props.floor.items.length === 0)
    return null;

  const handleClick = (room) => {
    if (props.onClick)
      props.onClick(room)
  }
  return (
    <div key={props.floor.index} className="floor-item">
      <label>Floor: {props.floor.index+1}</label>
      {
        props.floor.items.map((room, index) => {
          return (
            <RoomItem key={index} room={room} className={(props.onClick)?"clickable":""} onClick={() => {handleClick(room)}}/>
          )
        })
      }
    </div>
  )
}

export default FloorItem

