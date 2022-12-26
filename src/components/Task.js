import { deleteTask, editTask } from '../actions';
import { useDispatch, useSelector } from 'react-redux'

import React from 'react'

const Task = ({ taskData }) => {

    const TASKS_STATUS = useSelector(state => state.TASKS_STATUS);

    const dispatch = useDispatch();

    const handleStatusChange = (e) => {
        dispatch(editTask(taskData.id, e.target.value));
    }
    const handleRemoveTask = () => {
        dispatch(deleteTask(taskData.id));
    }

    return (
        <>
            <div class="p-2 mb-2">
                <select className='mb-2'
                    defaultValue={taskData.status}
                    onChange={handleStatusChange}
                >
                    {
                        TASKS_STATUS.map((status, indx) => {
                            return (
                                <option key={indx} value={status} > {status} </option>
                            )
                        })
                    }
                </select>
                <h5 class="card-title" style={{ color: 'blue' }}> {taskData.title} </h5>
                <p class="card-text"> {taskData.description} </p>
                <button className='btn btn-danger' onClick={handleRemoveTask}> Remove </button>
            </div>
        </>
    )
}

export default Task