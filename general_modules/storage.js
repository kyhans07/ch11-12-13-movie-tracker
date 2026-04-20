/**
 * Description: General utility for local storage manipulation.
 * Author: Kyler Hanson
 * Date: 2026-04-15
 * GitHub: https://github.com/kyhans07
 */

/** @function retrieve - Gets and parses JSON data from local storage. */
function retrieve(key) {
    const json = localStorage.getItem(key);
    if(json) {
        return JSON.parse(json);
    } else {
        return null;
    }
}
/** @function store - Stringifies and saves data to local storage. */
function store(key, data) { 
    localStorage.setItem(key, JSON.stringify(data)); 
}

/** @function remove - Deletes a specific key from local storage. */
function remove(key) { 
    localStorage.removeItem(key); 
}

export {retrieve, store, remove}