import './App.css';

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import cs from 'classnames';

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

export default class App extends Component {
    state = {
        activeRoute: 'home'
    }

    render() {
        return (
            <Router>
                <div className="container col-4 text-center">
                    <nav>
                        <NavLink activeClassName="active" exact to="/">Home</NavLink>
                        <NavLink activeClassName="active" exact to='/about'>About</NavLink>
                        <NavLink activeClassName="active" exact to='/contact'>Contact</NavLink>
                    </nav>

                    <main>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                    </main>
                </div>
            </Router>
        );
    }
}
