import {Roboto, Montserrat} from "next/font/google";

export const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300"],
    variable: "--font-roboto", // On défini une variable pour l'appeler avec font-family
});

export const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["100", "300", "500", "700"],
    variable: "--font-montserrat",
});