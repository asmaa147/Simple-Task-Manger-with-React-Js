import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./types"

export const editTask = (id, updatedStatus = '') => {
    return {
        type: EDIT_TASK,
        payload: {
            id,
            updatedStatus
        }
    }
}

export const addTask = (newTaskDetails = {}) => {
    return {
        type: ADD_TASK,
        payload: newTaskDetails
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: {
            id
        }
    }
}