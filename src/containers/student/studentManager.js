import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/studentActions';
import StudentList from '../../components/student/studentList';

class StudentManager extends React.Component {
  constructor(props, context) {
    super(props, context);
  };

  componentDidMount() {
    this.props.dispatch(actions.loadStudents());
  }

  render() {
    const { students } = this.props;
    return (
      <div>
        <StudentList students={students} />
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    students: state.students
  }
}

export default connect(mapStateToProps)(StudentManager);
