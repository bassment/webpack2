import React from 'react';
import _ from 'lodash';
import moment from 'moment';

const Home = () => <div>
    <h3>{_.join(['Hello', 'Home'], ' ')}</h3>
    <p>{moment().format()}</p>
</div>;

export default Home;
