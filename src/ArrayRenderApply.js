import {useState} from "react";

export default function ArrayRenderApply () {
  const [myList, setMyList] = useState([]);
  const [id, setId] = useState(1);
  const [goal, setGoal] = useState("");

  const listRender = myList.length !== 0 ?
    myList.map((item) =>
    <li key={item.id} onContextMenu={(e) => {
      e.preventDefault();
      delMyList(item.id);
    }}>
      {item.goal}
    </li>
    ) : <>목표가 없어요.. 추가해주세요</>;

  function updateMyList() {
    // 리액트에서는 직접적으로 DOM 제어를 하지 않는다.
    // const myGoal = document.querySelector("#myGoal").value;
    // document.querySelector("#myGoal").value = "";

    // 리액트는 불변성이 중요하기에 새로운 배열을 반환한다.
    setMyList([...myList, {id: id, goal: goal}]);
    setId(id + 1);
    setGoal("");
  }

  function delMyList(id) {
    setMyList(myList.filter(e => e.id !== id));
  }

  return (
    <>
      <h4>나의 목표는..</h4>
      {listRender}
      <div>
        {/*<input id={"myGoal"} type={"text"} placeholder={"목표를 입력해주세요"} />*/}
        <input value={goal} onChange={e => setGoal(e.target.value)} placeholder={"목표를 입력해주세요"} />
        <button onClick={updateMyList}>요소 추가하기</button>
      </div>
    </>
  )
}
