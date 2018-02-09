import React, { Component } from 'react';
import logo from '../logo.svg';
import './css/Entry.css';
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

class Entry extends Component {
  state = {
    email: {}
  };
  componentDidMount() {
    console.log('Entry on');
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
        <div className="entryParagraph">
          <h2>
            Miracle Makeup is making a miracle makeup happen every month! 
            <br/>
            Tell us what sets you apart, and why you should should be our next
            winner!
          </h2>
        </div>
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
              className="noteInput"
              cols="150"
              rows="15"
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

export default Entry;
