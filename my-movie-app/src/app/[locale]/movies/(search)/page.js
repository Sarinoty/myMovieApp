import React from "react";
import SearchResults from "./SearchResults";

const MoviesPage = ({ searchParams, locale }) => { // searchParams = paramètres GET dans l'URL
  return <SearchResults searchParams={searchParams} />;
};

export default MoviesPage;