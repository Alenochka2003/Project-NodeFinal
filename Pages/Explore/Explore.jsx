import './Explore.css';

import car from './img/car.png';
import Girl_blond from './img/Girl_blond.png';
import Windows from './img/Windows.png';
import man from './img/man.png';
import japan from './img/japan.png';
import doroga from './img/doroga.png';
import man_with_cap from './img/man_with_cap.png';
import zontik from './img/zontik.png';
import Girl_brunet from './img/Girl_brunet.png';
import Gory from './img/Gory.png';

const images = [
  car,
  Girl_blond,
  { src: Windows, tall: true },
  man,
  japan,
  { src: doroga, tall: true },
  man_with_cap,
  zontik,
  Girl_brunet,
  Gory,
];

function Explore() {
  return (
    <div className="explore-grid">
     
      {images.map((img, index) => (
        <img
          key={index}
          src={typeof img === 'string' ? img : img.src}
          alt={`Random ${index}`}
          className={`explore-image ${img.tall ? 'tall' : ''}`}
        />
      ))}
    </div>
    
  );
}

export default Explore;




// import './Explore.css';

// import car from './img/car.png';
// import Girl_blond from './img/Girl_blond.png'
// import Windows from './img/Windows.png'
// import man from './img/man.png'
// import japan from './img/japan.png';
// import doroga from './img/doroga.png';
// import man_with_cap from './img/man_with_cap.png'
// import zontik from './img/zontik.png'
// import Girl_brunet from './img/Girl_brunet.png'
// import Gory from './img/Gory.png'


// const images = [
//   car,
//   Girl_blond,
//   Windows,
//   man,
//   japan,
//   doroga,
//   man_with_cap,
//   zontik,
//   Girl_brunet,
//   Gory
  
// ];

// function Explore() {
//   return (
//     <div className="explore-grid">
//       {images.map((src, index) => (
//         <img key={index} src={src} alt={`Random ${index}`} className="explore-image" />
//       ))}
//     </div>
//   );
// }

// export default Explore;
