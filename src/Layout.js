import { Outlet, Link } from "react-router-dom";
import './layout.css'

const Layout = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="nav1 ">
        <h2>EDGECUT</h2>
       <ul className="top1">
        <li className="top2"><Link to="/home">HOME</Link></li>
        <li className="top2"><Link to="/about">ABOUT</Link></li>
        <li className="top2"><Link to="/furniture">FURNITURE</Link></li>
        <li className="top2"><Link to="/blog">BLOGS</Link></li>
        <li className="top2"><Link to="/contact">CONTACT US</Link></li>
        <li className="top2"><Link to="/login">LOGIN</Link></li>

       </ul>
      </nav>

     

      
      <Outlet />
      
    </div>
  );
};

export default Layout;
