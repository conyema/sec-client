import Link from 'next/link'
import Image from 'next/image'

// import { GiPayMoney } from 'react-icons/gi';
// import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { TiLocationOutline } from 'react-icons/ti';
// import { BiCategory } from 'react-icons/bi';
import { BiBath } from 'react-icons/bi';
import { BiBed } from 'react-icons/bi';
// import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { FaChevronRight } from 'react-icons/fa';

import secLogo from '../../public/assets/icons/sec_image_light.png';
import moneyFormatter from '../../lib/moneyFormatter';


const ProductCard = ({ item }) => {
  // Get product poster
  const image = item.photos[0] || {};

  const currencyCode = item.currency == 'dollar' ? 'USD' : 'NGN';
  const cost = moneyFormatter(item.price, currencyCode);


  return (
    // <Link href="/properties/[id]" as={`/properties/${item.id}`}>
    //   <a></a>
    // </Link>
    <>
      <div className="card text-center">
        <div className="d-flex justify-content-center p-3">
          <div
            className={`d-flex ${image.url ? "img-thumbnail" : "img-fluid"}`}
          >
            <Image
              // src={isPoster ? image.url : "/assets/icons/sec_logo_light.svg"}
              src={image.url || secLogo}
              alt={item.title}
              width={image.url ? "300" : "180"}
              height="180"
              loading="lazy"
            />
          </div>
        </div>

        <div className="card-body">
          <h3 className="heading fs-6 mb-0 text-center">
            {item.title}
          </h3>
        </div>

        <div>
          <div className="container-fluid p-3">
            <div className="row row-cols-3 small g-2">
              <div className="col feat-cell">
                <div className="feat-value fw-bold">{item.bedrooms || "-"}</div>
                <div className="small text-capitalize my-1">
                  <div className="feat-label small visually-hidden">Bedrooms</div>
                  <BiBed className="icon text-muted" title='Bedroom' />
                </div>
              </div>

              <div className="col feat-cell">
                <div className="feat-value fw-bold">{item.bathroom || "-"}</div>
                <div className="small text-capitalize my-1">
                  <div className="feat-label small visually-hidden">Bathrooms</div>
                  <BiBath className="icon text-muted" title='Bathroom' />
                </div>
              </div>

              <div className="col feat-cell">
                <div className="feat-value fw-bold">{item.location || "-"}</div>
                <div className="small text-capitalize my-1">
                  <div className="feat-label small visually-hidden">Location</div>
                  <TiLocationOutline className="icon text-muted" title='Location' />
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid py-1 px-0 mt-3 theme-bg">
            <div className="row g-0 accent-orange">
              <div className="col-4 feat-cell">
                <p className="small text-capitalize my-1">
                  <span className="feat-label small visually-hidden">Status: </span>
                  <span className="feat-value fw-bold">
                    {item.status || "-"}
                  </span>
                </p>
              </div>

              {/* <div className="col cell text-center"></div> */}

              <div className="col offset-1 feat-cell">
                <p className="small text-capitalize my-1">
                  <span className="feat-label small visually-hidden">Price: </span>
                  {/* <span>{item.currency === "dollar" ? "$" : "₦"}</span> */}
                  <span className="feat-value fw-bold">
                    {cost}
                  </span>
                </p>
              </div>

              {/* <div className="col-1">
                <Link href="/properties/[id]" as={`/properties/${item.id}`}>
                  <a title="see property">
                    <span className="visually-hidden">Explore</span>
                    <MdOutlineArrowForwardIos className="icon" />
                  </a>
                </Link>
              </div> */}
            </div>
          </div>

          <div className="p-3">
            <Link href="/properties/[id]" as={`/properties/${item.id}`}>
              <a className="btn m-0" title="see property">
                <span className="visually-hidden">Explore</span>
                <FaChevronRight className="icon" />
              </a>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default ProductCard