import React from 'react'
import FloorItem from './FloorItem'

function RoomsList(props) {
  return (
    <div>
      {
        props.items.map((floor, index) => {
          return (
            <FloorItem key={index} floor={floor} onClick={props.onClick} />
          )
        })
      }
    </div>
  )
}

export default RoomsList

