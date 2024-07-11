import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080/countries/'
    //headers:{"ngrok-skip-browser-warning": "true"}
})