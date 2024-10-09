import { useEffect, useRef } from "react";

function TestPage() {
  const inputRef = useRef(0);
  
  return (
    <>
      <div>{inputRef.current}</div>
      <div onClick={() => {inputRef.current += 1; console.log(inputRef.current);
      }}>+</div>
    </>
  );
}

export { TestPage };
