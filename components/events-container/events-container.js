import React from 'react';
import Modal from '../modal/modal';
import Event from '../event/event';
require('./events-container.scss');

export default class EventsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventClicked: undefined
    }

    this.closeModal = this.closeModal.bind(this);
    this.eventClicked = this.eventClicked.bind(this);
  }

  eventClicked = (that) => {
    console.log("Clicked on this", that);
    this.setState({
      eventClicked: that
    })
  }

  closeModal() {
    this.setState({
      eventClicked: undefined
    })
  }

  render() {

    const {
      events
    } = this.props;

    return (
      <React.Fragment>
        <header className="header">
          <h1>Sign up for one of our fantastic events!</h1>
        </header>
        <section className="events-wrapper">
          {Object.keys(events).map(key => {
            return (
              <Event event={events[key]} eventClicked={this.eventClicked} />
            )
          })}

          {this.state.eventClicked && <Modal selectedEvent={this.state.eventClicked} closeModal={this.closeModal} />}
        </section>
      </React.Fragment>
    )
  }
}
