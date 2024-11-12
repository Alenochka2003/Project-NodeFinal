// import { Link } from 'react-router-dom';
// import "./Footer.css"

// const Footer = () => {
//   return (
//     <footer className="w-full h-[158px] flex flex-col items-center justify-start gap-[48px] px-[15px] pt-[24px] bg-color-light text-[12px] text-color-dark-gray z-30">
//       <nav className="flex gap-[50px]">
//         <Link href="#" className="">Home</Link>
//         <Link href="#" className="">Search</Link>
//         <Link href="#" className="">Explore</Link>
//         <Link href="#" className="">Messages</Link>
//         <Link href="/#" className="">Notifications</Link>
//         <Link href="#" className="">Create</Link>
//       </nav>
//       <span>&copy; 2024 ICHgram</span>
//     </footer>
//   );
// };

// export default Footer;



import './Footer.css';
import footer from './footer.svg';

const Footer = () => (
  <footer className="footer-container">
    <div className='footer-logo'>
    <img src={footer} alt="Footer Background" className="footer-image" />
    <h2> You,ve seen all the updates </h2>
    <p>You have viewed all new publications </p>
    </div>
    <nav className="footer-nav">
      <a href="#">Home</a>
      <a href="#">Search</a>
      <a href="#">Explore</a>
      <a href="#">Messages</a>
      <a href="#">Notificaitons</a>
      <a href="#">Create</a>
      {/* Другие элементы */}
    </nav>
    <span>&copy; 2024 ICHgram</span>
  </footer>
);

export default Footer;
