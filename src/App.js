/*eslint-env es_modules */
import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import './App.css';
const NavBar = () => (
  <div className="navbar">
    <Link to="/">Course</Link>
    <Link to="/topics">Topics</Link>
  </div>
);
const Template = ({ title }) => (
  <div>
    <NavBar />
    <p className="page-info">
      This is the {title} page.
    </p>
  </div>
);
const Topics = (props) => (
  <Template title="Topics"/>
);
const Course = (props) => (
  <Template title="Course"/>
);
class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Course}/>
        <Route path="/topics" component={Topics}/>
      </Router>
    );
  }
}
export default App;