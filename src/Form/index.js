import React, { useState } from "react";
import { Result } from "../Result/index.js";
import { Formstyled, Button, Input, Loading, Failure } from "./styled.js";
import { Clock } from '../Clock/index.js'
import { useRatesData } from "../Result/useRatesData.js";

export const Form = () => {
  const [result, setResult] = useState();
  const ratesData = useRatesData();
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");

  const calculateResult = (currency, amount) => {
    const rate = ratesData.data[currency].value;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
      <Formstyled onSubmit={onSubmit}>
        <Clock />
        <h1>Przelicznik walut</h1>
        {ratesData.state === "loading"
        ? (
          <Loading>
            Poczekaj chwilkę! <br/> Ładuję aktualne kursy walut!
          </Loading>
        )
      : 
        ratesData.state === "error"
        ? (
          <Failure>
            Niestety coś poszło źle... 😱 Sprawdź połączenie z internetem i spróbuj jeszcze raz! 
          </Failure>
        ) : (
<>
        <div>
          <label>
            <h2>Kwota w PLN:</h2>
            <Input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              placeholder="Wpisz kwotę w PLN"
              type="number"
              required
              step="0.01"
            />
          </label>
        </div>
        <div>
          <label>
            <h2>Waluta:</h2>
            <select
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {!!ratesData.data && Object.keys(ratesData.data).map((currency) => (
                <option 
                key={currency} 
                value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p>
          <Button>Przelicz!</Button>
        </p>

        <h2>Wynik:</h2>
        <Result result={result} />
          </>  
            )
}
      </Formstyled>

)  
  }
