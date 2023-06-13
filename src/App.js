import { createContext, useReducer } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
let initialState = 0;
const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return state-state;

    default:
      return state;
  }
};

export const CounterContext = createContext(); //will create a context

function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState); //Use Reducer Will take reducer function and initialState
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <h1>{state}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
