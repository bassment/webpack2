import React from 'react';
import _ from 'lodash';
import moment from 'moment';

const About = () => <div>
    <h3>{_.join(['Hello', 'About'], ' ')}</h3>
    <p>{moment().format()}</p>
</div>;

export default About;
