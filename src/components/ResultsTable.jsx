import { formatter } from "../util/investment.js";

export default function ResultsTable({ results}) {

  if (!results || results.length === 0) {
    return <p>No results to display.</p>;
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, idx) => {
          // Calculate totalInterest if not present
          const totalInterest = result.totalInterest !== undefined
            ? result.totalInterest
            : result.valueEndOfYear - result.annualInvestment * result.year;
        
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(result.annualInvestment * result.year)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}



/*
TEACHER'S CODE: //////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {

  const resultsData = calculateInvestmentResults(input);
  const initialInvestment = result[0].valueEndOfYear - result[0].interest - resultsData[0].annualInvestment;

  return(
    <table  id="result">
    <thead>
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
      {resultsData.map(yearData = > {

      const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initalInvestment;

      const totalInvested = yearData.valueEndOfYear - totalInterest;

      return <tr key={yearData.year}>
        <td>{yearData.year}</td>
        <td>{formatter.format(yearData.valueEnd)}</td>
        <td>{formatter.format(yerData.interest)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(totalInvested)}</td>
      </tr>})}
    </tbody>
    </table>

  );
}
*/