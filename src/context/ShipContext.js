import { createContext, useContext, useState, useEffect } from "react";
import { getShips } from "../services/getShips";

const ShipContext = new createContext();

//Context oluşturarak dataya tüm componentlerden erişim sağlar
export const ShipProvider = ({ children }) => {
    const [shipList, setShipList] = useState([]);
    const [shipsNextPage, setShipsNextPage] = useState('');

    const values = {
        shipList,
        setShipList,
        shipsNextPage,
        setShipsNextPage
    };

    useEffect(() => {
        const fetchShips = async () => {
            try {
                const response = await getShips('https://swapi.dev/api/starships/');
                setShipList(response.results);
                setShipsNextPage(response.next)
                localStorage.setItem('ships',JSON.stringify(response.results))
            } catch (error) {
                console.error(error);
            }
        };
        fetchShips();
    }, []);

    return <ShipContext.Provider value={values}>{children}</ShipContext.Provider>;
};

export const useShip = () => useContext(ShipContext);