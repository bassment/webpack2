import React from 'react';
import _ from 'lodash';
import moment from 'moment';

const Contact = () => <div>
    <h1 style={{color: '#8E24AA'}}>{_.join(['Hello', 'Contact'], ' ')}</h1>
    <p>{moment().format()}</p>
    <form id="contact_form" action="#" method="POST" encType="multipart/form-data">
        <div className="row">
            <label htmlFor="name">Your name:</label><br />
            <input id="name" className="input" name="name" type="text" value="" size="30" /><br />
        </div>
        <div className="row">
            <label htmlFor="email">Your email:</label><br />
            <input id="email" className="input" name="email" type="text" value="" size="30" /><br />
        </div>
        <div className="row">
            <label htmlFor="message">Your message:</label><br />
            <textarea id="message" className="input" name="message" rows="7" cols="30"></textarea><br />
        </div>
        <input id="submit_button" type="submit" value="Send email" />
    </form>
</div>;

export default Contact;
