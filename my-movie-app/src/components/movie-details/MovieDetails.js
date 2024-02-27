import React from "react";
import Image from "next/image";
import styles from "./MovieDetails.module.scss";
import MovieCredits from "../movie-credits/MovieCredits";
import { Suspense } from "react";

const MovieDetails = ({movie}) => { // On récupère l'objet movie qui avait été envoyé en props lors de l'appel.
    //console.log(movie);
    return (
        <div className={styles.details}>
            <div className={styles.background}>
                <Image
                    src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/original${movie.backdrop_path}`}
                    alt={movie.title}
                    fill /* La propriété 'fill' permet que l'image prenne bien toute la place dans le bloc de background */
                />
            </div>
            <div className={styles.content}>
                <Image
                src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w342${movie.poster_path}`}
                width={250}
                height={400}
                alt={movie.title}
                />
                <div className={styles.description}>
                    <h1>
                        {movie.title}{" "}
                        <span className={styles.releaseDate}>({new Date(movie.release_date).toLocaleDateString("fr-FR")})</span>
                    </h1>
                    <p className={styles.production}>
                        Production : 
                        <span>
                            {" "}{movie.production_companies.map((company) => company.name).join(", ")}
                        </span>
                    </p>
                    <h2>Synopsis</h2>
                    <p className={styles.overview}>{movie.overview}</p>
                    <div className={styles.credits}>
                        <Suspense fallback={<p>Chargement...</p>}> {/* Permet de charger le reste de la page sans attendre que ces données soient arrivées */}
                            <MovieCredits movieId={movie.id} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;