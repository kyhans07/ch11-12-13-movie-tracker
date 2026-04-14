import * as storage from '../untitled/storage';
import Task from '../untitled/task';

const movieStorage = {
    retrieve() { 
        const movie = [];
        const movieArray = storage.retrieve("movies");
        if(movieArray) {
            for(let obj of movieArray) {
                movie.push(new movie(obj.description, obj.dueDate));
            }
        }
        return movie;
    },
    store(movies) {
        storage.store("Movies", movies);
    },
    remove() { 
        storage.remove("Movies");
    }
};

export default movieStorage;