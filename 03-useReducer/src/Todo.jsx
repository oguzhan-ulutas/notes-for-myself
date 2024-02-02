import { ACTIONS } from "./Todos";

const Todo = ({ todo, dispatch }) => {
  console.log(todo);
  return (
    <div>
      <span style={{ color: todo.complate ? "#3C0B76" : "#F1244F" }}>
        {todo.name}
      </span>
      <button
        onClick={() => {
          dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: { id: todo.id },
          });
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: { id: todo.id },
          });
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
