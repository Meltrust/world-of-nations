import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../logo.png';

const Header = () => (
  <header className="border-bottom py-2 bg-light mb-3 mb-md-5 container">
    <nav className="navbar navbar-expand-md bg-light py-md-3   ">
      <div className="w-100 d-flex flex-row align-items-center justify-content-around">

        {/* <div className="navbar-brand"></div> */}
        <div className="d-flex align-items-center">
          <img src={logo} alt="Logo" className="logo me-4" />
          <h1 className="navbar-brand text-dark fs-2">Space Traveller&apos;s Hub</h1>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <AiOutlineMenu style={{ fontSize: '25px' }} />
        </button>
        <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
          <ul className="navbar-nav lh-5 nav-items-top ">

            <li className="nav-item me-3">
              <NavLink to="/" className="nav-link  ">
                Rockets
              </NavLink>
            </li>
            <li className="nav-item me-3 border-dark">
              <NavLink to="missions" className="nav-link  main-nav-links missions-link">
                Missions
              </NavLink>
            </li>
            <li className="nav-item border border-dark position-relative v-line-nav me-3" />
            <li className="nav-item">
              <NavLink to="profile" className="nav-link  main-nav-links  ">
                My profile
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
