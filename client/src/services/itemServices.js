import axios from 'axios';
const apiUrl = "http://localhost:3000/api/groceryList";

export function getItems() {
    return axios.get(apiUrl);
}

export function addItem(item) {
    return axios.post(apiUrl, item);
}

export function updateItem(id, item) {
    return axios.put(apiUrl + "/" + id, item);
}

export function deleteItem(id) {
    return axios.delete(apiUrl + "/" + id);
}