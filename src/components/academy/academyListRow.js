import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

class AcademyListRow extends PureComponent {
  render() {
    const academy = this.props.academy;
    return (
      <div className='row'>
        <div className='col-sm-1'>{academy.academyId}</div>
        <div className='col-md-3'>{academy.name}</div>
        <div className='col-md-3'>{academy.description}</div>
      </div>
    )
  }
}

AcademyListRow.propTypes = {
  academy: PropTypes.object.isRequired
};

export default AcademyListRow;
