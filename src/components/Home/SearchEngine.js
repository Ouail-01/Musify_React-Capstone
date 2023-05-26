import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchEngine() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/searchResults/${search}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search..."
      />
    </form>
  );
}
