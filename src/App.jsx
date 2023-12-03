import { useState } from "react"
import Header from "./Header"
import Result from "./Result"
import UserInput from "./UserInput"
function App() {
  const defaultInputs = {
    'initialInvestment' : null,
    'annualInvestment' : null,
    'expectedReturn' : null,
    'duration' : null
  }
  const [inputs, setInputs] = useState(defaultInputs);

  return (
    <>
    <Header/>
    <UserInput setInputs={setInputs} inputs={inputs}/>
    <Result inputs={inputs}/>
    </>
  )
}

export default App
