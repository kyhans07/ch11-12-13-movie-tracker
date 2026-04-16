import * as dom from "DOM";
import movieList from "task_list";
import Movie from "task";

const displayMovies = () => {
    movieList.load().sort();

   const select = dom.get("#movies");
   select.textContent = "";

    for (let movie of movieList) {
        const opt = document.createElement("option");
        // Use the Movie's toString() method for display
        opt.appendChild(document.createTextNode(movie.toString()));
        select.appendChild(opt);
    }
    dom.focus("#movie");
}

dom.load(() => {
    displayMovies();

    dom.addClick("#add_movie", () => {
        dom.clear("#msg");

        const newMovie = new Movie(
            dom.getValue("#movie"),
            dom.getValue("#genre"),
            dom.getValue("#rating")
        );

        if (newMovie.title === "") {
            dom.setText("#msg", "Movie title is required");
            dom.select("#movie");
        } else {
            movieList.add(newMovie).save();
            dom.clear("#movie");
            dom.clear("#genre");
            dom.setValue("#rating", "5"); // Reset to default
            displayMovies();
        }
    });

    dom.addClick("#clear_movies", () => {
        movieList.clear();
        displayMovies();
    });
});