import { useEffect, useState } from "react";
import axios from "axios";
import { CURRENCY_API } from "./apiCurrency";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(CURRENCY_API);
                const { meta, data } = await response.data;
                
                setRatesData({
                    state: "success",
                    meta,
                    data,
                });
            } catch (error) {
            setRatesData({
                status: "error",
            });
        }
    };
    setTimeout(getData, 1000);
    }, []);

return ratesData;
};