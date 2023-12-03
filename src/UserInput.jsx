
export default function UserInput({ setInputs }) {
    // const [intitialInvestment, setInitialInvestment] = useState();
    // const [annualInvestment, setAnnualInvestment] = useState();
    // const [expectedReturn, setExpectedReturn] = useState();
    // const [duration, setDuration] = useState();

    function setInputValue(param, e) {
        setInputs(inputs => {
            return {
                ...inputs,
                [param]: Number(e.target.value)
            }
        });
    }
    return (
        <div id="user-input" >
            <div className="input-group">
                <div >
                    <label htmlFor="intitialInvestment">Initial Investment</label>
                    <input type="number" id="intitialInvestment" onChange={(e) => setInputValue('initialInvestment', e)} />
                </div>
                <div >
                    <label htmlFor="annualInvestment">Annual Investment</label>
                    <input type="number" id="annualInvestment" onChange={(e) => setInputValue('annualInvestment', e)} />
                </div>
            </div>
            <div className="input-group">
                <div >
                    <label htmlFor="expectedReturn">Expected Return</label>
                    <input type="number" id="expectedReturn" onChange={(e) => setInputValue('expectedReturn', e)} />
                </div>
                <div >
                    <label htmlFor="duration">Duration</label>
                    <input type="number" id="duration" onChange={(e) => setInputValue('duration', e)} />
                </div>
            </div>
        </div>
    );
}