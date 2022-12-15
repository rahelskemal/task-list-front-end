import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';
// const studentComponents = props.students.map((student, index) => {

const TaskList = (props) => {
  const getTaskListJSX = (props) => {
    return props.tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          updateTask={props.updateTask}
        />
      );
    });
  };
  return <ul className="tasks__list no-bullet">{getTaskListJSX(props)}</ul>;
//   console.log(props)
//   return <h1>task_list</h1>
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
  updateTask: PropTypes.func.isRequired
};

export default TaskList;
