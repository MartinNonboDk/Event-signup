import React from 'react';
require('./event.scss');

export default class Event extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {
      event,
      eventClicked
    } = this.props;

    return (
      <section className="event" onClick={() => eventClicked(event)}>
        <img src={event.thumbnail} />
        <article className="event-info">
          <h2>{event.title}</h2>
          <p className="label"><span>Genre:</span> {event.genre}</p>
          <p className="short-info">{event.shortinfo}</p>
          <p className="label"><span>Date: </span>{event.date}</p>
          <p className="label"><span>Audience:</span> {event.audience}</p>
        </article>
      </section>
    )
  }
}
