import React from 'react';
import _ from 'lodash';
import moment from 'moment';

const Home = () => <div>
    <h1 style={{color: '#00ACC1'}}>{_.join(['Hello', 'Home'], ' ')}</h1>
    <p>{moment().format()}</p>
    <form id="contact_form" action="#" method="POST" encType="multipart/form-data">
        <div className="row">
            <label htmlFor="name">Company:</label><br />
            <input id="name" className="input" name="name" type="text" value="" size="30" /><br />
        </div>
        <div className="row">
            <label htmlFor="email">Position:</label><br />
            <input id="email" className="input" name="email" type="text" value="" size="30" /><br />
        </div>
        <div className="row">
            <label htmlFor="message">Question:</label><br />
            <textarea id="message" className="input" name="message" rows="7" cols="30"></textarea><br />
        </div>
        <input id="submit_button" type="submit" value="Register" />
    </form>
</div>

export default Home;
