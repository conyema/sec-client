/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import Banner from '../Banner'
import ContactCta from '../ContactCta'
import Meta from '../Meta'
import NavLink from '../NavLink'
import PageSection from '../PageSection'
import SocialShare from '../SocialShare'

import moneyFormatter from '../../lib/moneyFormatter'


const ProductDetails = ({ details }) => {
  // console.log('dds', details)
  // console.log('URL', document.URL)
  const currencyCode = details.currency == 'dollar' ? 'USD' : 'NGN';
  const pageUrl = encodeURIComponent(document.URL);

  const cost = moneyFormatter(details.price, currencyCode);
  // console.log('Cost', formattedPrice);

  const metaProps = {
    subTitle: details.title,
    description: details.description
  }


  return (
    <>
      <Meta {...metaProps} />
      <Banner title={details.title} />

      <div className="container-fluid container-lg">
        <Breadcrumb className="p-2">
          <Breadcrumb.Item className="link" href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item className="link" href="/properties">Properties</Breadcrumb.Item>
          <Breadcrumb.Item className="link" active>{details.id}</Breadcrumb.Item>
        </Breadcrumb>
      </div>


      <PageSection className={"mt-4"}>
        <SocialShare url={pageUrl} />
      </PageSection>

      {/* <PageSection className={"section"}  title={"Property Details"} title={`About ${details.title}`}> */}
      <PageSection className={"section mt-0"} title={"Property Details"}>
        <>
          <p className={"text-center fs-5"}>{details.description}</p>
          <div>
            <div id="Features" className="row row-cols-1 row-cols-sm-2 g-4 py-5">
              <div className="col">
                <ul className="list-group list-group-flush card">
                  <li className="list-group-item">
                    <div className="text-secondary text-uppercase small">Beds</div>
                    <div className="text-success text-capitalize fs-5">{details.bedroom}</div>
                  </li>
                  <li className="list-group-item">
                    <div className="text-secondary text-uppercase small">Baths</div>
                    <div className="text-success text-capitalize fs-5">{details.bathroom}</div>
                  </li>
                  <li className="list-group-item">
                    <div className="text-secondary text-uppercase small">Status</div>
                    <div className="text-success text-capitalize fs-5">{details.status}</div>
                  </li>
                  <li className="list-group-item">
                    <div className="text-secondary text-uppercase small">Cost</div>
                    <div className="text-success text-capitalize fs-5">{cost || '-'}</div>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="list-group list-group-flush card">
                  {/* <li className="list-group-item">
                    <span>Title</span>
                    <span>Gurara Estate</span>
                  </li> */}
                  <li className="list-group-item">
                    <div className="text-secondary text-uppercase small">Type</div>
                    <div className="text-success text-capitalize fs-5">{details.category}</div>
                  </li>
                  <li className="list-group-item">
                    <div className="text-secondary text-uppercase small">Location</div>
                    <div className="text-success text-capitalize fs-5">{details.location}</div>
                  </li>
                  <li className="list-group-item">
                    <div className="text-secondary sma text-capitalizell">Address</div>
                    <div className="text-success fs-5">{details.address}</div>
                  </li>
                  <li className="list-group-item">
                    <div className="text-secondary text-uppercase small">Floor Space</div>
                    <div className="text-success text-capitalize fs-5">{`${details.floorSpace} ${details.measure}`}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      </PageSection>



      {details.photos &&
        <PageSection className={"section mt-0 pt-0"} title={`Gallery`}>
          <div id="image-gallery" className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-4 py-5">
            {details.photos.map(image => (
              <div className="col" key={image.id}>
                <div className={"d-flex box-container img-thumbnail"}>
                  <Image
                    src={image.url}
                    alt={image.title}
                    // width={image.url ? "300" : "180"}
                    // height="180"
                    // layout="responsive"
                    width="500"
                    height="500"
                    loading="lazy"
                  />
                  {/* <span className={"img-tag"}>{image.title}</span> */}
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-5">
            <NavLink href="/properties" className="btn btn-main btn-lg">
              See other properties
            </NavLink>
          </div> */}
        </PageSection>
      }

      {details.video &&
        <PageSection className={"section"} title={`Video Tour`}>
          {/* iframe(src=about.video width="420" height="315" frameborder="0") */}

          <div className="video-container">
            <iframe
              name={"Virtual Tour"}
              src={details.video}
              title={details.title}
              loading={"lazy"}
              allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}
              allowFullScreen
            >
            </iframe>
          </div>
        </PageSection>
      }



      {/* <PageSection className={"section"} title={"Similar Properties"}>
        <div className="">
          <div className="">

          </div>
        </div>
      </PageSection> */}

      {/* <NavLink href="/properties" className="btn btn-main">
        See other projects
      </NavLink> */}

      <div className="text-center mt-5">
        <NavLink href="/properties" className="btn btn-main btn-lg">
          See other properties
        </NavLink>
      </div>


      <ContactCta />
    </>
  )
}

export default ProductDetails