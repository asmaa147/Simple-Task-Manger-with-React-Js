import React from 'react'
import Task from './Task';

const TaskList = ({ StatusTasks, status }) => {

    return (
        <div class="card col-3 p-0" style={{minHeight : '200px'}}>
            <div className='card-header text-center fw-bold'> {status} </div>
            {
                StatusTasks && StatusTasks.map((taskData, indx) => {

                    return (
                        <Task key={indx} taskData={taskData} />
                    )
                })
            }
        </div>
    )
}

export default TaskList