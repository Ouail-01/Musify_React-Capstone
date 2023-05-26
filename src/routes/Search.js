import React from 'react';
import { useParams } from 'react-router-dom';
import SearchResults from '../components/Home/SearchResults';

export default function Search() {
  const params = useParams();

  return (
    <SearchResults id={params.id} />
  );
}
