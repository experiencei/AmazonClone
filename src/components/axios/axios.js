import axios from "axios";

const instance = axios.create({
    baseUrl : "..."  //cloud function url
})

export default instance;