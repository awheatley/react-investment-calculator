import { useState } from "react";

export default function UserInput() {
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
        [inputIdentifier]: newValue,
      }
    });
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">Initial investment</label>
          <input type="number" required id="initial-investment" value={userInput.initialInvestment} onChange={(event) => handleUserInput('initialInvestment', event.target.value)} />
        </div>
        <div>
          <label htmlFor="annual-investment">Annual investment</label>
          <input type="number" required id="annual-investment" value={userInput.annualInvestment} onChange={(event) => handleUserInput('annualInvestment', event.target.value)} />
        </div>
      </div>

      <div className="input-group">
        <div>
          <label htmlFor="expected-return">Expected return</label>
          <input type="number" required id="expected-return" value={userInput.expectedReturn} onChange={(event) => handleUserInput('expectedReturn', event.target.value)} />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input type="number" required id="duration" value={userInput.duration} onChange={(event) => handleUserInput('duration', event.target.value)} />
        </div>
      </div>
    </section>
  )
}