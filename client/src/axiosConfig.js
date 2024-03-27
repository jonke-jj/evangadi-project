import axios from "axios";

const axiosBase = axios.create({
    // baseURL: "http://localhost:5500/api",
    baseURL:"https://evangadi-project.onrender.com/api" 
    // "https://evangadi-project.onrender.com/api"
    
    // baseURL:'https://evangadi-project.vercel.app/Login'
})
export default axiosBase