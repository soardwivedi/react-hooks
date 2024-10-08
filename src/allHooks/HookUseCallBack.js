import { useState, useEffect, useCallback } from 'react';

const Child = ({ setShow, handleChange }) => {
  console.log('Child Component');
  return (
    <>
      <p>{handleChange()}</p>
      <button onClick={() => setShow((prev) => !prev)}>Change</button>
    </>
  );
};

function HookUseCallback() {
  const [count, setCount] = useState({
    num: 1,
    id: 'abcd'
  });
  const [show, setShow] = useState(false);

  const handleChange = () => {
    return count.num * 2;
  };

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
      <p> Use Callback Hook</p>
      <button onClick={() => handleSubstract()}>-</button>
      <span>{count.num}</span>
      {show && <span>{count.id}</span>}
      <button
        onClick={() => {
          handleAdd();
        }}
      >
        +
      </button>
      <Child handleChange={handleChange} setShow={setShow} />
    </div>
  );
}

export default HookUseCallback;
