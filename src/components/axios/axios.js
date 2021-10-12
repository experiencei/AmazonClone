import axios from "axios";

const instance = axios.create({
    baseUrl : "http://localhost:5001/db-54246/us-central1/api"  //cloud function url
})

export default instance;