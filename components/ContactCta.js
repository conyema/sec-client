import Image from 'next/image'
import NavLink from '../components/NavLink'
import Valley from './svgs/Valley'

const ContactCta = () => {

  return (
    <section className="section cta-contact py-5" id="cta">
      <div className="container-fluid container-lg text-center">
        <div className="row row-cols-1">
          {/* <div className="row row-cols-1 row-cols-sm-2 gy-5"> */}
          {/* <div className="col col-sm-7 align-self-center fs-4"> */}
          <div className="col col-sm-8 col-md-6 m-auto fs-4">
            <h2 className="heading fs-1 mb-5">Get in touch </h2>
            <p className="fs-5">
              We are always available to discuss expectations and concerns
              for your exciting projects.
            </p>

            <NavLink href="/contact" className="btn btn-main btn-lg">
              Talk to us
            </NavLink>

          </div>
          {/* <div className="col col-sm-5 d-none d-sm-flex overflow-hidden text-center">
            <Image className="img-fluid m-auto" src="/assets/images/contact.svg" alt="Services" width="300" height="300" loading="lazy" />
          </div> */}
        </div>
      </div>

      {/* <div className="valley-decoration">
        <Valley />
      </div> */}
    </section>
  )
}

export default ContactCta