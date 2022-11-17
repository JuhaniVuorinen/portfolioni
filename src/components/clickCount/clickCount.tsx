import React, { useState } from 'react';
import styles from './clickCount.module.scss'
import { useEffect } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
const App = () => {
    useEffect(() => {
        console.log("This effect is called on every render");
    });

    // return..
}
export default Example