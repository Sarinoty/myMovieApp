import React from "react";
import SearchResults from "./SearchResults";

const MoviesPage = ({ searchParams, params: {locale} }) => { // searchParams = paramètres GET dans l'URL
  return <SearchResults searchParams={searchParams} locale={locale} />;
};

export default MoviesPage;