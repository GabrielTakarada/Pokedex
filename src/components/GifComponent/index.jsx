import React from "react";

const GifComponent = (gifUrl) => {
  return (
    <div>
      <img src={gifUrl.src} alt="GIF Animado" />
    </div>
  );
};

export default GifComponent;
