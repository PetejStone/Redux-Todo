
export const ADD_TASK = "ADD_TASK";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const DELETE_TASK = "DELETE_TASK";

export const addTask = newTask => {
    console.log(newTask)
    return {
      type: ADD_TASK,
      payload: newTask
    };
  };

  export const toggleComplete = id => {
    
    return {
      type: TOGGLE_COMPLETE,
      payload: id
    };
  };

  export const deleteTask = id => {
    
    return {
      type: DELETE_TASK,
      payload: id
    };
  };