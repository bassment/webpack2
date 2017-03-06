import './App.css';

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Redirect} from 'react-router-dom';
import cs from 'classnames';
import { TransitionMotion, spring } from 'react-motion'

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
    // VIEWS
    FadeRoute = ({ component: Component, ...rest }) => {
        const willLeave = () => ({ zIndex: 1, opacity: spring(0, {stiffness: 115, damping: 35}) })

        return (
            <Route {...rest} children={({ location, match }) => (
                <TransitionMotion
                    willLeave={willLeave}
                    styles={match ? [ {
                        key: location.pathname,
                        style: { opacity: 1 },
                        data: match
                    } ] : []}
                >
                    {interpolatedStyles => (
                        <div>
                            {interpolatedStyles.map(config => (
                                <div
                                    key={config.key}
                                    style={{ ...styles.fill, ...config.style }}
                                >
                                    <Component {...config.data}/>
                                </div>
                            ))}
                        </div>
                    )}
                </TransitionMotion>
            )}/>
        );
    };
    //

    render() {
        const {FadeRoute} = this;

        return (
            <Router>
                <div style={styles.fill} className="container col-4 text-center">
                    <nav>
                        <NavLink activeClassName="active" exact to="/home">Home</NavLink>
                        <NavLink activeClassName="active" exact to='/about'>About</NavLink>
                        <NavLink activeClassName="active" exact to='/contact'>Contact</NavLink>
                    </nav>

                    <main>
                        <FadeRoute path="/home" component={Home}/>
                        <FadeRoute path="/about" component={About}/>
                        <FadeRoute path="/contact" component={Contact}/>
                        
                        <Route exact path="/" render={() => (
                            <Redirect to="/home"/>
                        )}/>
                    </main>
                </div>
            </Router>
        );
    }
}

const styles = {}

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: '50px',
  bottom: 0
}
