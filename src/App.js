import { useState, useEffect } from 'react';
import './App.css';
import HookUseEccect from './allHooks/HookUseEffect';
import HookUseState from './allHooks/HookUseState';
import HookUseMemo from './allHooks/HookUseMemo';
import HookUseCallback from './allHooks/HookUseCallBack';
import HookUseRef from './allHooks/HookUseRef';
import HookUseContext from './allHooks/HookUseContext';

function App() {
  return (
    <div className='App'>
      {/* <HookUseState />
      <HookUseEccect />
      <HookUseMemo />
      <HookUseCallback /> */}
      {/* <HookUseRef /> */}
      <HookUseContext />
    </div>
  );
}

export default App;
