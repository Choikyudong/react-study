import {useContext} from "react";
import MyContext from "./MyContext";

export function PropDrilling({drilling}) {
  return (
    <>
      <Drilling1 drilling={drilling} />
    </>
  )
}

export function PropContext() {
  return (
      <>
        <Drilling1 />
      </>
  )
}

function Drilling1({drilling}) {
  return <Drilling2 drilling={drilling} />
}

function Drilling2({drilling}) {
  return <Drilling3 drilling={drilling} />
}

function Drilling3({drilling}) {
  if (drilling) {
    return <Drilling4Props drilling={drilling} />
  }
  return <Drilling4Context />
}

function Drilling4Props({drilling}) {
  return (
    <>
      <h1>{drilling}</h1>
    </>
  )
}

function Drilling4Context({drilling}) {
  // useContext를 쓰거나 Consumer를 이용할 수 있다.
  const value = useContext(MyContext);
  return (
      <>
        <MyContext.Consumer>
          {(value) => <h1>{value}</h1>}
        </MyContext.Consumer>
        {/*<h1>{value}</h1>*/}
      </>
  )
}