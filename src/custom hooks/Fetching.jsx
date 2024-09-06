import axios from "axios";

export const baseURL = 'https://dummyjson.com/products';

let myData = [];

export const usefetch = async () => {
    try {
        const response = await axios.get(baseURL);
        console.log(response.data)
        myData = response.data.products;
        return myData;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

// export const getData = async () => {
//     await usefetch()
// };