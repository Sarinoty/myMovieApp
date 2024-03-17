import React from "react";
import SearchResults from "../../SearchResults";

const GenreIdPage = ({ params, searchParams }) => { // searchParams = paramètres GET dans l'URL
  return <SearchResults searchParams={searchParams} genreId={params.id} />;
};

export default GenreIdPage;