import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import MediaCard from "../media-card/MediaCard";
import styles from "./Popular.module.scss";

const Popular = async () => {
    const {results} = await getMovieByPath("/movie/popular"); // On récupère les films les plus populaires sur tmdb.
    const popularMovies = results.slice(0, 6); // On ne garde que les 6 premiers résultats.
    //console.log("Results : ");
    //console.log(results);
    //console.log("PopularMovies filtrées : ");
    //console.log(popularMovies);
    return (
        <div>
            <h2>Les plus populaires</h2>
            <div className={styles.container}>
                {popularMovies.map((movie) => (
                    <MediaCard key={movie.id} media={movie} />
                ))}
            </div>
        </div>
    );
};

export default Popular;