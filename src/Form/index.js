import React, { useState, useEffect } from 'react';
import './style.css';
import { Result } from '../Result/index.js';
import { currencies } from './currencies';

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (

        <form className="form" onSubmit={onSubmit}>
              <p className="clock">
            Dzisiaj jest 
            {" "}
            {date.toLocaleString(undefined,{
                weekday: "long",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                day: "numeric",
                month: "long"
            })}
        </p> 
            <h1>Przelicznik walut</h1>
            <div>
                <label>
                    <h2>Kwota w PLN:</h2>
                    <input className="form__item"
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        placeholder="Wpisz kwotę w PLN"
                        type="number"
                        required step="0.01" />
                </label>
            </div>
            <div>
                <label>
                    <h2>Waluta:</h2>
                    <select className="form__item"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}>

                        {currencies.map((currency => (
                            <option
                                key={currency.short}
                                value={currency.short}>
                                {currency.short}
                            </option>
                        )))}

                    </select>
                </label>
            </div>

            <p>
                <button className="form__button">Przelicz!</button>
            </p>

            <h2>Wynik:</h2>
            <Result result={result} />
        </form>
    );
}