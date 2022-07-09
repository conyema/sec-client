import Image from 'next/image'

import NavLink from '../components/NavLink'
// import ArrowRightSvg from './svgs/ArrowRightSvg'

import { MdOutlineArrowForwardIos } from 'react-icons/md'

// import styles from '../styles/Home.module.css'

const OfferCard = ({ image, title, body, features, link }) => {
  // const image.icon = image.icon || false;

  return (
    // <Link href="/properties/[id]" as={`/properties/${item.id}`}>
    //   <a></a>
    // </Link>
    <>
      <div className="card">


        {image &&
          <div className="d-flex justify-content-center p-3">
            {/* <div className="d-flex img-thumbnail theme-bg"> */}
            <div
              className={`d-flex ${image.icon ? "img-fluid" : "img-thumbnail"}`}
            >
              <Image
                src={image.src}
                alt={title}
                width={image.icon ? "60" : "300"}
                height={image.icon ? "60" : "180"}
                loading="lazy"
              />
            </div>
          </div>
        }

        <div className="card-body">
          {title &&
            <h3 className="heading text-center">
              {title}
            </h3>
          }

          {body &&
            <p>{body}</p>
          }


          {features &&
            <ul className="list-unstyled check-list text-start">
              {features.map((feature, idx) => (
                <li key={idx}>
                  {/* <div> {feature} </div> */}
                  {feature}
                </li>
              ))}
            </ul>
          }
        </div>


        {link &&
          <div className="text-center p-2">
            {/* <NavLink href={link.href} className={"btn btn-main m-0 w-75"}>
              {link.text}
              <span className="ms-1"><ArrowRightSvg /></span>
            </NavLink> */}
            <NavLink href={link.href} className={"arrow-link"}>
              {link.text}
              {/* <span className="ms-1"><ArrowRightSvg /></span> */}

              <MdOutlineArrowForwardIos className="bi ms-1" />
            </NavLink>
          </div>
        }
      </div>
    </>
  )
}

export default OfferCard