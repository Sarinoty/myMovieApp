import React from "react";
import Image from "next/image";
import styles from "./MediaCard.module.scss";
import Link from "next/link";
import Like from "./like/Like";

const MediaCard = ({ media, locale }) => {
    return (
        <div className={styles.card}>
            <Link href={`/${locale}/movies/${media.id}`}>
                <div className={styles.image}>
                    <Like mediaId={media.id} />
                    <Image // Un pattern doit être ajouté dans next.config.js pour pouvoir accéder à l'url
                    src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${media.poster_path}`} // '/w500' correspond à la taille désirée de l'image (cette option est fournie par l'API)
                    alt={media.title}
                    fill
                    />
                </div>
                <div className={styles.content}>
                    <p className={styles.vote}>{media.vote_average}</p>
                    <h3>{media.title}</h3>
                    <p>Le {new Date(media.release_date).toLocaleDateString("fr-FR")}</p>
                </div>
            </Link>
        </div>
    );
};

export default MediaCard;