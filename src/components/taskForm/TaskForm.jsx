import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTaskAsync } from '../../store/todoList/todoListActions';

const TaskForm = () => {
  const [newTask, setNewtask] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      createTaskAsync({
        task: newTask,
        status: false,
      })
    );
    setNewtask('');
    console.log(newTask);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Ingrese una tarea'
          value={newTask}
          onChange={event => setNewtask(event.target.value)}
        />
        <button>Crear Tarea</button>
      </form>
    </>
  );
};

export default TaskForm;
