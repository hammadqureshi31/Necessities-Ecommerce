import axios from "axios";
import { useState, useEffect } from "react";

export const baseURl = 'https://fakestoreapi.com/products'
export const usefetch = async ()=>{
    const fetched = await axios.get(baseURl)
    return fetched
}