import {useReducer, useState} from "react";

export default function ReactHookState () {
  // Hook 사용규칙
  // 1. 반복문, 조건문, 중첩된 함수 등에서 호출 x
  // 2. 리액트 함수 컴포넌트 내에서만 호출

  // 가변적인 상태로 초기값을 설정할 수 있다.
  const [state, setState] = useState();

  // useReducer
  const reducer = (reducCount, action) => {
    if (action.type === "inc") {}
    return {
      count: reducCount.count + 1
    };
  }
  const [reducCount, dispatch] = useReducer(reducer, { count : 0 });
  return (
    <>
      <h1>테스트</h1>
      <h4>reducCount: {reducCount.count}</h4>
      <button onClick={() => dispatch({type: "inc"})}>1 증가</button>
    </>
  )
}