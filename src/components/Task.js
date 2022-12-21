import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  const buttonClass = props.isComplete ? '--completed' : '';

  const onCompletedButtonClicked = () => {
    const updatedTask = {
        id: props.id,
        title: props.title,
        isComplete: !props.isComplete,
    };
    props.updateTask(updatedTask);
  };

  const onDeleteButtonClicked = () => { 
    props.deleteTask(props.id)
  }
  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle${buttonClass}`}
        onClick={onCompletedButtonClicked}
      >
        {props.title}
      </button>
      <button className="tasks__item__remove button" onClick={onDeleteButtonClicked}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default Task;


