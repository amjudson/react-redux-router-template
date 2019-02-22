import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import '../../css/styles.less.css'
// import '../../css/style.css'

class SimpleNavigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <ul>
            <li>Martial Art Menu</li>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/student'>Student</Link>
            </li>
            <li>
              <Link to='/academy'>Academy</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
      </div>
    )
  };
}

export default SimpleNavigation;
