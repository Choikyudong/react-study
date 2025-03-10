export default function ConditionalRender () {
  return (
    <>
      <IsAvliable isTrue={true} />
      <IsAvliable isTrue={false} />
      <LogicalOper isTrue={true} />
      <LogicalOper />
    </>
  )
}

function IsAvliable({ isTrue }) {
  /* props를 통해 조건을 넘겨 렌더링을 정한다. */
  if (isTrue) {
    return (
      <h1>true입니다.</h1>
    )
  }
  return (
    <h1>false입니다.</h1>
  )
  /* return isTrue ? <h1>true입니다.</h1> : <h1>false입니다.</h1> */
}

function LogicalOper({ isTrue }) {
  return isTrue && <div>false일 경우 렌더링을 안함</div>
}