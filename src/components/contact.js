import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className='contact section' id='Contact'>
        <div className='container'>
          <div className='section-head'>
            <h2 className='text-center'>Contact</h2>
            <h4 className='message'>
              Send me a message, I'd love to hear from you!
            </h4>
          </div>
          <form
            action={`https://formspree.io/f/xnqoevwb`}
            name='contact'
            method='POST'
            data-netlify='true'
          >
            <div>
              <label>
                Your Name: <input type='text' name='name' required />
              </label>
            </div>
            <div>
              <label>
                Your Email: <input type='email' name='email' required />
              </label>
            </div>
            <div>
              <label>
                Message: <textarea name='message' required></textarea>
              </label>
            </div>
            <div>
              <button type='submit'>Send</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
