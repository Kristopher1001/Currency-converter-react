import React, { useState } from "react";
import "./style.css";
import { Result } from '../result';
import { currencies } from './currencies';


        export const Form = ({ calculateResult, result }) => {
            const [currency, setCurrency] = useState(currencies[0].short);
            const [amount, setAmount] = useState("");

            const onSubmit = (event) => {
                event.preventDefault();
                calculateResult(currency, amount);
            }    
        
        return (
        
            <form className="form" onSubmit={onSubmit}>
                <h1>Przelicznik walut</h1>
            <p>
                <label>
                    <h2>Kwota w PLN:</h2>
                    <input 
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    placeholder="Wpisz kwotę w PLN" 
                    type="number" 
                    required step="0.01"/>
                </label>
            </p>
            <p>
                <label>
                    <h2>Waluta:</h2>
                    <select 
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
            </p>

            <p>
            <button className="form__button">Przelicz!</button>
            </p>

            <h2>Wynik:</h2>
            <Result result={result}/>
        </form>
        );
        }