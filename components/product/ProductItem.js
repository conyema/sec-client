import Link from 'next/link'
import Image from 'next/image'

import { GiBed } from 'react-icons/gi';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { TiLocationOutline } from 'react-icons/ti';
import { BiCategory } from 'react-icons/bi';
import { BiCategoryAlt } from 'react-icons/bi';
// import { BiCategoryAlt } from 'react-icons/bi';
import { BiBath } from 'react-icons/bi';
import { BiBed } from 'react-icons/bi';
// import { GiBed } from 'react-icons/gi';

const ProductItem = ({ item }) => {
  // Get product poster
  const image = item.photos[0] || {};
  // const isPoster = image.title == "poster";
  // console.log(image);

  return (
    // <Link href="/properties/[id]" as={`/properties/${item.id}`}>
    //   <a></a>
    // </Link>
    <>
      <div className="card display-card m-auto h-100 text-center">
        <div className="d-flex justify-content-center p-3">
          {/* <div className="d-flex img-thumbnail theme-bg"> */}

          <div
            className={`d-flex ${image.url ? "img-thumbnail theme-bg" : "img-fluid"}`}
          >
            <Image
              // src={isPoster ? image.url : "/assets/icons/sec_logo_light.svg"}
              src={image.url || "/assets/icons/sec_image_light.png"}
              alt={item.title}
              width={image.url ? "300" : "180"}
              height="180"
              loading="lazy"
            />
          </div>
        </div>

        <div className="card-body">
          <h3 className="text-center">
            {item.title}
          </h3>

          {/* <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="text-secondary"> available </div>
            </li>
          </ul> */}
        </div>

        <div>
          <div className="container-fluid ">
            <div className="row row-cols-2 small mb-2 prod-specs">
              <div className="cell">
                <div className="fs-5 fw-bold">{item.bedroom || "-"}</div>
                <div className="small text-gold-50">
                  <div className="stat-label small visually-hidden">Bedrooms</div>
                  {/* <FaBed className="icon" />
                  <GiBed className="icon" /> */}
                  <BiBed className="icon" />
                </div>
              </div>
              <div className="cell">
                <div className="fs-5 fw-bold">{item.bathroom || "-"}</div>
                <div className="small text-gold-50">
                  <div className="stat-label small visually-hidden">Bathrooms</div>
                  <BiBath className="icon" />
                </div>
              </div>
              <div className="cell">
                <div className="fs-5 fw-bold">{item.location || "-"}</div>
                <div className="small text-gold-50">
                  <div className="stat-label small visually-hidden">Location</div>
                  <TiLocationOutline className="icon" />
                </div>
              </div>
              <div className="cell">
                <div className="fs-5 fw-bold">{item.status || "-"}</div>
                <div className="small text-gold-50">
                  <div className="stat-label small visually-hidden">Status</div>
                  <BiCategory className="icon" />
                </div>
              </div>

              {/* <div className="cell">
                <div className="fs-5 fw-bold">{item.category || "-"}</div>
                <div className="small text-gold-50">
                  <div className="stat-label small visually-hidden">Category</div>
                  <BiCategory className="icon" />
                </div>
              </div> */}
              {/* <div className="cell">
                <div className="fs-5 fw-bold">{item.floorSpace || "-"}</div>
                <div className="stat-label small visually-hidden">Sq. Ft.</div>
              </div> */}
            </div>
          </div>

          {/* <div className="p-3">
            <Link href="/properties/[id]" as={`/properties/${item.id}`}>
              <a className="btn arrow-link m-0 w-50 " title="see property">Explore</a>
            </Link>
          </div> */}
        </div>

      </div>
    </>
  )
}

export default ProductItem