import React, { useState } from "react";
import { Result } from "../Result/index.js";
import { currencies } from "./currencies";
import { Formstyled, Button, Input } from "./styled.js";
import { Clock } from '../Clock/index.js'

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (

      <Formstyled onSubmit={onSubmit}>
        <Clock />
        <h1>Przelicznik walut</h1>
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
              className="form__item"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                  {currency.short}
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
      </Formstyled>
  );
};
