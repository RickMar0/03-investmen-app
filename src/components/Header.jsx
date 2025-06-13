import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
  return(
    <header id="header">
      <img src={logo} alt="Investment Calculator Logo" />
      <h1 className="center">React Investment Calculator</h1>
    </header>
  );
};

{/* 
  TEACHER'S CODE //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  import logo from '../assets/investment-calculator-logo.png';
  
  export default function Header() {
    return <header id="header">
    <img src={logo} alt="logo showing a money bag"/>
    <h1> React Investment Calculator
    </header>
*/}