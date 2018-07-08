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
    //First create a dummy option that can't be selected
    filterOptions.push(<option hidden key="-1">Please choose...</option>);

    //Then add the actual filtering options to options tags
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