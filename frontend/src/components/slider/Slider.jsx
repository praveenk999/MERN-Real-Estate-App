// import { useState } from "react";
// import "./slider.scss";

// function Slider({ images }) {
//   const [imageIndex, setImageIndex] = useState(null);

//   const changeSlide = (direction) => {
//     if (direction === "left") {
//       if (imageIndex === 0) {
//         setImageIndex(images.length - 1);
//       } else {
//         setImageIndex(imageIndex - 1);
//       }
//     } else {
//       if (imageIndex === images.length - 1) {
//         setImageIndex(0);
//       } else {
//         setImageIndex(imageIndex + 1);
//       }
//     }
//   };

//   return (
//     <div className="slider">
//       {imageIndex !== null && (
//         <div className="fullSlider">
//           <div className="arrow" onClick={() => changeSlide("left")}>
//             <img src="/arrow.png" alt="" />
//           </div>
//           <div className="imgContainer">
//             <img src={images[imageIndex]} alt="" />
//           </div>
//           <div className="arrow" onClick={() => changeSlide("right")}>
//             <img src="/arrow.png" className="right" alt="" />
//           </div>
//           <div className="close" onClick={() => setImageIndex(null)}>
//             X
//           </div>
//         </div>
//       )}
//       <div className="bigImage">
//         <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
//       </div>
//       <div className="smallImages">
//         {images.slice(1).map((image, index) => (
//           <img
//             src={image}
//             alt=""
//             key={index}
//             onClick={() => setImageIndex(index + 1)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Slider;

import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      setImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    } else {
      setImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="/arrow.png" alt="left arrow" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="slider image" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src="/arrow.png" className="right" alt="right arrow" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="main image" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1, 3).map((image, index) => (
          <img
            src={image}
            alt={`small image ${index + 1}`}
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
        {images.length > 4 ? (
          <div className="overlayImage" onClick={() => setImageIndex(3)}>
            <img src={images[3]} alt="overlay image" />
            <div className="overlayText">+{images.length - 3}</div>
          </div>
        ) : (
          images[3] && (
            <img
              src={images[3]}
              alt="small image 4"
              onClick={() => setImageIndex(3)}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Slider;
