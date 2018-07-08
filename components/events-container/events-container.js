import React from 'react';
import Modal from '../modal/modal';
import Event from '../event/event';
import Filteroptions from '../filteroptions/filteroptions';
require('./events-container.scss');

export default class EventsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventClicked: undefined,
      events: this.props.events,
      resetFilter: false
    }
    //Binding function to this so we can parse it to child component
    this.closeModal = this.closeModal.bind(this);
  }

  eventClicked = (that) => {
    //Recieves the properties from the selected content piece and stores them in state
    this.setState({
      eventClicked: that
    })
  }

  closeModal() {
    this.setState({
      eventClicked: undefined
    })
  }

  filterEvents(choosenFilter) {
    //Set state to be all events from the entire original list that matches the choosen filter
    this.setState({
      resetFilter: this.state.resetFilter ? !this.state.resetFilter : this.state.resetFilter, 

      //We filter our events to match the choosen filter and update state
      events: this.props.events.filter(event => event.audience === choosenFilter),
      optionsValue: choosenFilter
    })
  }

  clearFilter() {
    // Reset event state to original events parsed from props
    this.setState({
      events: this.props.events,
      resetFilter: true
    })
  }

  render() {
    const originalEvents = this.props.events;
    const {
      events,
      resetFilter
    } = this.state;

    //Getting unique audience properties for filtering
    //Using props.events (originalprops), because original ALL events is stored in and from props
    const audienceTypes = [];
    Object.keys(originalEvents).map(key => {
      if (!audienceTypes.includes(originalEvents[key].audience)) {
        audienceTypes.push(originalEvents[key].audience);
      }
    });
    //For cleaner responsibility, filter functionality could go into seperate component
    //But we share state, so that means we would need to introduce a state container (e.g Redux);
    
    return (
      <React.Fragment>
        <header className="header">
          <h1>Sign up for one of our fantastic events!</h1>
        </header>
        <div className="events-filter">
          <p>Filter by age:</p>
          <select value={this.state.resetFilter ? "Please choose..." : this.state.optionsValue} onChange={(event) => this.filterEvents(event.target.value)}>
            <Filteroptions filters={audienceTypes}/>
          </select>
          <button onClick={() => this.clearFilter()}>Clear filters!</button>
        </div>
        <section className="events-wrapper">

          {Object.keys(events).map(key => {
            return (
              <Event event={events[key]} eventClicked={this.eventClicked} />
            )
          })}

          {this.state.eventClicked &&
            <Modal selectedEvent={this.state.eventClicked} closeModal={this.closeModal} />
          }
        </section>
      </React.Fragment>
    )
  }
}
