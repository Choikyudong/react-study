import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import NamedExport from "./NamedExport";
import {ExportFun1, ExportFun2} from "./ComponentsInFile";
import {Fun1 as MyComp} from "./ComponentsInFile2";
import Test1 from "./ExportDefaultTest";
import ArrowFunction, {ExportArrowFuncion} from "./ArrowFunction";
import Props from "./Props";
import PropsStyle from "./PropsStyle";
import DefaultProps from "./DefaultProps";
import TagProps from "./TagProps";

export default function App() {
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
      <br />
      <>
        <h4>named export</h4>
        <NamedExport />
      </>
      <br />
      <>
        <h4>하나의 파일에 여러개의 컴포넌트</h4>
        <ExportFun1 />
        <ExportFun2 />
      </>
      <br />
      <>
        <h4>모듈 하나만 부르기</h4>
        <MyComp /> {/* as로 컴포넌트 이름 변경 */}
      </>
      <br />
      <>
        <h4>default 적용한 컴포넌트 호출</h4>
        <Test1 /> {/* import를 보면 중괄호({})를 안함*/}
      </>
      <br/>
      <>
        <h4>Arrow Function</h4>
        <ArrowFunction />
        <h6>화살표 함수도 export 바로 가능</h6>
        <ExportArrowFuncion />
      </>
      <br/>
      <>
        <h4>Props는 파라미터랑 같은거임</h4>
        <h1>props는 읽기 객체임!!!!</h1>
        <Props name="바부" />
      </>
      <br/>
      <>
        <h4>Props 이름을 꼭 안써도 됨</h4>
        <PropsStyle name="바부" age="19" />
      </>
      <br/>
      <>
        <h4>props에 default를 넣을 수 있음</h4>
        <DefaultProps  />
      </>
      <br/>
      <>
        <h4>태그 사이의 값으로도 전달 가능함;;</h4>
        <TagProps>헐....</TagProps>
      </>
    </>
  );
}
