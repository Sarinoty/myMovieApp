import "server-only"; // Etant donné qu'on utilise des variables d'environnement non prefixées "NEXT_PUBLIC_" elles ne seront pas accessibles aux composants clients.
// Server-only génèrera un message si on appelle une de ces variables d'environnement dans un composant client pour rappeler qu'elles ne sont pas accessibles.


// Ici on prépare la requête vers themoviedb afin de ne pas avoir à tout répéter à chaque fois.

export const getMovieByPath = (path, language = "fr-FR") => {
    const url = new URL(`${process.env.TMDB_API_URL}${path}`);
    url.searchParams.append("api_key", process.env.TMDB_API_KEY);
    url.searchParams.append("language", language);

    return fetch(url).then((res) => res.json());
};