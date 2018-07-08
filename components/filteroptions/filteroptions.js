import React from 'react';

export default class Filteroptions extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {
      filters,
    } = this.props;

    const filterOptions = [];
    filterOptions.push(<option hidden key="-1">Please choose...</option>);
    for (let i = 0; i < filters.length; i++) {
      filterOptions.push(
        <option key={filters[i]}>
          {filters[i]}
        </option>
      )
    }

    return (
      <React.Fragment>
        {filterOptions}
      </React.Fragment>
    )
  }
}