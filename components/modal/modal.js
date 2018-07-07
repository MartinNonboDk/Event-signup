import React from 'react';
require('./modal.scss');

export default class Modal extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {
      selectedEvent,
      closeModal
    } = this.props;

    return (
      <React.Fragment>
        <div className="modal">
          <span className="close" onClick={() => closeModal()}> X </span>
          <div className="modal-content">
            <h2>{selectedEvent.title}</h2>
            <img src={selectedEvent.image} />
          </div>
        </div>
        <div className="overlay" onClick={() => closeModal()}></div>
      </React.Fragment>
    )
  }
}