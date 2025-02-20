import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

function App() {
  const element = <h1 className="title">Hello React!</h1>

  // 생성한 컴포넌트는 대문자로 정의한다.
  return (
    <>
      {element}
      <>
        <h4>클래스 기반</h4>
        <ClassComponent />
      </>
      <br />
      <>
        <h4> 함수 기반</h4>
        <FunctionComponent />
      </>
    </>
  );
}

export default App;
