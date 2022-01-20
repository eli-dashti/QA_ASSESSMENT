const fetch = require('node-fetch');

module.exports = {

    post: async(url, body) => {
        const response = await fetch(url, {
            method: 'post',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json',
                       'accept': 'application/json'}
        });
        const json = await response.json();
        return json
    },
    get: async(url) => {
        const response = await fetch(url);
        const json = await response.json();
        return json
    },

}