import { NextRequest } from "next/server";
import { getLocaleUrlToRedirect } from "./utils/i18n";

export function middleware(request) {
    const newLocaleUrl = getLocaleUrlToRedirect(request); // On interroge la fonction pour savoir s'il faut rediriger ou non.

    if (newLocaleUrl) { // Si on a reçu une url de 'getLocaleUrlToRedirect' c'est qu'il faut rediriger l'utilisateur.
        return NextRequest.redirect(newLocaleUrl); // On redirige vers l'url reçue.
    };
};

export const config = {
    matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)" // On exclu '/api', '/_next/static', '/_next/image' et '/favicon.ico'. (Voir repo NextJSRouteHandler)
};