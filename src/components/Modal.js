import React from 'react'

function Modal(props) {
  return (
    <div className="modal-background" onClick={props.hide}>
      <div className="modal-content" onClick={(e) => {e.stopPropagation()}}>
        {props.children}
      </div>
    </div>
  )
}

export default Modal

