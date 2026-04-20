/**
 * Description: Data access object for movie storage using local storage.
 * Author: Kyler Hanson
 * Date: 2026-04-16
 * GitHub: https://github.com/kyhans07
 */

class Movie {
    /**
     * Creates a new Movie instance.
     * @param {string} title - The title of the movie.
     * @param {string} genre - The category/genre of the movie.
     * @param {number|string} rating - The user rating (1-10).
     */
    constructor(title, genre, rating) {
        this.title = title;
        this.genre = genre;
        this.rating = rating;
    }

    /**
     * Returns a string representation of the movie for display in the list.
     * @returns {string} Formatted movie details.
     */
    toString() {
        return `${this.title} | ${this.genre} | Rating: ${this.rating}`;
    }
}

export default Movie;