import React from 'react'
import PropTypes from 'prop-types'

function RoomItem(props) {
  return (
    <div className="room-item">
      {props.room.room}      
    </div>
  )
}

RoomItem.propTypes = {

}

export default RoomItem

