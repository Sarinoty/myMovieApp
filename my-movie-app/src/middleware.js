import { NextResponse } from "next/server";
import { getLocaleUrlToRedirect } from "./utils/i18n";
import withAuth from "next-auth/middleware";

export function middleware(request) {
    const newLocaleUrl = getLocaleUrlToRedirect(request); // On interroge la fonction pour savoir s'il faut rediriger ou non.

    if (newLocaleUrl) { // Si on a reçu une url de 'getLocaleUrlToRedirect' c'est qu'il faut rediriger l'utilisateur.
        return NextResponse.redirect(newLocaleUrl); // On redirige vers l'url reçue.
    };

    if (/\/[a-z]{2}\/user.*/.test(request.nextUrl.pathname)) { // Regex : l'url doit commencer par 2 caractères (la locale) puis suivie par 'user' puis suivi par n'importe quoi
        return withAuth(request); // Si la request contient bien l'authentification (token ou truc du genre) il laisse l'accès sinon redirige vers la page de connexion (src/app/api/auth/[...nextauth]/route.js)
      }
};

export const config = {
    matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)" // On exclue '/api', '/_next/static', '/_next/image' et '/favicon.ico'. (Voir repo NextJSRouteHandler)
};