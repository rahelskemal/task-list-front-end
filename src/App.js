import React, {useState} from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];


const App = () => {
  const [tasks, setTask] = useState(TASKS)

  const updateTask = (updatedTask) => {
    console.log("updateTask", updatedTask);
    let newTasks 
    newTasks = tasks.map(task =>{
      if (task.id === updatedTask.id){ 
        task = updatedTask;
        console.log(task.isComplete)
      }
      return task;
      }
    );
    console.log(newTasks);
    setTask(newTasks);

  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={tasks} updateTask = {updateTask} />}</div>
      </main>
    </div>
  );
};

export default App;
