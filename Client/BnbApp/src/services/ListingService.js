import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 10000,
    headers: {
        'Content-Type':'application/json'
    },
    withCredentials: true
});

class ListingService {
    createListing(data){
        console.log(data)
        return axiosInstance.post("/listings", data);
    }

    getListings(){
        return axiosInstance.get("/listings");
    }

    updateListing(data) {
        return axiosInstance.put(`/listings/${data.id}`, data);
    }

    deleteListing(id) {
        return axiosInstance.delete(`/listings/${id}`);
    }

    getOneListing(id) {
        return axiosInstance.get(`/listings/${id}`);
    }

    getSeshId() {
        return axiosInstance.get("/listings/sesh");
    }

    getHeartedListing(id) {
        return axiosInstance.get(`/heartedListings/${id}`);
    }

}

export default new ListingService();