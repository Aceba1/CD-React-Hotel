import React from 'react'
import Button from './Button'

function NavBar(props) {
  return (
    <header className="App-header">
      <img src="http://careerdevs.com/wp-content/uploads/2019/02/careerdevs-logo-300x72.png" className="App-logo" alt="logo" />
      <nav>
        <Button text="Rental" className={props.page ? "" : "active"} onClick={()=>{props.setPage(false)}} />
        <Button text="Return" className={props.page ? "active" : ""} onClick={()=>{props.setPage(true)}} />
      </nav>
    </header>
  )
}

export default NavBar

