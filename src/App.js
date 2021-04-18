import React, { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import Control from './components/Control';
import TaskList from './components/TaskList';

function App() {

  const [task, setTask] = useState([]);
  const [onload, setLoad] = useState();
  const [isDisplayForm, setisDisplayForm] = useState(false);
  const [taskEditing, settaskEditing] = useState();



  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  function generateID() {
    return s4() + s4() + '-' + s4();
  }

  useEffect(() => {
    if (localStorage && localStorage.getItem('test')) {
      var data = JSON.parse(localStorage.getItem('test'));

      setTask(data)
    }

  }, [setTask])


  var elmTaskForm = isDisplayForm ?
    <TaskForm onSubmit={onSubmit} onClose={onClose} task={taskEditing} /> : '';

  function onToggleForm() {
    setisDisplayForm(!isDisplayForm);
  }

  function onClose() {
    setisDisplayForm(false);
  }

  function onShow() {
    setisDisplayForm(true);
  }

  function onSubmit(data) {
    if(data.id === ''){
      data.id = generateID();
      task.push(data);
    }
    else {
      var index = findIndex(data.id);
      task[index] = data;
    }
    setLoad(!onload);
    settaskEditing(null);
    localStorage.setItem('test', JSON.stringify(task));
    

  }
  function onUpdateStatus(id) {
    var index = findIndex(id);

    if (index !== -1) {
      task[index].status = !task[index].status;

      setTask(task)
    }
    localStorage.setItem('test', JSON.stringify(task));
    setLoad(!onload);
  }

  function findIndex(id) {
    var result = -1;
    task.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  }

  function onDelete(id) {
    var index = findIndex(id);

    if (index !== -1) {
      task.splice(index, 1);
      setTask(task)
    }
    localStorage.setItem('test', JSON.stringify(task));
    setLoad(!onload);
    onClose();
  }

  function onUpdate(id) {
    var index = findIndex(id);

    var taskEditing = task[index];
    settaskEditing(taskEditing);
    onShow();
  }

  return (
    <div className="container">
      <div className="text-center">
        <h1>Quản lý công việc</h1>
        <hr />
      </div>
      <div className="row">
        <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
          {elmTaskForm}
        </div>
        <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
          <button type="button" className="btn btn-primary"
            onClick={onToggleForm}
          ><i className="fas fa-plus mr-2"></i>Thêm công việc</button>
          <Control />
          <TaskList tasks={task} onUpdateStatus={onUpdateStatus} onDelete={onDelete} onUpdate={onUpdate} />
        </div>
      </div>
    </div>
  );
}
export default App;
