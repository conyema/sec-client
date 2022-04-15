import NavLink from '../NavLink'
import Image from 'next/image'

const FooterBranding = ({ title, about, logo }) => {

  return (
    <>
      <div className="mb-4">
        {/* <a href="/" title={title}>
          <img className="img-fluid" src={logo} alt={title} width="150" height="50" loading="lazy" />
        </a> */}
        <NavLink href="/" title={title}>
          <Image
            className="img-fluid"
            src={logo}
            alt={title}
            width="150"
            height="50"
            loading="lazy"
          />
        </NavLink>
      </div>
      <p className="fst-italic small">{about}</p>
    </>
  )
}

export default FooterBranding