import Banner from '../components/Banner'
import ContactInfo from '../components/ContactInfo'
import Map from '../components/Map'
import Meta from '../components/Meta'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import mapImg from '../public/assets/images/map.png'


const Contact = ({ contact, map }) => {


  return (
    <>
      <Meta subTitle="Contact" />
      <Banner title={"Contact Us"} />

      <div className="container-fluid container-lg">
        <Breadcrumb className="p-2">
          <Breadcrumb.Item className="link" href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item className="link" active>Contact</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <section className="section" id="contact">
        <div className="container-fluid container-lg">
          <div className="row row-cols-1 row-cols-md-2 gy-5 py-5 lh-lg">
            <div className="col">
              <ContactInfo {...contact} />
            </div>
            <div className="col text-center">
              <Map {...map} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Contact.defaultProps = {
  contact: {
    // address: "Plot 62, Bala Kona Street, Kado District, FCT Abuja",
    address: {
      line1: "Plot 62, Bala Kona Street, ",
      line2: "Kado District, FCT Abuja."
    },
    email: "contact@stellaebamconsulting.com",
    phones: ["+2348033533945", "+2347084111505"],
    openHours: [
      {
        day: "Monday - Friday",
        time: "8am - 6pm"
      },
      {
        day: "Saturday",
        time: "9am - 4pm"
      },
      {
        day: "Sunday",
        time: "closed"
      }
    ]
  },
  map: {
    link: "https://goo.gl/maps/A6nPRbfiwWJkUQyn8",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.769703887336!2d7.435644690225868!3d9.084732447946934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e753477dc2609%3A0xa1a471b8aea6bc66!2s62%20Bala%20Kona%20St%2C%20Kado%20900108%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2suk!4v1645443236061!5m2!1sen!2suk",
    imgSrc: mapImg,
  }
}


export default Contact;