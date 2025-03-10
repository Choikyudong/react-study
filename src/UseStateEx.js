import {useState} from "react";

export default function UseStateEx() {
  const [count, setCount] = useState(0);
  return (
      <>
        <h3>현재 count : {count}</h3>
        <button onClick={() => setCount(count + 1)}>값 1 증가</button>
      </>
  )
}