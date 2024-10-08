import { useState, useEffect } from 'react';

function HookUseState() {
  const [count, setCount] = useState({
    num: 1,
    id: 'abcd'
  });

  //below function adds +1 in the count.

  function handleAdd1() {
    setCount(count + 1);
    //  the second setCount dose not has any vlaue
    // so it won't affect the UI immediately.
    // but it does affect the UI after the first render.
    // so it's a good practice to always use the second setCount in a callback function.
  }

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
    </div>
  );
}

export default HookUseState;
