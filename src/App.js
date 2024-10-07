import React, { useState } from 'react';
import { Form } from './Form/index.js';
import { currencies } from './Form/currencies';

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
      <Form
        result={result}
        calculateResult={calculateResult} />
  );
}

export default App;