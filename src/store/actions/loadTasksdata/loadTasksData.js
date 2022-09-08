import { LOAD_TASKS_DATA, LOAD_TASKS_DATA_FAILED, LOAD_TASKS_DATA_SUCCESS } from '../../constants';

const loadTasksData = () => ({
	type: LOAD_TASKS_DATA,
});

export const loadTasksDataFailed = (error) => ({
	type: LOAD_TASKS_DATA_FAILED,
	payload: error,
});

export const loadTasksDataSuccess = (data) => ({
	type: LOAD_TASKS_DATA_SUCCESS,
	payload: data,
});

export default loadTasksData;
