import axios from 'axios';


export async function fetechUserServers() {
    const authToken = localStorage.getItem('authToken');
    const response = await axios.get('http://localhost:3030/servers', {
        headers: {
        Authorization: `${authToken}`
        }
    });

    return response.data;
}