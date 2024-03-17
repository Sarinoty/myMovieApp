"use client";
import styles from "./Form.module.scss";
import { useRouter, usePathname } from "next/navigation";

const Form = ({locale}) => {
    const router = useRouter();
    const pathname = usePathname();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const searchParams = new URLSearchParams();
        searchParams.append("sort_by", form.get("sort"));
        searchParams.append("release_date.gte", form.get("fromDate"));
        searchParams.append("release_date.lte", form.get("toDate"));
        searchParams.append("language", locale);
        router.push(`${pathname}?${searchParams.toString()}`); // On a préparé la requête en envoyant ce qu'on demande dans l'url
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <h2>{(locale === "fr") ? "Filtrer" : "Filter"}</h2>
            <div className={styles.date}>
                <h3>{(locale === "fr") ? "Date de sortie" : "Release date"}</h3>
                <div>
                    <p>{(locale === "fr") ? "Du" : "From"}</p>
                    <input type="date" name="fromDate" />
                </div>
                <div>
                    <p>{(locale === "fr") ? "au" : "to"}</p>
                    <input type="date" name="toDate" defaultValue={new Date().toISOString().substring(0, 10)} />
                </div>
            </div>
            <div>
                <h3>{(locale === "fr") ? "Trier par" : "Sort by"}</h3>
                <select name="sort">
                    <option value="popularity.desc">{(locale === "fr") ? "Popularité" : "Popularity"}</option>
                    <option value="vote_average.desc">Note</option>
                    <option value="cote_count.desc">{(locale === "fr") ? "Nombre de notes" : "Number of notes"}</option>
                </select>
            </div>
            <input type="submit" value={(locale === "fr") ? "Rechercher" : "Search"} />
        </form>
    );
};

export default Form;