import React, { useEffect, useState } from 'react';

function HookUseEccect() {
  const [count, setCount] = useState({
    num: 1,
    id: 'abcd'
  });

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

  // useEffect
  useEffect(() => {
    console.log('I Ran useEffect');
  }, []);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });
    console.log('I Ran useEffect');
    return () => {
      console.log('inside return');
    };
  }, [count]);

  return (
    <div className='App'>
      <p> Use Effect Hook</p>
      <button onClick={() => handleSubstract()}>-</button>
      <span>{count.num}</span>
      <span>{count.id}</span>

      <button
        onClick={() => {
          handleAdd();
        }}
      >
        +
      </button>
      <p>{screenWidth}</p>
    </div>
  );
}

export default HookUseEccect;
