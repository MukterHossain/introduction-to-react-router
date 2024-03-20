import { Link, NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div className="header">
           <nav>
           <h2>Navbar</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <NavLink to="/posts">Posts</NavLink>
            {/* <Link to="/posts">Posts</Link> */}
            <Link to="/contact">Contact Us</Link>
            <NavLink to="/users"> Users</NavLink>
            {/* <Link to="/users">Users</Link> */}
           </nav>
            
        </div>
    );
};

export default Header;