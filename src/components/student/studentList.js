import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as rankActions from '../../actions/rankActions';
import * as statusActions from '../../actions/statusActions';
import StudentListRow from './studentListRow';

class StudentList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(statusActions.loadStatuses());
    this.props.dispatch(rankActions.loadRanks());
  }

  render() {
    const { students } = this.props;
    return (
      <div className="container-fluid">
        <div className="row row-title">
          <div className="col-sm-1">ID</div>
          <div className="col-sm-2">Last Name</div>
          <div className="col-sm-2">First Name</div>
          <div className="col-sm-2">Rank</div>
        </div>
        {students.map(student =>
          <StudentListRow key={student.studentId} student={student} ranks={this.props.ranks} statuses={this.props.statuses} />
        )}
      </div>
    );
  }
}

StudentList.propTypes = {
  students: PropTypes.array.isRequired,
  ranks: PropTypes.array.isRequired,
  statuses: PropTypes.array.isRequired
}

function mapStateToProps(state, props) {
  return {
    ranks: state.ranks,
    statuses: state.statuses,
  }
}

export default connect(mapStateToProps)(StudentList);
