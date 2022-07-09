import Image from 'next/image'

import Arc from './svgs/Arc'
import NavLink from './NavLink'

const Hero2 = () => {

  return (
    <>
      <section className="hero" id="hero">
        <div className="container-fluid text-center p-0">
          <div className="row justify-content-between">
            <div className="col align-self-center px-md-4">
              <div className="py-5 box-container">
                <h1 className="title">
                  {/* <span className="accent-white"> Real estate, </span> */}
                  <span> Real estate, </span>
                  {/* <span className="accent-green"> investment </span> */}
                  <span className="accent-green"> development </span>
                  <span> and </span>
                  <span className="accent-orange"> marketing </span>
                </h1>
                <p className="fs-5">
                  Make the best real estate decisions and get the
                  best value for your investments and time.
                </p>
                <NavLink className="btn btn-accent btn-lg" href="/contact">Let&apos;s Talk</NavLink>
                {/* <NavLink className="btn btn-gold btn-lg" href="/properties"> Find a home</NavLink> */}
                <NavLink className="btn arrow-link" href="/properties"> Find a home</NavLink>
              </div>
            </div>

            <div className="col col-md-4 d-none d-md-flex position-relative p-0">
              <div className="d-flex justify-content-center">
                <Image
                  className="img-fluid m-auto"
                  src="/assets/images/home-400.jpg"
                  alt=""
                  layout='fill'
                  loading="lazy"
                />
              </div>
              {/* <Image className="img-fluid" src="/assets/images/bg-home.jpg" alt="" layout='fill' /> */}

              <div className="hero-decor">
                <Arc />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero2