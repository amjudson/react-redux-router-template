import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
// import '../../css/styles.less.css'
// import '../../css/style.css'

class Navigation extends PureComponent {
  render() {
    return (
      <div className='sidebar'>
        <nav className='sidebar-nav'>
          <ul className='nav'>
            <li className='nav-title'>Martial Art Menu</li>
            <li className='nav-item'>
              <Link to='/' className='nav-link'><i className='nav-icon fas fa-home'></i><span>Home</span></Link>
            </li>
            <li className='nav-item'>
              <Link to='/student' className='nav-link'><i className='nav-icon fas fa-user'></i><span>Student</span></Link>
            </li>
            <li className='nav-item'>
              <Link to='/academy' className='nav-link'><i className='nav-icon fas fa-question'></i><span>Academy</span></Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'><i className='nav-icon fas fa-question'></i><span>About</span></Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'><i className='nav-icon fas fa-question'></i><span>To come Two</span></Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'><i className='nav-icon fas fa-question'></i><span>To come Three</span></Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'><i className='nav-icon fas fa-question'></i><span>To come Four</span></Link>
            </li>
          </ul>
        </nav>
    </div>
    );
  }
}

// Navigation.propTypes = {
//   loading: PropTypes.bool.isRequired
// };

export default Navigation;
