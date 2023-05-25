/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { changeMusic } from '../../redux/music/musicSlice';
import { fetchAlbums } from '../../redux/music/albumSlice';

export default function SearchResults({ id }) {
  SearchResults.propTypes = {
    id: PropTypes.string.isRequired,
  };

  const dispatch = useDispatch();

  const data = useSelector((state) => state.albums.data);
  const status = useSelector((state) => state.albums.status);

  const handleSongClick = (item) => {
    dispatch(changeMusic(item));
  };

  useEffect(() => {
    dispatch(fetchAlbums(id));
  }, [id]);

  if (status === 'loading') {
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

  if (status === 'failed') {
    return <div>Oops! Something went wrong.</div>;
  }

  return (
    <>
      <div className="results">
        {data.data
          && data.data.map((item) => (
            <div
              key={item.id}
              className="song"
              onClick={() => handleSongClick(item)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleSongClick(item);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <img src={item.album.cover_big} alt={item.title} />
              <div>
                <h1>{item.title}</h1>
                <p>{item.artist.name}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
