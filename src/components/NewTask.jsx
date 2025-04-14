import { useState } from 'react';  

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');
  const [errorMessage, setErrorMessage] = useState('');  

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === '') {
      setErrorMessage('You must write something');
    } else {
      onAdd(enteredTask);
      setEnteredTask('');
      setErrorMessage('');
    }
  }

  return (
    <div className="flex flex-col items-start gap-4">
      <input 
        type="text" 
        className="w-64 px-2 py-1 rounded-sm bg-stone-200" 
        onChange={handleChange} 
        value={enteredTask}
      />
      <button 
        className="bg-blue-500 text-white hover:bg-blue-700 hover:scale-105 transition-all duration-300 rounded-lg px-4 py-2" 
        onClick={handleClick}
      >
        Add Task
      </button>
      
      {/* Display error message if there's one */}
      {errorMessage && (
        <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
      )}
    </div>
  );
}
