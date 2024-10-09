import { useState, useEffect, useRef } from 'react';

function HookUseRef() {
  const [count, setCount] = useState({
    num: 1,
    id: 'abcd'
  });

  const renderRef = useRef(0);
  useEffect(() => {
    console.log('Component rendered', renderRef.current);
    renderRef.current = renderRef.current + 1;
  });

  // function to set count immediately in the same function.
  // we can use below approach when you have to manulate the state immediately after set and before the render.
  function handleAdd() {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1
      };
    });
    // setCount(prev);
  }
  function handleSubstract() {
    if (count.num === 0) return;
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num - 1
      };
    });
  }

  return (
    <div className='App'>
      <p> Use State Hook</p>
      <button onClick={() => handleSubstract()}>-</button>
      <span>{count.num}</span>
      <button
        onClick={() => {
          handleAdd();
        }}
      >
        +
      </button>
      <p>{renderRef.current}</p>
    </div>
  );
}

export default HookUseRef;
