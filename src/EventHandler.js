export default function EventHandler() {
  return (
      <>
        <button onClick={function handleClick() {
          alert('클릭함');
        }}>클릭 이벤트</button>
      </>
  )
}