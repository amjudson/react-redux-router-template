import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class StudentListRow extends PureComponent {
  constructor(props) {
    super(props);
  }

  getRankDesc(rankId) {
    let filteredRank = {
      rankId: 0,
      abbreviation: '',
      description: '',
      priority: 0,
      grouping: 0,
      academyId: 0
    };

    const filteredRanks = this.props.ranks.filter(r => r.rankId === rankId);
    if (filteredRanks.length > 0) {
      filteredRank = filteredRanks[0];
      return filteredRank.description;
    }

    return 'Rank Not Found';
  }

  render() {
    const { student } = this.props;
    return (
      <div className="row row-detail">
        <div className="col-sm-1 item-detail">{student.studentId}</div>
        <div className="col-sm-2 item-detail">{student.lastName}</div>
        <div className="col-sm-2 item-detail">{student.firstName}</div>
        <div className="col-sm-2 item-detail">{this.getRankDesc(student.rankId)}</div>
      </div>
    );
  }
}

StudentListRow.propTypes = {
  student: PropTypes.object.isRequired,
  ranks: PropTypes.array.isRequired
};

export default StudentListRow;
