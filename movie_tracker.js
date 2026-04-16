/**
 * Description: Main controller logic for the Movie Tracker application.
 * Handles UI interactions, data validation, and list rendering.
 * Author: Kyler Hanson
 * Date: 2026-04-16
 * GitHub: https://github.com/kyhans07
 */

import * as dom from "DOM";
import movieList from "task_list";
import Movie from "task";

/**
 * Loads the movie list from storage, sorts it, and renders each movie
 * as an option in the display select box.
 */

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

    // Event listener for adding a new movie
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

    // Event listener to clear the entire collection
    dom.addClick("#clear_movies", () => {
        movieList.clear();
        displayMovies();
    });

    // Event listener for deleting a specific movie
    dom.addClick("#delete_movie", () => {
        const select = dom.get("#movies");
        const selectedIndex = select.selectedIndex;

        if (selectedIndex === -1) {
            dom.setText("#msg", "Please select a movie to delete.");
        } else {
            dom.setText("#msg", "");
            movieList.delete(selectedIndex).save();
            displayMovies();
        }
    });
});