import React, { useState } from "react"
import styled from "styled-components"
import logo from "./logo.svg"
import axios from "axios"
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

function Results(props: any) {
  return (
    <div>
      {props.results[0].id || ""}: {props.results[0].quote || ""}
    </div>
  )
}

function App() {
  const [results, setResults] = useState([{}])
  const inputProps = useInput("")

  const getResults = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/quotes/random"
      )
      console.log(response)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  const submitHandler = async (e: any) => {
    e.preventDefault() // It will hold the form submit
    console.log("state:", inputProps.value)
    const results = await getResults()
    setResults(results)
    console.log(results)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <form>
            <StyledInput {...inputProps} placeholder="Type in here" />
            <button onClick={submitHandler}>Search</button>
          </form>
        </div>
        <Results results={results}></Results>
      </header>
    </div>
  )
}

export default App
