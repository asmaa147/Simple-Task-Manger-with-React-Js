import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../actions/types";

const initialState = []

const TASKS_STATUS = ['To-Do', 'In-Progress', 'Completed'];


const tasks = (state = { tasks: initialState, TASKS_STATUS: TASKS_STATUS }, action) => {
    const { payload } = action;

    switch (action.type) {

        case EDIT_TASK: {
            const newState = {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === payload.id) {
                        task.status = payload.updatedStatus
                    }
                    return task;
                })
            }
            return newState;
        }
        case ADD_TASK: {
            const newState = {
                ...state,
                tasks: [...state.tasks , payload]
            }
            return newState;
        }
        case DELETE_TASK: {
            const newState = {
                ...state,
                tasks: state.tasks.filter(task => task.id !== payload.id)
            }
            return newState;
        }
        default:
            return state;

    }

}

export default tasks;