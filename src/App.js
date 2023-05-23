import React, { useReducer } from 'react';
import './App.css';

// Third we create reducer function and think about switch case
// Destructure action to type, payload
function reducer(state, { type, payload }) {
  switch (type) {
    case 'hello':
      return {
        ...state,
        text: payload
      };
    case 'goodbye':
      return {
        ...state,
        text: payload
      };
    case 'music':
      return {
        ...state,
        text: payload
      };
    case 'change_name':
      return {
        ...state,
        name: payload
      };
  }
  throw Error(`Unknown: ${type}`);
};

// First we create innitialState
const initialState = { name: "Tanawat", text: "GG" };

const App = () => {

  // Second we create useReducer syntax
  const [state, dispatch] = useReducer(reducer, initialState);

  // Any function can call dispatch function

  return (
    <div className='app'>
      <div className='output'>
        <h1>{state.text} {state.name}</h1>
      </div>
      <input
        type="text"
        value={state.name}
        onChange={(e) => dispatch({ type: 'change_name', payload: e.target.value })}
      />
      <div className='button'>
        {/*
            - dispatch will call reducer function and passing argument to it.
            - dispatch's argument strict to type for do something with reducer function.
            - payload is just another name and value to pass into reducer function and use it,
              the point is we use value that place in payload.
        */}
        <button
          onClick={() => dispatch({ type: 'hello', payload: 'hello' })}
        >
          say hello
        </button>
        <button
          onClick={() => dispatch({ type: 'goodbye', payload: 'goodbye' })}
        >
          goodbye
        </button>
        <button
          onClick={() => dispatch({ type: 'music', payload: 'gg' })}
        >
          music
        </button>
      </div>
    </div >
  );
};

export default App;