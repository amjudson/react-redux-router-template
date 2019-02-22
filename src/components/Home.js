import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Home extends PureComponent {
  render() {
    return (
      <div className="jumbotron">
        <h3>Marks Martial Arts System</h3>
        <p>Using React to produce a responsive and interactive Martial Arts Studio Manager.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default Home;
