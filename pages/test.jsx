import { useReducer } from "react";

const TYPES = {
  CLICKINCREMENT: "increment",
  CLICKDECREMENT: "decrement",
};

function hzhz(state, action) {
  switch (action.type) {
    case TYPES.CLICKINCREMENT:
      return { count: state.count + action.payload };
    case TYPES.CLICKDECREMENT:
      return { count: state.count - action.payload };

    default:
      return {...state}
  }
}

const startState = ({initial}) => ({
  count: 0,
  initial
})

export default function TestPage() {
  let init = 1;
  const [pranic, dispatch] = useReducer(hzhz, { initial: init }, startState);

  function handleClick(typename, value) {
    dispatch({
      type: typename,
      payload: value,
    });
  }
  return (
    <div className="text-2xl text-red-800" >
      <button onClick={() => handleClick(TYPES.CLICKINCREMENT, 1)}> +1</button>
      <button onClick={() => handleClick(TYPES.CLICKINCREMENT, 2)}> +2</button>
      {pranic.count}
      <button onClick={() => handleClick(TYPES.CLICKDECREMENT, 1)}> -1</button>
      <button onClick={() => handleClick(TYPES.CLICKDECREMENT, 2)}> -2</button>
      <button onClick={() => ++init}> HZ</button>
    </div>
  );
}
