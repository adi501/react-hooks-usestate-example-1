import React, { useState } from "react";

function ReactStateHookEXP1() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>React State Hook EXP1</div>

      <div>{count}</div>

      <div>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>
    </>
  );
}

export default ReactStateHookEXP1;
