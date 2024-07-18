export default function UserInput({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial investment</label>
          <input type="number" required id="initial-investment" value={userInput.initialInvestment} onChange={(event) => onChange('initialInvestment', event.target.value)} />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual investment</label>
          <input type="number" required id="annual-investment" value={userInput.annualInvestment} onChange={(event) => onChange('annualInvestment', event.target.value)} />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected return</label>
          <input type="number" required id="expected-return" value={userInput.expectedReturn} onChange={(event) => onChange('expectedReturn', event.target.value)} />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" min="1" required id="duration" value={userInput.duration} onChange={(event) => onChange('duration', event.target.value)} />
        </p>
      </div>
    </section>
  )
}
