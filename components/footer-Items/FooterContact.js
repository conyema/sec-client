import { BsGeoAltFill } from 'react-icons/bs';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { BsTelephoneFill } from 'react-icons/bs';
// import { MdLocationPin } from 'react-icons/md';
// import { MdLocationOn } from 'react-icons/md';
// import { MdEmail } from 'react-icons/md';
// import { MdMail } from 'react-icons/md';

const FooterContact = ({ address, email, phones }) => {


  return (
    <>
      <h3 className="heading">Contact</h3>

      <ul className="list-unstyled">
        <li>
          <address className="d-flex">
            <div className="d-flex align-items-center text-black-50">
              {/* <MdLocationPin />
              <MdLocationOn /> */}
              <BsGeoAltFill />
            </div>
            <p className="m-0">
              <span className="my-0 visually-hidden"> Office:</span>
              <span className="nav-link">{address}</span>
            </p>
          </address>
        </li>
        <li>
          <address className="d-flex">
            <div className="d-flex align-items-center text-black-50">
              <BsTelephoneFill />
            </div>
            <p className="m-0">
              <span className="my-0 visually-hidden"> Call:</span>
              <span className="nav-link">
                {/* <a className="link" href="tel:000000000"></a>,
                <a className="link" href="tel:111111111"> 44444444 </a> */}
                {phones.map((phone, idx) => (
                  <span key={idx}>
                    <a className="link" href={`tel:${phone}`}>{phone}</a>
                    {idx < (phones.length - 1) ? <span className="me-1"> , </span> : ""}
                  </span>
                ))}
              </span>
            </p>
          </address>
        </li>
        <li>
          <address className="d-flex">
            <div className="d-flex align-items-center text-black-50">
              {/* <MdEmail />
              <MdMail /> */}
              <BsFillEnvelopeFill />
            </div>
            <p className="m-0">
              <span className="my-0 visually-hidden"> Email:</span>
              <a className="nav-link link" href={`mailto:${email}`}>{email}</a>
            </p>
          </address>
        </li>
      </ul>
    </>
  )
}

export default FooterContact