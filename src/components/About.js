import React from 'react';
import _ from 'lodash';
import moment from 'moment';

const About = () => <div>
    <h1 style={{color: '#6D4C41'}}>{_.join(['Hello', 'About'], ' ')}</h1>
    <p>{moment().format()}</p>
    <h1>No form</h1>
</div>;

export default About;
