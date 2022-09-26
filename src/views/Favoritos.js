import "../assets/css/galeria.css";
import { useContext } from "react";
import Context from "../Context";

export default function Favoritos() {

  const { photoData, setPhotoData } = useContext(Context);

  const removeFav = (id) => {
    const checkPhoto = photoData.findIndex((i) => i.id === id);
    photoData[checkPhoto].fav = !photoData[checkPhoto].fav;
    setPhotoData([...photoData]);
  };
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <p className="title-desc">La imágen desaparecerá de favoritos una vez que hagas click.</p>
      <div className="p-3 galeria grid-fav container">
        {photoData.filter((f) => f.fav === true).map((i) => (
          <a href={i.srch} target="_blank" rel="noreferrer" key={i.id} onClick={ () => removeFav(i.id) }>
            <div className="foto-fav" style={{ backgroundImage: `url(${i.srcs})` }}>
              <div className="desc-container">
                <p className="desc"> {i.desc} </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}