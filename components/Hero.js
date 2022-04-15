import Wave from './svgs/Wave'
import NavLink from '../components/NavLink'

const Hero = () => {

  return (
    <>
      <section className="hero" id="hero">
        <div className="container-fluid container-lg text-center mb-5">
          {/* <div className="row row-cols-1 row-cols-md-2 g-4"> */}
          <div className="row row-cols-1">
            <div className="col col-md-8 px-sm-4 mb-5">
              <div className="deco-screen-dark p-2">
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
                {/* <NavLink className="btn btn-accent btn-lg" href="/partnership"> Partner with us</NavLink> */}
                <NavLink className="btn btn-accent btn-lg" href="/contact">Let&apos;s Talk</NavLink>
                {/* <NavLink className="btn btn-white btn-lg" href="/properties"> Find a home</NavLink> */}
                <NavLink className="btn btn-gold btn-lg" href="/properties"> Find a home</NavLink>
              </div>
            </div>

            {/* <div className="col overflow-hidden text-center">
              <div className="carousel" id="hero-gallery" data-bs-ride="carousel">
                <div className="card img-container m-auto animate__animated animate__fadeIn">
                  <img className="img-fluid rounded" src="/assets/images/house.jpg" alt="" width="400" height="400" />
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* <div className="wave-decoration">
          <Wave />
        </div> */}
      </section>
    </>
  )
}

export default Hero