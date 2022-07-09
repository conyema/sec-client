// import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/router';

// import { MdAccountCircle } from 'react-icons/md';
import NavLink from '../NavLink'
import MenuSvg from '../svgs/MenuSvg'
// import CloseBtnSvg from '../svgs/CloseBtnSvg'
// import Offcanvas from 'react-bootstrap/Offcanvas'
// import Button from 'react-bootstrap/Button'
import MobileNav from './MobileNav'
import { useState } from 'react'


const TopNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const toggleShow = () => setShow((s) => !s);

  const router = useRouter();

  return (
    <>
      <nav className="navbar navbar-expand-md">

        {/* Site Logo */}
        <NavLink className="navbar-brand d-inline-flex  p-0" href="/" title="Stella Ebam Consulting">
          <Image
            className="img-fluid"
            // src={"/assets/icons/sec_logo_dark.png"}
            src={"/assets/icons/logo_dark.png"}
            alt="Stella Ebam Consulting"
            width="150"
            height="50"
          />

        </NavLink>

        {/* Navigation */}
        <div className="collapse navbar-collapse justify-content-end" id="nav-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={`nav-link header-link ${router.pathname == "/" ? "active" : ""}`}
                href="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link header-link ${router.pathname == "/about" ? "active" : ""}`}
                href="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link header-link ${router.pathname == "/services" ? "active" : ""}`}
                href="/services"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link header-link ${router.pathname == "/properties" ? "active" : ""}`}
                href="/properties"
              >
                Properties
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link header-link ${router.pathname == "/contact" ? "active" : ""}`}
                href="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          {/* Authentication */}
          {/* <div>
            <div>
              <MdAccountCircle className="icon" />
            </div>
            <span>Account</span>
          </div> */}

          {/* Mobile(side) navigation toggle */}
          <button className="navbar-toggler shadow-none" type="button" aria-label="Open Menu" title="Open Menu" onClick={toggleShow}>
            <MenuSvg />
          </button>
        </div>

      </nav>

      <MobileNav show={show} handleClose={handleClose} toggleShow={toggleShow} />
    </>
  )
}

export default TopNav