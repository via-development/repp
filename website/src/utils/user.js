import axios from 'axios';
const CACHE_EXPIRATION_TIME = 60 * 60 * 1000;

export async function loadUserData(router) {
    const cachedUserData = localStorage.getItem('userData');
    const cachedTime = localStorage.getItem('usernameCacheTime');
    const currentTime = new Date().getTime();

    if (cachedUserData && cachedTime && (currentTime - cachedTime < CACHE_EXPIRATION_TIME)) {
        console.log('one');
        return JSON.parse(cachedUserData);
    } else {
        console.log('two');
        return await fetchUserData(router);
    }
}

export async function fetchUserData(router) {
    const authToken = localStorage.getItem('authToken');
    let response;
    try {
        response = await axios.get('http://localhost:3030/user', {headers: {Authorization: `${authToken}`}});
    } catch {
        router.push({name: 'login'});
        return
    }
    if (response.status == 401 || response.status == 400) {
        router.push({ name: 'login' });
    }
    localStorage.setItem('userData', JSON.stringify(response.data));
    localStorage.setItem('usernameCacheTime', new Date().getTime());
    return response.data;
}