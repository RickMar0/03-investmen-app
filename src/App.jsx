import {useState} from "react"
import { calculateInvestmentResults } from "./util/investment";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import ResultsTable from "./components/ResultsTable"
// import Results from "./components/Results.jsx"; 

function App() {

  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  const results = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  const inputData = {
    initialInvestment, setInitialInvestment,
    annualInvestment, setAnnualInvestment,
    expectedReturn, setExpectedReturn,
    duration, setDuration,
  };
  

  return (
    <>
      <Header />
      <UserInput {...inputData}/>
      <ResultsTable
        results={results}
        {...calculateInvestmentResults}
      />
    </>
  )
}

export default App

/* 


TEACHER'S CODE: //////////////////////////////////////////////////////////////////////////////////////////////////////////////


import Header from "./components/Header.jsx;
import UserInput from "./components/UserInput.jsx";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    });
  }
  

  return (
  <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange}/>
    {!inputIsValid && <p className="center"> Please enter a valid duration (at least 1 year).</p>}
    <{inputIsValid && Results input={userInput}} />
  </>
  );
}
  
export default App*/