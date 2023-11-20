import React from 'react';
const useSampleCardGrid = () => {
  const data = {
    items: [
        // Añade objetos que representen los datos de tus tarjetas
        { id: 1, title: "Card Title 1", image: "SampleCard_Image.jpg" },
      { id: 2, title: "Card Title 2", image: "SampleCard_Image.jpg" },
      { id: 3, title: "Card Title 3", image: "SampleCard_Image.jpg" },
      { id: 4, title: "Card Title 4", image: "SampleCard_Image.jpg" },
      { id: 5, title: "Card Title 5", image: "SampleCard_Image.jpg" },
      { id: 6, title: "Card Title 6", image: "SampleCard_Image.jpg" },
    ]
  };

  const fns = {};

  return { data, fns };
};

export default useSampleCardGrid;
