import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArtists } from '../../redux/music/artistesSlice';

function Api() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.artists);
  const search = useSelector((state) => state.search);

  const filteredArtists = state.data.filter((artist) => artist.name.toLowerCase()
    .includes(search.toLowerCase()));

  useEffect(() => {
    dispatch(fetchArtists());
  }, [dispatch]);

  if (state.status === 'loading') {
    return (
      <div className="loading">
        <div className="lds-roller">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }

  return (
    <div className="artists">
      {
        filteredArtists.length > 0 ? (filteredArtists.map((artist) => (
          <Link to={`/searchResults/${artist.name}`} key={artist.id}>
            <div>
              <img src={artist.picture} alt={artist.name} />
              <p>{artist.name}</p>
            </div>
          </Link>
        ))
        ) : <p>No artist found</p>
      }
    </div>
  );
}

export default Api;
