import { connect } from 'react-redux';
import Tasks from './Tasks';
import loadTasksData from '../../../store/actions/loadTasksdata/loadTasksData';

const mapStateToProps = (state) => ({
	tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
	loadTasksData: () => dispatch(loadTasksData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
