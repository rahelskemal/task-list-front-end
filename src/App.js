import React, {useState, useEffect} from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';
import NewTaskForm from './components/NewTaskForm.js';
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
  const url = "https://task-list-api-c17.herokuapp.com/"
  const getAllTasksAPI = () => {
    return axios.get(`${url}tasks`)
    .then(response => {
      return response.data;
    })
    .catch (error => {
      console.log(error.data);
    });
  };


  const markComplete = (markType,id) => {
    return axios.patch(`${url}tasks/${id}/${markType}`)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch (error => {
      console.log(error.data);
    });
  };

  const deleteTaskApi = (id) => {
    return axios.delete(`${url}tasks/${id}`)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch (error => {
      console.log(error.data);
    });
  };

  const deleteTask = (id) => {
    setTask((taskData) =>
      taskData.filter((task) => {
        return task.id != id;
      })
    );
    deleteTaskApi(id);
  };


  useEffect(() => {
    getAllTasksAPI()
   .then(tasks => {
    setTask(tasks);
    });
  }, []);
  

  const [tasks, setTask] = useState(TASKS)

  const updateTask = (updatedTask) => {
    console.log("updateTask", updatedTask);
    let newTasks 
    newTasks = tasks.map(task =>{
      if (task.id === updatedTask.id){ 
        task = updatedTask;
        const completed = task.isComplete
        if (completed){
          markComplete('mark_complete',task.id)
        } else {
          markComplete('mark_incomplete',task.id)
        }
        // console.log(task.isComplete)
      }
      return task;
      }
    );
    // console.log(newTasks);
    setTask(newTasks);

  };

  // const addTaskData = newTask => {
  //   const newTaskList = [...tasks];
  //   const nextId = Math.max(...newStudentList.map(student => student.id)) + 1;

  // }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={tasks} updateTask = {updateTask} deleteTask = {deleteTask}/>}</div>
        {/* <h1>hi</h1> */}
        {/* <div>{<NewTaskForm/>}</div> */}
      </main>
    </div>
  );
};

export default App;
