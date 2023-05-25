import React, { useState, useEffect } from 'react';

export default function SearchEngine() {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {}, []);

  return (
    <form action={`/searchResults/${search}`}>
      <input type="text" onChange={handleChange} />
    </form>
  );
}
