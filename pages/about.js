import Banner from '../components/Banner'
import ContactCta from '../components/ContactCta'
import Meta from '../components/Meta'
// import NavLink from '../components/NavLink'
import PageSection from '../components/PageSection'
import Breadcrumb from 'react-bootstrap/Breadcrumb'


const About = () => {
  return (
    <>
      <Meta subTitle="About" />
      <Banner title={"Who we are"} />

      <div className="container-fluid container-lg">
        <Breadcrumb className="p-2">
          <Breadcrumb.Item className="link" href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item className="link" active>About</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <PageSection className={"section"} id={"about-us"}>
        <div className="lh-lg fs-5 p-2 pb-5">
          <p>
            Stella Ebam consulting is a registered property development, estate
            surveying and valuation company providing consulting services to the
            real estate industry, financial institutions and the public sector in Nigeria.
            It boasts of a qualified team of experienced professionals who are dedicated
            to redefining luxury living by creating profitable and sustainable projects.
          </p>

          <p>
            Our professional services caters to all stages of the property development
            from research and feasibility studies to marketing and sales management,
            maintenance and general consulting.
          </p>


          <div className="mt-5">
            <h2 className="heading text-center">Our Mission</h2>
            <p>
              Our goal is to deliver quality housing on time without compromising standards,
              thus ensuring that our clients are always satisfied and get the best return on
              investment.
            </p>
          </div>

          {/* <p>
            <NavLink href="/partnership" className="link link-accent">
              Become a partner
            </NavLink>
          </p> */}

        </div>
      </PageSection>

      <ContactCta />

    </>
  )
}

export default About;