// # Wave 04: Adding a Form

// **Learn Topics: Handling Forms required for this wave**

// In Wave 04 we will add a feature to create a new Task.
// - Create a `NewTaskForm`
// - Submitting a `NewTaskForm` should 
//     - add rendered `Task`s to the `App` and 
//     - trigger a `POST` request to Task List API to create a new `task` in the database.


// import React, { useState } from 'react';

// const NewTaskForm = () => {

//     const [formFields, setFormFields] = useState({
//         task: '',
//     });

//     const onTaskChange = (event) => {
//         console.log('Details about the element that fired the event:', event.target);
//         setFormFields({
//             task: event.target.value
//         })
//     };



//     const onFormSubmit = (event) => {
//       event.preventDefault();

//       props.addTaskCallback({
//         task: formFields.task
//       });

//       setFormFields({
//         task:''
//       })

//     return (
//         <form onSubmit={onFormSubmit}>
//             <div>
//                 <label htmlFor="task">Task:</label>
//                 <input
//                     name="task"
//                     value={formFields.task}
//                     onChange={onTaskChange} />
//             </div>

//             <input
//                 type="submit"
//                 value="Add Task" />
//         </form>
//     );
// };
// }

// export default NewTaskForm;
