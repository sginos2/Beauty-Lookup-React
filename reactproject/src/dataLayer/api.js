import cosmetologists from './CosmetData';

const timeout = res => new Promise((resolve) => setTimeout(() => resolve(res), 2000));
const apiUrl = 'http://localhost:8020';

function get(path) {
    return fetch(`${apiUrl}${path}`)
    .then(res => res.json())
    .then(timeout);
}

function post(path, body) {
    return fetch(`${apiUrl}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(timeout);
}

function put(path, body) {
    return fetch(`${apiUrl}${path}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(timeout);
}

function del(path) {
    return fetch(`${apiUrl}${path}`, {
        method: 'delete'
    })
    .then(res => res.json())
    .then(timeout);
}

export default  {
    get,
    post,
    put,
    del
};

export const getCosmetData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cosmetologists);
        }, 1000);
    });
}

export const getCosmetologist = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cosmetologists.find((c) => {
                return c.id === id;
            }));
        }, 1000);
    });
}