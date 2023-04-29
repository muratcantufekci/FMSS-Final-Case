import { createContext, useContext, useState, useEffect } from "react";
import { getShips } from "../services/getShips";

const ShipContext = new createContext();

// provides access to data from all components by creating context
export const ShipProvider = ({ children }) => {
    const [shipList, setShipList] = useState([]);
    const [shipsNextPage, setShipsNextPage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // sets context values
    const values = {
        shipList,
        setShipList,
        shipsNextPage,
        setShipsNextPage,
        isLoading,
        setIsLoading,
        hasError,
        setHasError
    };

    useEffect(() => {
        const fetchShips = async () => {
            try {
                // makes an api request for initial data
                const response = await getShips('https://swapi.dev/api/starships/');
                setShipList(response.results);
                // sets new page for load more button
                setShipsNextPage(response.next)
                setIsLoading(false)
            } catch (error) {
                console.error(error);
            }
        };
        fetchShips();
    }, []);

    return <ShipContext.Provider value={values}>{children}</ShipContext.Provider>;
};

export const useShip = () => useContext(ShipContext);