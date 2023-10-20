"use client";

import { useState } from "react";

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
            <input type="text" placeholder="Rechercher un titre..." onChange={e => updateMovieSearch(e.target.value)} />
        </div>
    );
};

export default MovieSearch;