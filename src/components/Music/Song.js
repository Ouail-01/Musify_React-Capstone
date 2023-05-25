import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  FaPlay, FaPause, FaStar, FaRegStar,
} from 'react-icons/fa';
import '../../styles/Song.css';

export default function Song() {
  const music = useSelector((state) => state.music);
  const audio = new Audio(music.music.preview);
  const [clicked, setClicked] = useState(false);

  const play = () => {
    audio.play();
  };

  const pause = () => {
    audio.pause();
  };

  const saveSong = () => {
    if (clicked) {
      localStorage.removeItem(music.music.title);
      setClicked(false);
    } else {
      localStorage.setItem(music.music.title, JSON.stringify(music.music));
      setClicked(true);
    }
  };

  useEffect(() => {
    play();
    return () => {
      pause();
    };
  }, [audio, music]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {music.music.title && (
        <>
          <div className="trackSong">
            <h2>{music.music.title}</h2>
            <div>
              <FaPlay onClick={play} />
              <FaPause onClick={pause} className="pause" />
              {clicked ? (
                <FaStar onClick={saveSong} />
              ) : (
                <FaRegStar onClick={saveSong} />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
