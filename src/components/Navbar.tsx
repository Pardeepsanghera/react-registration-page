import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      {/* Logo */}
      <Link to='/' className='navbar-brand'>
        Home
      </Link>

      {/* Menu */}
      <div className='collapse navbar-collapse'>
        <div className='navbar-nav'>
          <Link className='nav-link' to='/'>
            Registration
          </Link>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
