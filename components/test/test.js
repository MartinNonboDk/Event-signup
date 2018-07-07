import React from "react";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("We have lift up!");
    return (
      <p>This is a test</p>
    )
  }
}
