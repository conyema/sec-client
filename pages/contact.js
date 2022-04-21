import Banner from '../components/Banner'
import ContactInfo from '../components/ContactInfo'
import Map from '../components/Map'
import Meta from '../components/Meta'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import mapImg from '../public/assets/images/map.jpg'


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
          <div className="row row-cols-1 row-cols-md-2 gy-5 py-5">
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
    address: "Plot 62, Bala Kona Street, Kado District, FCT Abuja",
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
    img: mapImg,
  }
}


export default Contact;