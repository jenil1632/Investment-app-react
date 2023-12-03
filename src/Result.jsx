import { calculateInvestmentResults, formatter } from './util/investment.js';

function isInputDataValid(inputs) {
    return inputs.initialInvestment && inputs.initialInvestment >= 0 
    && inputs.annualInvestment && inputs.annualInvestment >= 0 
    && inputs.expectedReturn && inputs.expectedReturn >= 0 
    && inputs.duration && inputs.duration >= 0;
}

export default function Result({ inputs }) {
    const rowDataArray = isInputDataValid(inputs) ? calculateInvestmentResults(inputs) : [];

    function getTableHeader() {
        return (<thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Investment Capital</th>
            </tr>

        </thead>);
    }

    function createRowData(rowDataArray) {
        return rowDataArray.map((data) => {
            return (<tr key={data.year}>
                <td>{data.year}</td>
                <td>{formatter.format(data.valueEndOfYear)}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>{formatter.format(data.totalInterest)}</td>
                <td>{formatter.format(data.annualInvestment)}</td>
            </tr>);
        });
    }

    return (<table id="result">
        {getTableHeader()}
        <tbody>
            {createRowData(rowDataArray)}
        </tbody>
    </table>);
}