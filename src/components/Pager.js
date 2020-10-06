import React, { useState } from 'react'
import NavBar from './NavBar'
import Rental from './Rental'
import Return from './Return'

export default function Pager() {
  const [showReturn, setPage] = useState(false)
  return (
    <div>
      <NavBar page={showReturn} setPage={setPage} />
      {
        !showReturn ? 
        (<Rental/>) : 
        (<Return/>)
      }
    </div>
  )
}
