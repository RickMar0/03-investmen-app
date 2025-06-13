export default function UserInput({
  initialInvestment, setInitialInvestment,
    annualInvestment, setAnnualInvestment,
    expectedReturn, setExpectedReturn,
    duration, setDuration
}) {

  function RenderInput({label, placeholder, value, onChange}) {
    return (
      <label>
        {label}
        <input 
          placeholder={placeholder} 
          type = "number"
          value={value}
          onChange={onChange}
        />
      </label>
    );
  };

  return(
    <div id="user-input">
      <div className="input-group">
        <RenderInput 
          label={"initial investment"} 
          placeholder="0"
          value={initialInvestment}
          onChange={e => setInitialInvestment(+e.target.value)}
        />
        <RenderInput 
          label={"annual investment"} 
          placeholder="0"
          value={annualInvestment}
          onChange={e => setAnnualInvestment(+e.target.value)}
        />
      </div>
      <div className="input-group">
        <RenderInput 
          label={"expected return"} 
          placeholder="0"
          value={expectedReturn}
          onChange={e => setExpectedReturn(+e.target.value)}
        />
        <RenderInput 
          label={"duration (years)"} 
          placeholder="0"
          value={duration}
          onChange={e => setDuration(+e.target.value)}
        />
      </div>
    </div>
  );
}



/*


TEACHER'S CODE: //////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function UserInput({ onChange, userInput }) {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  return (<section id="user-input">
    <div className="input-group">
      <p>
        <label>Initial Investment</label>
        <input 
        type="number" 
        required 
        value={userInput.initialInvestment}
        onChange={(e)=>{onChange("initialInvestment", e.target.value)}} />
      </p>
      <p>
        <label>Annual Investment</label>
        <input 
        type="number" 
        required 
        value={userInput.annualInvestment}
        onChange={(e)=>{onChange("annualInvestment", e.target.value)}} />
      </p>
    </div>
    <div className="input-group">
      <p>
        <label>Expected Return</label>
        <input 
        type="number" 
        required 
        value={userInput.expectedReturn}
        onChange={(e)=>{onChange("expectedReturn", e.target.value)}} />
      </p>
      <p>
        <label>duration</label>
        <input 
        type="number" 
        required 
        value={userInput.duration}
        onChange={(e)=>{onChange("duration", e.target.value)}} />
      </p>
    </div>
    </section>
  )
}
*/