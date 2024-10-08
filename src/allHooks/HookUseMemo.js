import { useState, useMemo } from 'react';

function HookUseMemo() {
  const [count, setCount] = useState({
    num: 1,
    id: 'abcd'
  });
  useMemo(() => {}, []);
  const [show, setShow] = useState(false);
  const handleChange = useMemo(() => {
    for (let i = 0; i <= 10000000; i++) {}
    return count.num * 2;
  }, [count]);
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
      <p> Use Memo Hook</p>
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
      <p> {handleChange}</p>
      <button onClick={() => setShow((prev) => !prev)}>Change</button>
    </div>
  );
}

export default HookUseMemo;
