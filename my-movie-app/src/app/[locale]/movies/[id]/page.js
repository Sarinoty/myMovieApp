import MovieDetails from "@/components/movie-details/MovieDetails";
import SimilarMovies from "@/components/similar-movies/SimilarMovies";
import { getMovieByPath } from "@/utils/movieClient";
import { notFound } from "next/navigation";
import React from "react";
import { Suspense } from "react";

// Paramètres de segment :
export const dynamic = "force-static";
// Aucune page MovieIdPage ne sera construite au build-time. Au request-time (à la première demande) la page va être générée puis aux demandes suivantes elles vont
// être générée en static à la volée. Les pages vont être ré-utilisées.

export const revalidate = 3600;


const MovieIdPage = async ({params: {id, locale}}) => {
    const movie = await getMovieByPath(`/movie/${id}`, [], locale);

    if(!movie.original_title) { // Si on n'arrive pas à récupérer le nom du film (c'est qu'il y a un problème avec l'API) alors on redirige vers une page notFound.
        return notFound();
    }

    return (
        <div>
            <MovieDetails movie={movie}/> {/* Ici on appelle le composant 'MovieDetails' et on lui passe un props appelé 'movie' contenant notre élément movie */}
            <Suspense fallback={<p>Chargement...</p>}>
                <SimilarMovies movieId={movie.id} />
            </Suspense>
        </div>
    );
};

export default MovieIdPage;