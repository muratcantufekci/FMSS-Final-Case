import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const ShipContext = new createContext();

//Context oluşturarak dataya tüm componentlerden erişim sağlar
export const ShipProvider = ({ children }) => {
    const [shipList, setShipList] = useState([]);
    const [searchShipValue, setSearchShipValue] = useState('');

    const values = {
        shipList,
        setShipList,
        searchShipValue,
        setSearchShipValue,
    };

    useEffect(() => {
        const fetchShips = async () => {
            try {
                const { data } = await axios.get('https://swapi.dev/api/starships/');
                setShipList(data.results);
            } catch (error) {
                console.error(error);
            }
        };
        fetchShips();
    }, []);

    return <ShipContext.Provider value={values}>{children}</ShipContext.Provider>;
};

export const useShip = () => useContext(ShipContext);