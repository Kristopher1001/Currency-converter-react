import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_zQcHw9IlwTE54nyVdymxjgvRdntXybJQHpaYc5aa");
                const Data = await response.ratesData

                setRatesData({
                    state: "success",
                    Data,
                })
            } catch (error) {
            setRatesData({
                state: "error",
            });
        }
    };
    setTimeout(getData, 1000);
    }, []);

return ratesData;
};