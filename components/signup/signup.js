import React from 'react';
require('./signup.scss');

export default class Signup extends React.Component {
  render() {

    return (
      <div className="signup">
        <h4>Sign up to the event</h4>
        <p>Input your details below to signup for the event, you will (should) recieve an email with a confirmation link to complete the signup</p>
        <p className="label signup">First name: </p><input type="text" name="firstname" />
        <p className="label signup">Last name: </p><input type="text" name="lastname" />
        <p className="label signup">Address: </p><input type="text" name="address" />
        <p className="label signup">Zip Code: </p><input type="text" name="zip" />
        <p className="label signup">City: </p><input type="text" name="city" />
        <p className="label signup">Country: </p><input type="text" name="country" />
        <p className="label signup">E-mail: </p><input type="email" name="email" required="true" />
        <button type="button">Submit</button>
      </div>
    )
  }
}