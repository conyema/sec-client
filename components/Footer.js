import FooterContact from "./footer-Items/FooterContact"
import FooterBranding from "./footer-Items/FooterBranding"
import FooterNav from "./footer-Items/FooterNav"
import GoTopSvg from "./svgs/GoTopSvg"
import SocialList from './SocialList'

const Footer = ({ title, brand, contact }) => {

  return (
    <footer className="site-footer">
      <div className="container-fluid container-lg text-center">
        <div className="row row-cols-1 row-cols-md-2 py-5">
          <div className="col col-sm-9 col-md-4 mt-5 m-auto">
            <FooterBranding title={title} {...brand} />
            <SocialList />
          </div>
          <div className="col col-md-8 mt-5 text-start">
            <div className="row gy-5">
              <div className="col-12 col-sm-4">
                <FooterNav />
              </div>
              <div className="col-12 col-sm-8">
                <FooterContact {...contact} />
                {/* <SocialList /> */}
              </div>
            </div>
          </div>
        </div>

        {/* <SocialList /> */}
        <a id="go-to-top" href="#main-content" className="accent-green" data-visible="true" title="Back to top">
          <span className="visually-hidden btn-main p-1 small"> Back to top</span>
          <GoTopSvg />
        </a>

        <hr className="mt-0 mb-5" />

        <div className="row row-cols-1 row-cols-sm-2 muted text-sm-center mt-3">
          <div className="col">
            <p><small>{`Ⓒ ${new Date().getFullYear()} ${title}`}</small></p>
          </div>
          <div className="col">
            <p>
              <small>
                <span>Designed by an </span>
                {/* <a className="d-inline-block link" href="https://conyema.github.io/" target="_blank" rel="noopener" title="Chinedum Onyema">Owl</a> */}
                <a className="d-inline-block link" href="https://conyema.github.io/" target="_blank" rel="noreferrer" title="Chinedum Onyema">Owl</a>
              </small>
            </p>
          </div>
        </div>
        {/* <a className="go-to-top-link btn p-1 btn-accent rounded-circle" id="go-to-top" href="#main-content" data-visible="true" title="Back to top">
          <span className="visually-hidden"> Back to top</span>
          <GoTopSvg />
        </a> */}
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  title: "Stella Ebam Consulting",
  brand: {
    // about: `
    //   We are a company committed to helping you make the best
    //   real estate development, investment and marketing decisions.
    // `,
    about: `
        We provide consulting services to the real estate industry, 
        financial institutions and the public sector in Nigeria.
    `,
    // logo: "/assets/icons/sec_logo_dark.png",
    logo: "/assets/icons/logo_dark.png",
  },
  contact: {
    address: {
      line1: "Plot 62, Bala Kona Street, ",
      line2: "Kado District, FCT Abuja."
    },
    email: "contact@stellaebamconsulting.com",
    phones: ["+2348033533945", "+2347084111505"],
  },
}

export default Footer