import { connect } from 'react-redux';
import Team from './Team';
import loadTeamData from '../../../store/actions/loadTeamData/loadTeamData';

const mapStateToProps = (state) => ({
	team: state.team,
});

const mapDispatchToProps = (dispatch) => ({
	loadTeamData: () => dispatch(loadTeamData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);
