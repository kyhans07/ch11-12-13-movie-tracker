class Movie {
    constructor(title, genre, rating) {
        this.title = title;
        this.genre = genre;
        this.rating = rating;
    }

    toString() {
        return `${this.title} | ${this.genre | rating=${this.rating}`;
    }
}

export default Movie;