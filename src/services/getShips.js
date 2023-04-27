import axios from "axios";

export const getShips = async (url) => {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.error(error);
    }
}