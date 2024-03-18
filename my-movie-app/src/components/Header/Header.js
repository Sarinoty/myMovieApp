import React from "react";
import styles from './Header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // https://fontawesome.com/docs/web/use-with/react/
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import MovieSearch from "../MovieSearch/MovieSearch";
import LanguageSelector from "../language-selector/LanguageSelector";
import { getDictionary } from "@/utils/dictionaries";


const Header = async ({ locale }) => {
  const i18n = await getDictionary(locale);
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <p>
            <Link href={`/${locale}`}>MyMovieApp</Link>
          </p>
        </div>
        <div className={styles.navigation}>
          <nav>
            <ul>
              <li>
                <Link href={`/${locale}/series`}>{i18n.header.series}</Link>
              </li>
              <li>
                <Link href={`/${locale}/movies`}>{i18n.header.films}</Link>
              </li>
            </ul>
          </nav>
          <MovieSearch locale={locale} />
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <LanguageSelector />
        </div>
      </header>
    );
  };
  
  export default Header;