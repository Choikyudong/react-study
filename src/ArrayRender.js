export default function ArrayRender () {
  /*
  * 배열 요소를 렌더링시 "key"가 꼭 있어야 한다.
  * key는 db의 key값(예를들어 pk) 또는 인덱스값으로 지정하자
  * 리액트는 키값으로 추가,제거, 정렬하기에 랜덤한 값은 안됨
  */
  const itemList= [
      "요소1", "요소2", "요소3", "요소4", "요소5",
  ]

  const list = itemList.map((e, index) => <li key={index}>{e}</li>)
  return (
    <>
      <h4>배열 요소 찍어보기</h4>
      <ul>{itemList.map((e, index) => <li key={index}>{e}</li>)}</ul>
      <ul>{list}</ul>
    </>
  )
}
