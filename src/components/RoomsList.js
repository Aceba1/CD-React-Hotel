import React from 'react'
import PropTypes from 'prop-types'
import RoomItem from './RoomItem'
import FloorItem from './FloorItem'

/**
 * 
 * @param {{items: any[]}} props 
 */
function RoomsList(props) {
  return (
    <div>
      {
        props.items.map((floor, index) => {
          return (
            <FloorItem key={index} floor={floor} />
          )
        })
      }
    </div>
  )
}

RoomsList.propTypes = {
  items: PropTypes.array.isRequired
}

export default RoomsList

