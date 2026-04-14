import dom from "./movie_tracker/modules/movie_list";
import movieList from "./movie_tracker/modules/movie_list";


const displayMovies = () => {
   movieList.sort();

   const select = dom.get("#movies");
   select.textConetn = "";

   for (let movie of movieList) {
       const opt = document.createElement("option");
       opt.appendChild(document.createTextNode(movie));
       select.appendChild(opt);
   }
    dom.focus("#movie");
}

dom.load(() => {
    dom.addClick("#add_movie", () => {
        dom.clear("#msg");


        const newMovie = new Movie(
            dom.getValue("#movie"),
            dom.getValue("#genre"),
            dom.getValue("#rating")
        );

        let message = "";
        if (newMovie.title === "") {
            message = "Movie title is required";
        }

        if (message === "") {
            movieList.load().add(newMovie).save();
            dom.clear("#movie");
            dom.clear("#genre");
            dom.clear("#rating");
            displayMovies();
        }   else {
            dom.setText("#msg, message");
            dom.select("#movie");
        }
    });

    dom.addClick("#clear_movies", () => {
        movieList.clear();
        dom.clear("#movies");


    })




    }




)