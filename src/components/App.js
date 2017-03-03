import './App.css';

import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Load components asynchroniusly
function asyncComponent(getComponent) {
    return class AsyncComponent extends React.Component {
        static Component = null;
        state = {
            Component: AsyncComponent.Component
        };

        componentWillMount() {
            if (!this.state.Component) {
                getComponent().then(Component => {
                    AsyncComponent.Component = Component;
                    this.setState({Component});
                })
            }
        }
        render() {
            const {Component} = this.state;
            if (Component) {
                return <Component {...this.props}/>;
            }
            return null;
        }
    }
}

const Home = asyncComponent(() => System.import ('./Home.js').then(module => module.default));
const About = asyncComponent(() => System.import ('./About.js').then(module => module.default));
const Contact = asyncComponent(() => System.import ('./Contact.js').then(module => module.default));

const App = ({children}) => <Router>
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </nav>

        <h1>Page Content:</h1>

        <main>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        </main>
    </div>
</Router>;

export default App;
