import { Link } from "react-router-dom";
import "./Home.css";
import c1 from './image/banner.jpg';

const Home = () => {
  return (
    <div className="home1">
      <div className="homeright">
        <h1 className="home-head">FOR ALL YOUR FURNITURE NEEDS</h1>
        <p className="home-para">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores
          perspiciatis, illo maxime voluptatem a itaque suscipit.
        </p>
        <div className="home-button">
          <Link to="/contact" className="button1">Contact Us</Link>
          <Link to="/about" className="button2">About Us</Link>
        </div>
      </div>
    
      <div className="home-image">
        <img src={c1} alt="Furniture" className="w-3/4 md:w-full rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Home;
