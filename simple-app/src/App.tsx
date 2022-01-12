import React, { useState } from "react"
import styled from "styled-components"
import logo from "./logo.svg"
import "./App.css"

// Styling a regular HTML input
const StyledInput = styled.input`
  display: block;
  margin: 20px 0px;
  border: 2px solid gray;
  padding: 5px;
`

// Creating a custom hook
function useInput(defaultValue: string) {
  const [value, setValue] = useState(defaultValue)
  function onChange(e: any) {
    setValue(e.target.value)
  }
  return {
    value,
    onChange,
  }
}

function App() {
  const inputProps = useInput("")

  const submitHandler = (e: any) => {
    e.preventDefault() // It will hold the form submit
    console.log("state:", inputProps.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <form>
            <StyledInput {...inputProps} placeholder="Type in here" />
            <span>Value: {inputProps.value} </span>
            <button onClick={submitHandler}>Search</button>
          </form>
        </div>
      </header>
    </div>
  )
}

export default App
