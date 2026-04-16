import * as storage from 'storage';
import Movie from 'movie';

const movieStorage = {
    retrieve() {
        const movies = [];
        const movieArray = storage.retrieve("Movies"); // Match the key used in store()
        if(movieArray) {
            for(let obj of movieArray) {
                // Movie objects to keep the toString() method
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