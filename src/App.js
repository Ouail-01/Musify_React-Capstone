import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Home/Header';
import './styles/index.css';
import Home from './routes/Home';
import Music from './routes/Music';
import Search from './routes/Search';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        ,
        <Route path="/music/:id" element={<Music />} />
        ,
        <Route path="/searchResults/:id" element={<Search />} />
        ,
        <Route path="*" element={<Home />} />
        ,
      </Routes>
    </Router>
  </div>
);

export default App;
