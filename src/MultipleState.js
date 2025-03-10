import {useState} from "react";

export default function MultipleState() {
  const [person, updatePerson] = useState({
    name: "홍길동",
    age: 999,
    address: "좋은곳"
  });
  
  function updateData() {
    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const address = document.querySelector("#address").value;
    // state를 직접 수정은 ㄴㄴ
    updatePerson({
      name: name || person.name,
      age: age || person.age,
      address: address || person.address
    })
  }
  
  return (
    <>
      <h1>이름은 {person.name}</h1>
      <h1>나이는 {person.age}</h1>
      <h1>주소는 {person.address}</h1>
      <br/>
      <div>
        데이터 변경하기
        <input id={"name"} type={"text"} placeholder={"name"}/>
        <input id={"age"} type={"text"} placeholder={"age"}/>
        <input id={"address"} type={"text"} placeholder={"address"}/>
        <button onClick={updateData}>변경하기</button>
      </div>
    </>
  )
}