// import Head from 'next/head'
// import Link from 'next/link'
import Image from 'next/image'

import ProductListing from '../components/product/ProductListing'
import Hero from '../components/Hero'
import NavLink from '../components/NavLink'
import ContactCta from '../components/ContactCta'
import InvestCta from '../components/InvestCta'
import Section from '../components/Section'
import Meta from '../components/Meta'
// import Chip from '../components/Chip'
import ArrowRightSvg from '../components/svgs/ArrowRightSvg'



// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// export default function Home({ properties, services }) {
export default function Home({ properties }) {
  // console.log('ppp', typeof (properties));
  // console.log('ddd', properties);

  return (
    // <div className={styles.container}>
    <>
      <Meta subTitle="Home" />
      <Hero />

      {/* <Section className={"section"} id={"services"} title={`Our Expertise`} >

      </Section> */}

      <Section className={"section"} id={"services"} title={"Our Expertise"} >
        {/* <div className="row row-cols-1 row-cols-lg-2 flex-md-row-reverse gy-5 py-5"> */}
        <div className="row row-cols-1 row-cols-sm-2 flex-md-row-reverse g-4 py-5">
          {/* <div className="col col-lg-8">
            <div className="row row-cols-1 row-cols-sm-2 g-2">
              {services.map((item, idx) => (
                <div className="col" key={idx}>
                  <Chip title={item.title} icon={idx + 1} />
                </div>
              ))}
            </div>
          </div> */}
          <div className="col overflow-hidden text-center">
            {/* <img className="img-fluid m-auto" src="/assets/images/expertise5.png" alt="Services" width="400" height="400" loading="lazy" /> */}
            <Image
              className="img-fluid m-auto"
              src="/assets/images/expertise5.png"
              alt="Services"
              width="400"
              height="400"
              loading="lazy"
            />
          </div>

          {/* <div className="col align-self-center fs-4"> */}
          <div className="col col-lg-4 align-self-center m-auto">
            <p className="pb-5 fs-5">
              We offer a variety of professional services, from pre-development
              planning to post-development management and maintenance, tailored to
              make your unique real estate dreams and needs a reality.
            </p>

            {/* <a className="link link-accent" href="/services">See our solutions</a> */}

            {/* <NavLink href="/services" className="link arrow-link"> */}
            <NavLink href="/services" className="btn btn-main">
              See our solutions
              <span className="ms-1"><ArrowRightSvg /></span>
            </NavLink>

          </div>
        </div>
      </Section>


      <InvestCta />

      <Section className={"section"} id={"services"} title={"Featured Projects"}>
        <ProductListing products={properties} />

        {/* <NavLink href="/properties" className="link arrow-link"> */}
        <NavLink href="/properties" className="btn btn-main ms-md-5">
          See all projects
          <span className="ms-1"><ArrowRightSvg /></span>
        </NavLink>
      </Section>

      <ContactCta />
    </>
  )
}

export const getStaticProps = async () => {
  // Get featured properties only
  const res = await fetch("https://stellaebamconsulting.com/api/v1/estates?featured=true");
  const { data } = await res.json();

  return {
    props: {
      properties: data
    }
  }
}
