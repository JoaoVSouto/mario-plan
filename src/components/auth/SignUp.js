import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { auth } = this.props;

    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <input
              type="text"
              id="firstName"
              className="validate"
              required
              aria-required="true"
              onChange={this.handleChange}
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="lastName"
              className="validate"
              required="required"
              aria-required="true"
              onChange={this.handleChange}
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="input-field">
            <input
              type="email"
              id="email"
              className="validate"
              required="required"
              aria-required="true"
              onChange={this.handleChange}
            />
            <label htmlFor="email">Email</label>
            <span
              className="helper-text"
              data-error="Must be a valid email"
              data-success="Perfect!"
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              id="password"
              className="validate"
              required
              aria-required="true"
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(SignUp);
