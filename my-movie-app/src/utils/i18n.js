import {match} from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export const availableLocales = ["en", "fr"]; // On défini les langues qu'on veut supporter.
export const defaultLocale = "fr"; // On défini la langue a afficher si la langue de l'utilisateur n'est pas prise en charge.

export const getPreferredLocale = (request) => { // On récupère la langue de l'utilisateur dans les headers de la requête.
    const headers = {"accept-laguage": request.headers.get("accept-language")}; // On récupère les accept-language renvoyés par le navigateur.
    const languages = new Negotiator({headers}).languages(); // On récupère les langues par ordre de préférence.
    return match(languages, availableLocales, defaultLocale); // On récupère la langue à utiliser.
};

export const getLocaleUrlToRedirect = (request) => { // Cette fonction sera appelée par le middleware. Elle dira si oui ou non il y a besoin de rediriger.
    const pathname = request.nextUrl.pathname; // On récupère le pathname de la requête.
    const pathnameIsMissingLocale = availableLocales.every((locale) => !pathname.startswith(`/${locale}`) && pathname !== `/${locale}`);
    // On regarde toutes les langues qu'on supporte (locale) et on vérifie que l'url ne commence pas par '/${locale}' et que le pathname est différent '/${locale}'.

    if (pathnameIsMissingLocale) { // Si pathnameIsMissingLocale est non null c'est qu'il faut rediriger l'utilisateur vers sa langue.
        const locale = getPreferredLocale(request)
        return new URL(`/${locale}/${pathname}`, request.url); // On reconstruit l'url avec la langue adaptée.
    }
};

// Le package 'negotiator' nous donne par ordre de préférence les langues basées sur le headers 'accept-languages'.
// Le package '@formatjs/intl-localematcher' va nous permettre de prendre une fonction match et nous donnera en fonction de 3 paramètres de langue celle qui a été séléctionnée.
// every : Determines whether all the members of an array satisfy the specified test.

