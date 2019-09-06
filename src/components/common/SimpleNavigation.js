import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.css'

class SimpleNavigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav>
          <ul className='noDot'>
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
        </nav>
      </div>
    )
  };
}

export default SimpleNavigation;
