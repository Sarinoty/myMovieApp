import React from "react";
<<<<<<< HEAD
import {Roboto} from 'next/font/google';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const roboto = Roboto({subsets: ["latin"], weight:["100", "300"]});
=======
import {Roboto} from "next/font/google";
import styles from './Header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //https://fontawesome.com/docs/web/use-with/react/
import { faUser } from "@fortawesome/free-solid-svg-icons";

const roboto = Roboto({subsets: ["latin"], weight: ["100", "300"]});
>>>>>>> 52d0569a4284a2787c34ddda3af57b6f9dfcb051

const Header = () => {
    return (
        <header className={`${styles.header} ${roboto.className}`}>
            <div>
                <p>MyMovieApp</p>
            </div>
            <div>
                <nav>
                    <ul>
                        <li>Séries</li>
                        <li>Films</li>
                    </ul>
                </nav>
            </div>
<<<<<<< HEAD
            <input type="text" placeholder="Rechercher un titre..." />
=======
            <input type="text" placeholder="Rechercher un titre..."></input>
>>>>>>> 52d0569a4284a2787c34ddda3af57b6f9dfcb051
            <div>
                <FontAwesomeIcon icon={faUser} />
            </div>
        </header>
    );
};

export default Header;