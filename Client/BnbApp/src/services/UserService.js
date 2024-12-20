import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 10000,
    headers: {
        'Content-Type':'application/json'
    },
    withCredentials: true
});

class UserService {
    registerUser(data){
        console.log(data)
        return axiosInstance.post("/register", data);
    }
    
    loginUser(data){
        console.log(data)
        return axiosInstance.post("/login", data);
    }

    logoutUser() {
        return axiosInstance.get("/logout");
    }

}

export default new UserService();
