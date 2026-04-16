/**
 * Description: Data access object for movie storage using local storage.
 * Author: Kyler Hanson
 * Date: 2026-04-16
 * GitHub: https://github.com/kyhans07
 */
import * as storage from 'storage';
import Movie from 'task';

const movieStorage = {
    /**
     * Retrieves movies from local storage and converts them to Movie instances.
     * @returns {Array} An array of Movie objects.
     */
    retrieve() {
        const movies = [];
        const movieArray = storage.retrieve("Movies");
        if(movieArray) {
            for(let obj of movieArray) {
                // Re-instantiate as Movie objects
                movies.push(new Movie(obj.title, obj.genre, obj.rating));
            }
        }
        return movies;
    },
    /**
     * Saves the current movie collection to local storage.
     * @param {Array} movies - The array of movies to store.
     */
    store(movies) {
        storage.store("Movies", Array.from(movies));
    },
    remove() {
        storage.remove("Movies");
    }
};

export default movieStorage;