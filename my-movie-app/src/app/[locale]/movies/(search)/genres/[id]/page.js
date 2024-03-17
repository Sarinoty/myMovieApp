import React from "react";
import SearchResults from "../../SearchResults";

const GenreIdPage = ({ params: { id, locale }, searchParams }) => { // searchParams = paramètres GET dans l'URL
  return <SearchResults searchParams={searchParams} genreId={id} locale={locale} />;
};

export default GenreIdPage;