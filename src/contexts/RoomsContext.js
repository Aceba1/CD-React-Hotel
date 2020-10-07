import React, { createContext, useEffect, useState } from 'react'
import { generateRooms } from '../utils/generateRooms';

export const RoomsContext = createContext();

export default function RoomsContextProvider(props) {
  const [rooms, setRooms] = useState(() => {
    return JSON.parse(localStorage.getItem("rooms")) ?? generateRooms(4, 4);
  });

  useEffect(() => {
    localStorage.setItem("rooms", JSON.stringify(rooms));
  }, [rooms]);


  return (
    <RoomsContext.Provider value={{rooms:rooms, setRooms:setRooms}}>
      {props.children}
    </RoomsContext.Provider>
  )
}
