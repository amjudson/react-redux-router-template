import React from 'react';
import PropTypes from 'prop-types';
import AcademyListRow from './academyListRow';

class AcademyList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { academies } = this.props;
    return (
      <div className="container-fluid">
        <div className="row row-title">
          <div className="col-sm-1">ID</div>
          <div className="col-md-3">Academy</div>
          <div className="col-md-3">Description</div>
        </div>
        {academies.map(academy =>
          <AcademyListRow key={academy.academyId}
            academy={academy} />
        )}
      </div>
    );
  }
}

AcademyList.propTypes = {
  academies: PropTypes.array.isRequired
};

export default AcademyList;
