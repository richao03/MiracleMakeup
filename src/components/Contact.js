import React, { Component } from 'react';
import logo from '../logo.svg';
import './css/Contact.css';
import twitter from '../img/twitter.png';
import instagram from '../img/instagram.jpg';
import facebook from '../img/facebook.svg';
import anime from 'animejs';
import { topAnimation } from '../animation.js';
import validator from 'validator';

const required = value => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }
};

const email = value => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`;
  }
};

class Contact extends Component {
  state = {
    email: {}
  };
  componentDidMount() {
    console.log('Contact on');
  }

  handleEmail(event) {
    let newobj = this.state.email;
    this.setState({ ...email, address: event.target.value });
  }
  handleName(event) {
    let newobj = this.state.email;
    this.setState({ ...email, Name: event.target.value });
  }
  handleDate(event) {
    let newobj = this.state.email;
    this.setState({ ...email, Date: event.target.value });
  }
  handleNote(event) {
    let newobj = this.state.email;
    this.setState({ ...email, Note: event.target.value });
  }
  sendEmail() {
    console.log(this.state);
  }
  render() {
    return (
      <div className="centered">
        <h2>
          Thanks for noticing us, we would like to put you on notice, that we
          notice you too
        </h2>
        <h3>follow us @</h3>
        <div>
          <img className="socialIcons" src={twitter} />
          <img className="socialIcons" src={facebook} />
          <img className="socialIcons" src={instagram} />
        </div>
        <h3>send us an email! ask us anything! </h3>
        <form className="mailForm">
          Email*
          <label>
            <input
              name="email"
              onChange={this.handleEmail.bind(this)}
              type="text"
              validations={[required, email]}
            />
          </label>
          Your Name*
          <label>
            <input
              name="name"
              onChange={this.handleName.bind(this)}
              validations={[required]}
            />
          </label>
          Event Date (mm/dd/yyyy)
          <label>
            <input
              name="date"
              onChange={this.handleDate.bind(this)}
              validations={[required]}
            />
          </label>
          Mesesage//tell us about your event*
          <label>
            <textarea
              size="45"
              className="noteInput"
              cols="40"
              rows="5"
              name="note"
              onChange={this.handleNote.bind(this)}
              validations={[required]}
            />
          </label>
        </form>
        <button onClick={this.sendEmail.bind(this)}>Click Me </button>
      </div>
    );
  }
}

export default Contact;
