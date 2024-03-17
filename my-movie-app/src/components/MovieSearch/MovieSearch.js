"use client";

import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import MovieSearchResults from "./MovieSearchResults/MovieSearchResults";
import styles from "./MovieSearch.module.scss";
import { useCurrentLanguage } from "@/hooks/useCurrentLanguage";

// DebounceInput est un input qui permet d'ajouter des paramètres comme le nombre de caractères minimum avant de déclencher la requête ou le temps après la frappe
// du dernier caractère avant de lancer la requête. ça évite qu'une requête ne soit lancée à chaque caractère entré.

const MovieSearch = ({locale}) => {
    const [movieResults, setMovieResults] = useState([]);
    const [hasFocus, setHasFocus] = useState(false);
    const currentLanguage = useCurrentLanguage();

    const updateMovieSearch = async (query) => {
        const response = await fetch(`/api/movies/search?query=${query}`);
        const {results} = await response.json();
        setMovieResults(results.filter((movie) => movie.backdrop_path)); // On vire les films qui n'ont pas d'image.
    }

    return (
        <div className={styles.searchContainer}>
            <DebounceInput
                minLength={2}
                debounceTimeout={500}
                onChange={e => updateMovieSearch(e.target.value)}
                placeholder={(locale === "en") ? "Search for an item..." : "Rechercher un titre..."}
                onBlurCapture={() => setHasFocus(false)} // Quand l'élément perd le focus.
                onFocus={() => setHasFocus(true)} // Quand l'élément prend le focus.
            />
            {movieResults.length > 0 && hasFocus && <MovieSearchResults movieResults={movieResults} locale={currentLanguage} />} {/* Composant client car appelé depuis un composant client. */}
        </div>
    );
};

export default MovieSearch;