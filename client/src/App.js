import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { useDispatch } from 'react-redux';
import { getVideogames } from './redux/actions/getVideogames';
import { getGenres } from './redux/actions/getGenres';

function App() {
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideogames());
        dispatch(getGenres());
    // eslint-disable-next-line
    }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
