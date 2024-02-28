import React, { useState } from "react";
import "../Paris.css";
import img1 from "../../images/img-1.jpg";
import img2 from "../../images/img-2.jpg";
import img3 from "../../images/img-3.jpg";
import img4 from "../../images/img-4.jpg";

const Paris = () => {
  const [imageLoaded1, setImageLoaded1] = useState(false);
  const [imageLoaded2, setImageLoaded2] = useState(false);
  const [imageLoaded3, setImageLoaded3] = useState(false);
  const [imageLoaded4, setImageLoaded4] = useState(false);

  const handleImageLoad1 = () => {
    setImageLoaded1(true);
  };

  const handleImageLoad2 = () => {
    setImageLoaded2(true);
  };

  const handleImageLoad3 = () => {
    setImageLoaded3(true);
  };

  const handleImageLoad4 = () => {
    setImageLoaded4(true);
  };

  return (
    <div className="paris-container">
      <div className="paris-video-container">
        <video className="paris-video" src="/videos/ParisVideo.mp4" autoPlay loop muted />
      </div>
      <div className="paris-info">
        <div className="paris-info-left">
          <div className="info-box">
            <img
              src={img1}
              alt="EiffelTower"
              className={`info-image ${imageLoaded1 ? "loaded" : ""}`}
              onLoad={handleImageLoad1}
            />
            <h2>Eiffel Tower</h2>
            <p>The Eiffel Tower, a wrought-iron lattice tower on the Champ de Mars in Paris, France.</p>
          </div>
          <div className="info-box">
            <img
              src={img2}
              alt="LouvreMuseum"
              className={`info-image ${imageLoaded2 ? "loaded" : ""}`}
              onLoad={handleImageLoad2}
            />
            <h2>Louvre Museum</h2>
            <p>The Louvre Museum is the world's largest art museum and a historic monument in Paris, France.</p>
          </div>
        </div>
        <div className="paris-info-right">
          <div className="info-box">
            <img
              src={img3}
              alt="Montmartre"
              className={`info-image ${imageLoaded3 ? "loaded" : ""}`}
              onLoad={handleImageLoad3}
            />
            <h2>Montmartre</h2>
            <p>Montmartre is a large hill in Paris's 18th arrondissement.</p>
          </div>
          <div className="info-box">
            <img
              src={img4}
              alt="ChampsÉlysées"
              className={`info-image ${imageLoaded4 ? "loaded" : ""}`}
              onLoad={handleImageLoad4}
            />
            <h2>Champs-Élysées</h2>
            <p>The Champs-Élysées is an avenue in the 8th arrondissement of Paris.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paris;