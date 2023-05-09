import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box, apparelName }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500px" heigh="auto" />
        <p className="list-box">{apparelName.name}</p>
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
