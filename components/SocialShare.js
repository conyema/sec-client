// import Link from 'next/link'

// import { FiTwitter } from 'react-icons/fi';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
// import { FaInstagram } from 'react-icons/fa';
import { BsShareFill } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';



const SocialShare = ({ url }) => {

  return (
    <div className="d-flex align-items-center justify-content-end">
      {/* <p className="heading mb-0 fs-6 text-center visually-hidden"> */}
      <p className="m-0 fs-5 accent-orange">
        <BsShareFill className="me-3" />
        <small className="visually-hidden">Share Property</small>
      </p>

      <ul className="nav social-list fs-5">
        <li className="nav-item">
          <a className="link-icon" href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} target="_blank" rel="noreferrer" title="Share on Linkedin">
            <FaLinkedinIn className="m-1" />
          </a>
        </li>

        <li className="nav-item">
          <a className="link-icon" href={`http://www.facebook.com/share.php?u=${url}`} target="_blank" rel="noreferrer" title="Share on Facebook">
            <GrFacebookOption className="m-1" />
          </a>
        </li>

        <li className="nav-item">
          <a className="link-icon" href={`https://twitter.com/intent/tweet?url=${url}`} target="_blank" rel="noreferrer" title="Share on Twitter">
            <BsTwitter className="m-1" />
          </a>
        </li>
      </ul>
    </div>
  )
}


// SocialShare.defaultProps = {
//   twitter: "https://twitter.com/intent/tweet?url=",
//   facebook: "http://www.facebook.com/share.php?u=hubspot.com",
//   linkedIn: "https://www.linkedin.com/sharing/share-offsite/?url="
// }


export default SocialShare;