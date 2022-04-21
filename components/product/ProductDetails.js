/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import Banner from '../Banner'
import ContactCta from '../ContactCta'
import Meta from '../Meta'
import NavLink from '../NavLink'
import Section from '../Section'



const ProductDetails = ({ details }) => {
  console.log('dds', details)

  return (
    <>
      <Meta title={details.title} />
      <Banner title={details.title} />

      <div className="container-fluid container-lg">
        <Breadcrumb className="p-2">
          <Breadcrumb.Item className="link" href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item className="link" href="/properties">Properties</Breadcrumb.Item>
          <Breadcrumb.Item className="link" active>{details.title}</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Section className={"section"} title={`About ${details.title}`}>
        <div className="">
          <p>{details.description}</p>
          <table>
            <thead className="heading">
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.entries(details).forEach(([key, value]) => {
                  // console.log(`${key}: ${value}`)
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                })

                // Object.entries(details).map(value => {
                //   console.log(`${value}`);
                //   // <div>{name}</div>
                //   <div>{value}</div>
                //   // <tr key={key}>
                //   //   <td>{key}</td>
                //   //   <td>{value}</td>
                //   // </tr>
                // })
              }
            </tbody>
          </table>

          {/* <div className="">
            <ul className="list-group list-group-flush">
              {details..map((item, idx) => (
                <li key={idx} className="list-group-item text-capitalize">
                  <div className="text-secondary small"> title</div>
                  <div className="text-success fs-5"> Gurara Estate</div>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </Section>

      <Section className={"section"} title={`Video Tour`}>
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
      </Section>

      <Section className={"section"} title={`Gallery`}>
        <div className="">
          <div className="">

          </div>
        </div>
      </Section>

      <Section className={"section"} title={"Similar Properties"}>
        <div className="">
          <div className="">

          </div>
        </div>
      </Section>

      {/* <NavLink href="/properties" className="btn btn-main">
        See other projects
      </NavLink> */}

      <div className="text-center">
        <NavLink href="/properties" className="btn btn-main btn-lg">
          See others
        </NavLink>
      </div>


      <ContactCta />
    </>
  )
}

export default ProductDetails