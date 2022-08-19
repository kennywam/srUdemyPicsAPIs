import axios from "axios";


export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization: "Client-ID dHDw6g5k2Yz5Y39Xkq-MvNjcMZNYcBaRoM6XAfKxPGY"
    }
})
