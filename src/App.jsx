import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState(
    {
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
    }
  );

  function handleUserInput(inputIdentifier, newValue) {
    setUserInput((previousUserInput) => {
      return {
        ...previousUserInput,
        [inputIdentifier]: +newValue,
      }
    });
  };

  return (
    <>
      <UserInput userInput={userInput} onChange={handleUserInput} />
      <Results userInput={userInput} />
    </>
  );
}

export default App
