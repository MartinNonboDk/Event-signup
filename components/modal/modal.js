import React from 'react';
import Signup from '../signup/signup';
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
        <section className="modal">
          <span className="close" onClick={() => closeModal()}> X </span>
          <h2>{selectedEvent.title}</h2>
          <div className="modal-content">
            <img src={selectedEvent.image} />
            <div class="info-container">
              <p className="label"><span>Date: </span>{selectedEvent.date}</p>
              <p className="label"><span>Audience:</span> {selectedEvent.audience}</p>
              <p className="label"><span>Genre:</span> {selectedEvent.genre}</p>
            </div>
            <p>{selectedEvent.description}</p>
          </div>
          <Signup />
        </section>
        <div className="overlay" onClick={() => closeModal()}></div>
      </React.Fragment>
    )
  }
}