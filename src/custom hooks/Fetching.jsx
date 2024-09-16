import axios from "axios";

export const baseURL = 'https://fakestoreapi.com/products';

let myData = [];

export const usefetch = async () => {
    try {
        const response = await axios.get(baseURL);
        console.log(response.data)
        myData = response.data;
        return myData;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

// export const getData = async () => {
//     await usefetch()
// };