import {useEffect, useRef, useState} from "react";

export default function EffectHooks() {

  /**
   * 사이드 이펙트란
   * 컴포넌트가 화면에 렌더링된 후에 외부 시스템과
   * 비동기적으로 처리해야 하는 작업을 마한다.
   */
  const [state, setState] = useState("");
  let ref = useRef(0);
  
  // 빈 배열을 넣을 경우 마운트된 직후에만 실행한다.
  /*useEffect(() => {
    ref.current = ref.current + 1;
    console.log(`useEffect 호출 ${ref.current}`);
  }, []);*/

  // state가 업데이트 될 때마다 실행한다.
  /*useEffect(() => {
    ref.current = ref.current + 1;
    console.log(`useEffect 호출`);
  }, [state]);*/

  // 언마운트(컴포넌트가 DOM에서 제거) 시점에서 cleanUp 함수를 실행 가능하다.
  useEffect(() => {
    ref.current = ref.current + 1;
    console.log(`useEffect 호출`);
    // cleanUp 함수
    return () => {
      // 타이머, 구독 등이 쌓이지 않게하여 메모리 누수 방지
      console.log(`cleanup 함수 실행`);
    }
  }, [state]);

  function handleOnChange(e) {
    setState(e.target.value);
  }

  return (
    <>
      입력 : &nbsp;
      <input value={state} onChange={handleOnChange} />
      <br/>
      입력된 값 : {state}
    </>
  )
}