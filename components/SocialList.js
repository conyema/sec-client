// import Link from 'next/link'

import { FiTwitter } from 'react-icons/fi';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';



const SocialList = ({ linkedin = "#", instagram = "#", facebook = "#", twitter = "#" }) => {

  return (
    <div>
      {/* <p className="title mb-2 fs-5 text-center"> */}
      <p className="heading mb-0 fs-6 text-center visually-hidden">
        <strong>
          <small>follow us</small>
        </strong>
      </p>

      <ul className="nav social-list justify-content-center">
        <li className="nav-item">
          <a className="link-icon" href={linkedin} target="_blank" rel="noreferrer" title="Linkedin">
            <FaLinkedinIn className="m-1" />
          </a>
        </li>

        <li className="nav-item">
          <a className="link-icon" href={instagram} target="_blank" rel="noreferrer" title="Instagram">
            <FaInstagram className="m-1" />
          </a>
        </li>

        <li className="nav-item">
          <a className="link-icon" href={facebook} target="_blank" rel="noreferrer" title="Facebook">
            {/* <FaFacebookF /> */}
            <GrFacebookOption className="m-1" />
          </a>
        </li>

        <li className="nav-item">
          <a className="link-icon" href={twitter} target="_blank" rel="noreferrer" title="Twitter">
            <BsTwitter className="m-1" />
            {/* <FiTwitter /> */}
          </a>
        </li>
      </ul>
    </div>
  )
}

SocialList.defaultProps = {
  instagram: "https://instagram.com/stellaebamconsulting?utm_medium=copy_link",
}


export default SocialList;