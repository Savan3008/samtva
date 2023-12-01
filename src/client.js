import axios from "axios";

// const BASE_URL = "http://hpbhadaniya-001-site1.btempurl.com/";
const BASE_URL = "https://hpbhadaniya001-001-site1.btempurl.com/";

export const authUser = JSON.parse(localStorage.getItem("auth-user"));

export const login =  axios.create({
    baseURL:  BASE_URL,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
});

export const unitTypes =  axios.create({
    baseURL:  BASE_URL +  "UnitType",
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": "Bearer " + authUser?.token,
    }
});

export const floors =  axios.create({
    baseURL:  BASE_URL +  "Floor",
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": "Bearer " + authUser?.token,
    }
});

export const units =  axios.create({
    baseURL:  BASE_URL +  "Unit",
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": "Bearer " + authUser?.token,
    }
});

export const banks =  axios.create({
    baseURL:  BASE_URL +  "Bank",
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": "Bearer " + authUser?.token,
    }
});
