import React, { useState } from 'react';
import { Form } from "./Form/form";
import { Clock } from "./Clock";
import { currencies } from './Form/currencies';
import './index.css';


function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }
  return (

    <div className="container">
      <Clock />
      <Form
        result={result}
        calculateResult={calculateResult} />
    </div>
  );
}

export default App;