import movieStorage from './movie_storage';

let Movies = [];         // private variable

const movieList = {
    load() {
        Movies = movieStorage.retrieve();
        return this;
    },
    save() {
        movieStorage.store(Movies);
        return this;
    },
    add(movie) {
        Movies.push(movie);
        return this;
    },
    delete(i) {
        Movies.splice(i, 1);
        return this;
    },
    clear() {
        Movies.length = 0;
        movieStorage.remove();
        return this;
    },
    sort() {
        Movies.sort((a, b) => {
            return a.genre.toLowerCase().localeCompare(b.genre.toLowerCase()) ||
                (b.rating - a.rating) ||
                a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        });
        return this;
    },
    *[Symbol.iterator]() { 
        for (let movie of Movies) {
            yield movie;
        }
    }
};

export default movieList;