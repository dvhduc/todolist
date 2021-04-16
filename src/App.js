import React, { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import Control from './components/Control';
import TaskList from './components/TaskList';

function App() {

  const [task, setTask] = useState([])
  const [isDisplayForm, setisDisplayForm] = useState(false)

  function onGenerateData(){
    var tasks = [
      {
        id: generateID() ,
        name: 'Học lập trình',
        status: true
      },
      {
        id:generateID() ,
        name: 'Đá bóng',
        status: false
      },
      {
        id:generateID() ,
        name: 'Đi chơi',
        status: true
      }
    ];
    
    setTask(tasks)
    localStorage.setItem('test',JSON.stringify(tasks))
  }

  function s4(){
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }

  function generateID(){
    return s4()+ s4() + '-' +s4();
  }

  useEffect(() => {   
    if(localStorage && localStorage.getItem('test')){
      var data = JSON.parse(localStorage.getItem('test'));
      setTask(data);
    }
  },[]) 

  var elmTaskForm = isDisplayForm ? <TaskForm onClose={onClose}/> : '';

  function onToggleForm(){
    setisDisplayForm(!isDisplayForm);
  }

  function onClose(){
    setisDisplayForm(false);
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
        <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
          <button type="button" className="btn btn-primary" 
          onClick={onToggleForm}
          ><i className="fas fa-plus mr-2"></i>Thêm công việc</button>

          <button type="button" className="btn btn-danger ml-3" 
            onClick={onGenerateData}
          >
            <i className="fas fa-plus mr-2"></i>Generate Data</button>
          <Control />
          <TaskList tasks={task}/>
        </div>
      </div>
    </div>
  );
}
export default App;
