"use client";
import { useSelectedLayoutSegment, useParams, notFound } from "next/navigation";
import styles from "./searchSidebar.module.scss";
import Form from "./form/Form";

const SearchSidebar = ({genres}) => {
    const segment = useSelectedLayoutSegment(); // Ce hook renvoie le nom du segment inférieur, s'il existe, depuis le layout où il a été importé.
    const {id} = useParams();

    const getSidebarTitle = () => {
        if (!segment) {
            return "Films";
        }
        const genre = genres.find((genre) => genre.id === Number(id));
        if (!genre) {
            return notFound();
        }
        return genre.name;
    }

    const title = getSidebarTitle();
    //console.log(segment);
    return (
        <div className={styles.sidebar}>
            <h1>Tous les &quot;{title}&quot;</h1>
            <Form />
        </div>
    );
};

export default SearchSidebar;