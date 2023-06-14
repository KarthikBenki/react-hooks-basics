import { createContext, useReducer } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
let initialState = {
  count: 0,
};
const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };

    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };

    case "reset":
      return {
        ...state,
        count: 0,
      };

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
        <h1>{state.count}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
