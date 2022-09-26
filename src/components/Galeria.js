import "../assets/css/galeria.css";
import { useContext } from "react";
import Context from "../Context";
import Heart from "./Heart";

export default function Galeria() {

  const { photoData, setPhotoData } = useContext(Context);

  const isFav = (id) => {
    const checkPhoto = photoData.findIndex((i) => i.id === id);
    photoData[checkPhoto].fav = !photoData[checkPhoto].fav;
    setPhotoData([...photoData]);
  };

  return (
    <div className="galeria grid-home p-3 container">
      {photoData.map((i) => (
        <div className="foto" style={{ backgroundImage: `url(${i.srcs})` }} key={i.id} onClick={ () => isFav(i.id) }>
          <Heart filled={i.fav} />
          <div className="desc-container">
            <p className="desc"> {i.desc} </p>
          </div>
        </div>
      ))}
    </div>
  );
}
