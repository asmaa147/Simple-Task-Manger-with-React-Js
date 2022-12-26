import './TaskPage.scss';

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import TaskList from '../TaskList';
import { addTask } from '../../actions';

const TaskPage = (props) => {

  const dispatch = useDispatch();

  const TASKS_STATUS = useSelector(state => state.TASKS_STATUS);
  const tasks = useSelector(state => state.tasks)

  const [showcardForm, setShowCardForm] = useState(false);
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');


  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescriptionValue(e.target.value);
  }

  const handleShowingCardForm = () => {
    setShowCardForm(!showcardForm);
  }

  const resetCardForm = () => {
    // To reset form fields.....
    setTitleValue('');
    setDescriptionValue('');
    // To close card form.....
    setShowCardForm(false);
  }

  const handleAddNewTask = (e) => {
    
    if (!titleValue || !descriptionValue) return;
    
    e.preventDefault();
    
    const newTaskDetails = {
      id: Math.random(),
      title: titleValue,
      description: descriptionValue,
      status: TASKS_STATUS[0]
    }
    
    dispatch(addTask(newTaskDetails))

    resetCardForm();
  }


  const renderTasksListComponent = () => {

    return TASKS_STATUS.map((status, index) => {
      const StatusTasks = tasks.filter(task => task.status === status);

      return (
        <TaskList key={index} StatusTasks={StatusTasks} status={status} />
      )
    })

  }

  return (
    <div className='TaskPage__container'>
      <div className='container'>
        <div className='row'>
          <div className='col-2 md-2' >
            <button className='btn btn-success' onClick={handleShowingCardForm}> + </button>
          </div>
          <div className='col-10' >
            <h3> Task Manager </h3>
          </div>
        </div>

      </div>

      {showcardForm &&
        <div className='container cardForm__container'>
          <form>
            <div className="form-group my-2">
              <input type="text" className="form-control" placeholder="Enter Title here....."
                required
                value={titleValue}
                onChange={handleTitleChange} />
            </div>
            <div className="form-group my-2">
              <textarea className="form-control" placeholder="Enter Title here....."
                required
                value={descriptionValue} rows="3"
                onChange={handleDescriptionChange}></textarea>
            </div>
            <button className='btn btn-primary' type='submit' onClick={handleAddNewTask}> Add </button>
          </form>
        </div>
      }

      <div className='row d-flex justify-content-evenly  mt-4' >
        {renderTasksListComponent()}
      </div>
    </div>
  )
}

export default TaskPage