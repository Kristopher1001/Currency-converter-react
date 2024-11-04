import React, { useState } from "react";
import { Result } from "../Result/index.js";
import {
  Formstyled,
  Button,
  Input,
  Loading,
  Failure,
  Choice,
  Info,
} from "./styled.js";
import { Clock } from "../Clock/index.js";
import { useRatesData } from "./useRatesData.js";

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
  };

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    
    <Formstyled onSubmit={onSubmit}>
      <Clock />
      <h1>Przelicznik walut</h1>
      {ratesData.status === "loading" ? (
        <Loading>
          Poczekaj chwilkę! <br /> Ładuję aktualne kursy walut!
        </Loading>
      ) : ratesData.status === "error" ? (
        <Failure>
          Niestety coś poszło źle... 😱 Sprawdź połączenie z internetem i
          spróbuj jeszcze raz!
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
              <Choice
                as="select"
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
              >
                {!!ratesData.data &&
                  Object.keys(ratesData.data).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
              </Choice>
            </label>
          </div>
          <div>
            <Button>Przelicz!</Button>
            <h2>Wynik:</h2>
            <Result result={result} />
              
          </div><br/>
          <Info>
            Aktualne kursy walut z dnia{" "}
            {new Date(ratesData.meta.last_updated_at).toLocaleDateString(
              "pl-PL"
            )} {" "}
            pobierane są ze strony internetowej{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://app.currencyapi.com"
            >
              https://app.currencyapi.com
            </a>
          </Info>
        </>
      )}
    </Formstyled>
  );
};
