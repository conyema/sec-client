// import Link from 'next/link'
import NavLink from '../NavLink'
import SocialList from '../SocialList'
// import MenuBtnSvg from './svgs/MenuBtnSvg'
import Image from 'next/image'

import CloseSvg from '../svgs/CloseSvg'
import Offcanvas from 'react-bootstrap/Offcanvas'


const MobileNav = ({ show, onHide, onClick }) => {

  return (
    <>
      <Offcanvas className="theme-bg" show={show} onHide={onHide} placement="end">
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

          <button className="navbar-toggler shadow-none" type="button" aria-label="Close Menu" title="Close Menu" onClick={onClick}>
            <CloseSvg />
          </button>
        </div>

        <div className="offcanvas-body">
          <nav>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="sidebar-link" href="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="sidebar-link" href="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="sidebar-link" href="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="sidebar-link" href="/properties">Properties</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="sidebar-link" href="/contact">Contact</NavLink>
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