import React, { useState } from 'react'
import NavBar from './NavBar'
import RentalPage from './RentalPage'
import ReturnPage from './ReturnPage'

export default function Pager() {
  const [showReturn, setPage] = useState(false)
  return (
    <div>
      <NavBar page={showReturn} setPage={setPage} />
      {
        !showReturn ? 
        (<RentalPage/>) : 
        (<ReturnPage/>)
      }
    </div>
  )
}
