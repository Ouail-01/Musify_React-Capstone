import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaStar } from 'react-icons/fa';
import SearchEngine from './SearchEngine';
import '../../styles/Header.css';

const Header = () => (
  <header>
    <ul>
      <li>
        <Link to="/">
          <FaAngleLeft className="icon" />
        </Link>
      </li>
      <li>
        <h4>Music list</h4>
      </li>
      <li>
        <Link to="/favorites">
          <FaStar className="icon" />
        </Link>
        <SearchEngine />
      </li>
    </ul>
  </header>
);
export default Header;
