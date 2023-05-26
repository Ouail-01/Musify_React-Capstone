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
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    setIsPlaying(true);
    audio.play().catch((error) => {
      setIsPlaying(false);
      console.error('Failed to play audio:', error);
    });
  };

  const pause = () => {
    setIsPlaying(false);
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
    if (isPlaying) {
      audio.play().catch((error) => {
        setIsPlaying(false);
        console.error('Failed to play audio:', error);
      });
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isPlaying, audio]);

  return (
    <>
      {music.music.title && (
        <>
          <div className="trackSong">
            <h2>{music.music.title}</h2>
            <div>
              {isPlaying ? (
                <FaPause onClick={pause} className="pause" />
              ) : (
                <FaPlay onClick={play} />
              )}
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
