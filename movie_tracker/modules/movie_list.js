/**
 * Description: Collection module for managing the list of movies.
 * Author: Kyler Hanson
 * Date: 2026-04-16
 * GitHub: https://github.com/kyhans07
 */
import movieStorage from 'task_storage';

let Movies = [];

const movieList = {
    /**
     * Loads the movie list from storage.
     * @returns {Object} The movieList object for chaining.
     */
    load() {
        Movies = movieStorage.retrieve();
        return this;
    },
    /**
     * Persists the current movie list to storage.
     * @returns {Object} The movieList object for chaining.
     */
    save() {
        movieStorage.store(Movies);
        return this;
    },
    /**
     * Adds a new movie to the collection.
     * @param {Movie} movie - The movie instance to add.
     * @returns {Object} The movieList object for chaining.
     */
    add(movie) {
        Movies.push(movie);
        return this;
    },
    /**
     * Deletes a movie at a specific index.
     * Uses the sort method to ensure index alignment.
     * @param {number} i - The index of the movie to delete.
     * @returns {Object} The movieList object for chaining.
     */
    delete(i) {
        this.sort
        Movies.splice(i, 1);
        return this;
    },
    /**
     * Clears all movies from the local array and storage.
     * @returns {Object} The movieList object for chaining.
     */
    clear() {
        Movies.length = 0;
        movieStorage.remove();
        return this;
    },
    /**
     * Sorts movies by Genre, then by Rating (high to low), then by Title.
     * @returns {Object} The movieList object for chaining.
     */
    sort() {
        Movies.sort((a, b) => {
            return a.genre.toLowerCase().localeCompare(b.genre.toLowerCase()) ||
                (b.rating - a.rating) ||
                a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        });
        return this;
    },
    /**
     * Iterator to allow the collection to be used in for...of loops.
     */
    *[Symbol.iterator]() {
        for (let movie of Movies) {
            yield movie;
        }
    }
};

export default movieList;