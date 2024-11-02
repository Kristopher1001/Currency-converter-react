import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("currencies.json");
                const Data = await response.data;

                console.log(response)
                
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