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
import UseStateEx from "./UseStateEx";
import MultipleState from "./MultipleState";
import EventHandler from "./EventHandler";
import EventProps from "./EventProps";
import ConditionalRender from "./ConditionalRender";
import ArrayRender from "./ArrayRender";
import ArrayRenderApply from "./ArrayRenderApply";
import ReactHookState from "./ReactHookState";
import {PropContext, PropDrilling} from "./PropDrilling";
import MyContext from "./MyContext";
import RefHooks from "./RefHooks";
import EffectHooks from "./EffectHooks";
import {PerformanceHook} from "./PerformanceHook";

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
      <br/>
      <>
        <h4>식상한 버튼 증가 컴포넌트</h4>
        <UseStateEx />
      </>
      <br/>
      <>
        <h4>객체 형태도 가능</h4>
        <MultipleState />
      </>
      <br/>
      <>
        <h4>이벤트 핸들러</h4>
        <EventHandler />
      </>
      <br/>
      <>
        <h4>이벤트 핸들러에 props 참조</h4>
        <EventProps />
      </>
      <br/>
      <>
        <h4>조건부 렌더링</h4>
        <ConditionalRender />
      </>
      <br/>
      <>
        <h4>배열 렌더링</h4>
        <ArrayRender />
      </>
      <br/>
      <>
        <h4>배열 렌더링 응용</h4>
        <ArrayRenderApply />
      </>
      <br/>
      <>
        <h4>Hook 사용하기</h4>
        <ReactHookState />
      </>
      <br/>
      <>
        <h4>Prop Driilling</h4>
        <div>자식 컴포넌트이 많아질수록 전달하기가 힘듬</div>
        <PropDrilling drilling={"안녕"} />
        <div>무분별한 context 사용은 금지</div>
        <MyContext.Provider value={"컨텍스트!"}>
          <PropContext />
        </MyContext.Provider>
      </>
      <br/>
      <>
        <h4>Ref Hooks</h4>
        <div>값 변경시 렌더링이 되지않으므로 dom 조작시 사용</div>
        <RefHooks />
      </>
      <br/>
      <>
        <h4>Effect Hooks</h4>
        <EffectHooks />
      </>
      <br/>
      <>
        <h4>성능과 관련된 Hooks</h4>
        <div>컴포넌트 최적화중 일반적인 방법은 불필요한 작업을 건너뛰는것이다.</div>
        <PerformanceHook />
      </>
    </>
  );
}
