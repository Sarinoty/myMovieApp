"use client";

import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
// DebounceInput est un input qui permet d'ajouter des paramètres comme le nombre de caractères minimum avant de déclencher la requête ou le temps après la frappe
// du dernier caractère avant de lancer la requête. ça évite qu'une requête ne soit lancée à chaque caractère entré.

const MovieSearch = () => {
    const [movieResults, setMovieResults] = useState([]);

    const updateMovieSearch = async (query) => {
        //console.log(query);
        const response = await fetch(`/api/movies/search?query=${query}`);
        const {results} = await response.json();
        console.log(results);
        setMovieResults([]);
    }

    return (
        <div>
            <DebounceInput
                minLength={2}
                debounceTimeout={500}
                onChange={e => updateMovieSearch(e.target.value)}
                placeholder="Rechercher un titre..."
            />
        </div>
    );
};

export default MovieSearch;