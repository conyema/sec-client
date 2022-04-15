import NavLink from '../NavLink'


const FooterNav = () => {

  return (
    <>
      <h3 className="heading ps-sm-3">Company</h3>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink className="nav-link footer-link" href="/about">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link footer-link" href="/portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link footer-link" href="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link footer-link" href="#">Partnership</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link footer-link" href="/contact">Get in touch</NavLink>
        </li>
      </ul>
    </>
  )
}

export default FooterNav