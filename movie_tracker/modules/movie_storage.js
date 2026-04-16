import * as storage from 'storage';
import Movie from 'task';

const movieStorage = {
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
    store(movies) {
        storage.store("Movies", Array.from(movies));
    },
    remove() {
        storage.remove("Movies");
    }
};

export default movieStorage;