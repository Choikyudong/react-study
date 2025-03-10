function Example({ message, children }) {
  return (
    <button onClick={() => alert(message)}>{children}</button>
  )
}

function Example2({ onClick }) {
  return (
      <button onClick={onClick}>이벤트도 전달 가능</button>
  )
}

function handleClick() {
  alert('이벤트 전달');
}

export default function EventProps() {
  return (
    <>
      <Example message={"메시지1"}>태그1</Example>
      <Example message={"메시지2"}>태그2</Example>
      <Example2 onClick={handleClick} />
    </>
  )
}
