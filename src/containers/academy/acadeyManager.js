import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/academyActions';
import AcademyList from '../../components/academy/academyList';

class AcademyManager extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.dispatch(actions.loadAcademies());
  }

  render() {
    const { academies } = this.props;
    return (
      <div>
        <AcademyList academies={academies} />
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    academies: state.academies
  }
}

export default connect(mapStateToProps)(AcademyManager);
