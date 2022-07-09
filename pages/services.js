import Banner from '../components/Banner'
import ContactCta from '../components/ContactCta'
import PageSection from '../components/PageSection'
import Meta from '../components/Meta'
import OfferCard from '../components/OfferCard'
import Breadcrumb from 'react-bootstrap/Breadcrumb'



const Services = ({ services }) => {

  return (
    <div>
      {/* <PageSection className="Banner Banner-bg" id="Banner">
        <div className="container-fluid container-lg text-center">
          <h1 className="title"><span className="sub-title"> Who we are</span></h1>
        </div>
      </PageSection> */}
      <Meta subTitle="Services" />
      <Banner title={"What we offer"} />

      <div className="container-fluid container-lg">
        <Breadcrumb className="p-2">
          <Breadcrumb.Item className="link" href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item className="link" active>Services</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <PageSection className={"section"} id={"services"} title={"Our Expertise"} >
        <p className="fs-5 py-5 ps-2">
          Our professional services cover the stages of the property development
          from research and feasibility studies to marketing and sales management,
          maintenance and general consulting.
        </p>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 py-5 gy-5">
          {services.map((item, idx) => (
            <div className="col" key={idx}>
              <OfferCard {...item} />
            </div>
          ))}
        </div>


      </PageSection>

      <ContactCta />
      {/* <PageSection className={"section"} id={"services"} title={"Find a home"} >

      </PageSection> */}

    </div>
  )
}

Services.defaultProps = {
  services: [
    {
      title: "Property Development",
      body: "Build the estate of your dreams or add value to your existing property.",
      // features: ["Build the estate of your dreams", "Property renovation", "Add value to your existing property"]
    },
    {
      title: "Property Marketing/Sales",
      body: "Let ur accomplished sales agents can help you get the best deal from the right buyer and market.",
      // features: []
    },
    {
      title: "Property Management",
      body: `Entrust us with managing all the tenant leases, rent, communications and on-time payment while you focus on your goals for financial management and maximizing profit.`,
      // features: ["Focus on financial management goals and maximizing profit."]
    },
    {
      title: "Facility Management",
      body: `Employ the services of our experienced and skilled team to ensure functionality, safety, security, comfort and sustainability of your property and its infrastructure.`,
      // features: ['Employ the services of our experienced', 'Ensure functionality, safety, security, comfort and sustainability of your property and its infrastructure.']
    },
    {
      title: "Valuation of all purposes",
      body: `Know a property's worth. We can help you determine the current market value of a property.`,
      // features: ["Know a property's worth", "Determine the current market value of a property."]
    },
    {
      title: "Compulsory Acquisition & Compensation",
      body: `Make the process of acquiring private property to provide public facilities for the common good seamless and compensation of the property owner satisfactory.`,
      // features: []
    },
    {
      title: "Property Rating",
      body: `Our experienced and qualified team of estate valuers can assess landed properties to determine the appropriate tax or tenement rate.`,
      // features: []
    },
    {
      title: "Feasibility Studies & Project Appraisal",
      body: `Get your next project right. Before committing resources, time, or budget, let our team help you determine when and how your real estate project can succeed.`,
      // features: []
    },
    // {
    //   title: "Feasibility Studies & Project Appraisal",
    //   body: `Get your next project right. Before committing resources, time, or budget, let our team help you determine when and how your real estate project can succeed`,
    //   link: {
    //     href: "",
    //     text: ""
    //   },
    //   image: "",
    // features: []
    // },
  ],
}


export default Services;