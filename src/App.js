import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react';
import TaskPage from './components/TaskPage/TaskPage'

function App(props) {
  return (
    <div className="App jumbotron">
      <TaskPage tasks={props.tasks}  />
    </div>
  );
}

export default App;
