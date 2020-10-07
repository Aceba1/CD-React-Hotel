import React from 'react'
import PropTypes from 'prop-types';

function Modal(props) {
  return (
    <div className="modal-background" onClick={props.hide}>
      <div className="modal-content" onClick={(e) => {e.stopPropagation()}}>
        {props.children}
      </div>
    </div>
  )
}

Modal.props = {
  hide: PropTypes.func
}

export default Modal

