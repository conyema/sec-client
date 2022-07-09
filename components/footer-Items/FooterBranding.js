import NavLink from '../NavLink'
import Image from 'next/image'

const FooterBranding = (props) => {

  return (
    <>
      <div className="mb-4">
        {/* <a href="/" title={props.title}>
          <img className="img-fluid" src={props.logo} alt={props.title} width="150" height="50" loading="lazy" />
        </a> */}
        <NavLink href="/" title={props.title}>
          <Image
            className="img-fluid"
            src={props.logo}
            alt={props.title}
            width="150"
            height="50"
            loading="lazy"
          />
        </NavLink>
      </div>
      {/* <p className="fst-italic small">{props.about}</p> */}
      <p className=" small">{props.about}</p>
    </>
  )
}

export default FooterBranding