import { useEffect, useState } from "react";
import axios from "axios";
import { CURRENCY_API } from "../URL/apiCurrency";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(CURRENCY_API);
                const { meta, data } = await response.data;

                console.log(response)
                
                setRatesData({
                    state: "success",
                    meta,
                    data,
                });
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