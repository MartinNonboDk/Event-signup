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
    //Binding functions to this so we can parse them to child components
    this.closeModal = this.closeModal.bind(this);
    this.eventClicked = this.eventClicked.bind(this);
  }

  eventClicked = (that) => {
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

    //Getting different audiences for filtering
    const audienceTypes = [];
    Object.keys(events).map(key => {
      if(!audienceTypes.includes(events[key].audience)) {
        audienceTypes.push(events[key].audience);
      }    
    });

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
