import { useState, useEffect, useContext } from 'react';
import { HookDemo } from '../Context';
function HookUseContext() {
  //   const [count, setCount] = useState({
  //     num: 1,
  //     id: 'abcd'
  //   });

  const [count, setCount] = useContext(HookDemo);

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
      <p> Use Context Hook</p>
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

export default HookUseContext;
