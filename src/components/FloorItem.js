import React from 'react'
import PropTypes from 'prop-types'
import RoomItem from './RoomItem'

function FloorItem(props) {
  return (
    <div key={props.floor.index} className="floor-item">
      <label>Floor: {props.floor.index+1}</label>
      {
        props.floor.items.map((room, index) => {
          return (
            <RoomItem key={index} room={room}/>
          )
        })
      }
    </div>
  )
}

FloorItem.propTypes = {

}

export default FloorItem

