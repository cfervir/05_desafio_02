import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Context from "./Context";

import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {

  const [photoData, setPhotoData] = useState([]);
  const sharedPhotos = { photoData, setPhotoData };

  const endpoint = "/fotos.json";
  const obtainData = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let filteredPhotos = data.photos.map((e => ({
          id: e.id,
          srcs: e.src.medium,
          srch: e.src.large2x,
          desc: e.alt,
          fav: false
        })))
        setPhotoData(filteredPhotos)
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    obtainData(endpoint);
  }, []);

  return (
    <div className="App">
      <Context.Provider value={ sharedPhotos }>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
