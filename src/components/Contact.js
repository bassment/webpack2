import React from 'react';
import _ from 'lodash';
import moment from 'moment';

const Contact = () => <div>
    <h3>{_.join(['Hello', 'Contact'], ' ')}</h3>
    <p>{moment().format()}</p>
</div>;

export default Contact;
