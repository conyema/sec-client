// import Link from 'next/link'
import { useRouter } from 'next/router';

import NavLink from '../NavLink'
import SocialList from '../SocialList'
// import MenuBtnSvg from './svgs/MenuBtnSvg'
import Image from 'next/image'

import CloseSvg from '../svgs/CloseSvg'
import Offcanvas from 'react-bootstrap/Offcanvas'


// const MobileNav = ({ show, handleClose, toggleShow }) => {
const MobileNav = ({ show, handleClose }) => {
  const router = useRouter();


  return (
    <>
      <Offcanvas className="theme-bg" show={show} onHide={handleClose} onClick={handleClose} placement="start">
        <div className="offcanvas-header">
          <NavLink className="navbar-brand" href="/" title="Stella Ebam Consulting">
            <div className="site-logo">
              <Image
                className="img-fluid"
                // src={"/assets/icons/sec_logo_light.svg"}
                src={"/assets/icons/logo_light.png"}
                alt="Stella Ebam Consulting"
                width="150"
                height="50"
              />
            </div>

          </NavLink>

          <button className="navbar-toggler shadow-none" type="button" aria-label="Close Menu" title="Close Menu" onClick={handleClose}>
            <CloseSvg />
          </button>
        </div>

        <div className="offcanvas-body">
          <nav>
            <ul className="navbar-nav lh-lg">
              <li className="nav-item">
                <NavLink
                  className={`sidebar-link ${router.pathname == "/" ? "active" : ""}`}
                  href="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`sidebar-link ${router.pathname == "/about" ? "active" : ""}`}
                  href="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`sidebar-link ${router.pathname == "/services" ? "active" : ""}`}
                  href="/services"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`sidebar-link ${router.pathname == "/properties" ? "active" : ""}`}
                  href="/properties"
                >
                  Properties
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`sidebar-link ${router.pathname == "/contact" ? "active" : ""}`}
                  href="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <SocialList />
      </Offcanvas>
    </>
  )
}

export default MobileNav