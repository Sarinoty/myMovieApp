import { getMovieByPath } from "@/utils/movieClient";
import styles from "./SearchResults.module.scss";
import MediaCard from "@/components/media-card/MediaCard";

const SearchResults = async (searchParams, genreId) => { // Paramètres reçus des pages movies/page et (search)/page
    const {results} = await getMovieByPath("/discover/movie", [ // On crée la requête API avec les paramètres qui ont été passés dans l'URL par le Form
        { key: "sort_by", value: searchParams.sort_by },
        { key: "release_date.gte", value: searchParams["release_date.gte"] },
        { key: "release_date.lte", value: searchParams["release_date.lte"] },
        { key: "with_genres", value: genreId },
    ]);
    //console.log(results);
    console.log(searchParams.sort_by);
    console.log(searchParams["release_date.gte"]);
    return (
        <div className={styles.results}>
            {results
                .filter((movie) => movie.poster_path) // On filtre pour n'afficher que les movie qui ont une image
                .map((movie) => (
                    <MediaCard key={movie.id} media={movie}/>
                ))
            }
        </div>
    );
};

export default SearchResults;