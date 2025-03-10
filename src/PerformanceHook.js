import {useCallback, useMemo, useState} from "react";

export function PerformanceHook() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  // useMemo로 값을 캐싱할 수 있다.
  const sumWithMemo = useMemo(() => {
    console.log("합계 게산");
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }, [numbers]); // numbers 변경시 재계산

  // useMemo 없이 계산 (비교용), 카운트 증가시에도 호출이 된다..
  // const sumWithoutMemo = () => {
  //   console.log("useMemo 없는 합계 계산 중...");
  //   return numbers.reduce((acc, curr) => acc + curr, 0);
  // };

  // useCallback 없이 함수 정의 (비교용)
  const incrementWithoutCallback = () => {
    setCount(count + 1);
    console.log("incrementWithoutCallback 호출됨");
  };

  // useCallback으로 함수 메모이제이션
  const incrementWithCallback = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
    console.log("incrementWithCallback 호출됨");
  }, []); // 의존성 배열이 빈 경우: 함수가 절대 재생성되지 않음

  return (
    <>
      <div>
        <h1>useMemo</h1>
        <p>숫자 배열 : {numbers.join(", ")}</p>
        <p>memo를 이용한 합계 : {sumWithMemo}</p>
        {/*<p>memo를 제거한 합계 : {sumWithoutMemo()}</p>*/}
        <p>카운트 : {count}</p>
        <button onClick={() => setCount(count + 1)}>카운트 증가</button>
        <button onClick={() => setNumbers([...numbers, numbers.length + 1])}>
          숫자 추가
        </button>
      </div>

      <div>
        <h1>useCallBack</h1>
        <p>카운트: {count}</p>
        <p>다른 카운트: {otherCount}</p>
        <button onClick={incrementWithoutCallback}>
          useCallback 없이 증가
        </button>
        <button onClick={incrementWithCallback}>useCallback으로 증가</button>
        <button onClick={() => setOtherCount(otherCount + 1)}>
          다른 카운트 증가
        </button>
      </div>
    </>
  )
}
