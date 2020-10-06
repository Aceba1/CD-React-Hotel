import React, { createContext, useEffect, useState } from 'react'

export const RoomsContext = createContext();

function roomPrice(floor, room) {
  // Price: ($50 x floorNum) + ($10 x roomNum - 10$) + ($45)
  return (50 * floor) + (10 * room) + 35; 
}

function generateRooms(floors, rooms) {
  let result = []
  for (let f = 1; f <= floors; f++) {
    let arr = [];
    for (let r = 1; r <= rooms; r++) {
      arr.push({
        room: f*100+r, 
        renter: null,
        price: roomPrice(f, r) 
      });
    }
    result.push(arr);
  }
  return result;
}

export default function RoomsContextProvider(props) {
  const [rooms, setRooms] = useState(() => {
    return JSON.parse(localStorage.getItem("rooms")) ?? generateRooms(4, 4);
  });

  useEffect(() => {
    localStorage.setItem("rooms", JSON.stringify(rooms));
  }, [rooms])


  return (
    <RoomsContext.Provider value={{rooms:rooms, setRooms:setRooms}}>
      {props.children}
    </RoomsContext.Provider>
  )
}
