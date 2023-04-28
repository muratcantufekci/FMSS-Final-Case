import axios from "axios";

// ships service that takes url and makes and api request
export const getShips = async (url) => {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.error(error);
    }
}