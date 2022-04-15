import { useRouter } from 'next/router'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

// import Hero from '../../../components/Hero'
import Banner from '../../../components/Banner'
import Section from '../../../components/Section'
import ContactCta from '../../../components/ContactCta'
import Meta from '../../../components/Meta'
import NavLink from '../../../components/NavLink'




const Property = ({ property }) => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <Meta title={property.title} />
      <Banner title={property.title} />

      <div className="container-fluid container-lg">
        <Breadcrumb className="p-2">
          <Breadcrumb.Item className="link" href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item className="link" href="/properties">Properties</Breadcrumb.Item>
          <Breadcrumb.Item className="link" active>{property.title}</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Section className={"section"} title={`About ${property.title}`}>
        <div className="">
          <p>{property.description}</p>
          <div className="">
            <ul className="list-group list-group-flush">
              {/* {property..map((item, idx) => (
                <li key={idx} className="list-group-item text-capitalize">
                  <div className="text-secondary small"> title</div>
                  <div className="text-success fs-5"> Gurara Estate</div>
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </Section>

      <Section className={"section"} title={`Video Tour`}>
        {/* iframe(src=about.video width="420" height="315" frameborder="0") */}

        <div className="video-container">
          <iframe
            name={"Virtual Tour"}
            src={property.video}
            title={property.title}
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

      <NavLink href="/properties" className="btn btn-main">
        See other projects
      </NavLink>

      <ContactCta />
    </>
  )
}

// export const getServerSideProps = async (context) => {
//   const res = await fetch(`http://localhost:4000/api/v1/estates/${context.params.id}`);
//   const { data = [] } = await res.json();

//   return {
//     props: {
//       property: data
//     }
//   }
// }

export const getStaticProps = async (context) => {
  // const res = await fetch(`http://localhost:4000/api/v1/estates/${context.params.id}`);
  const res = await fetch(`https://stellaebamconsulting.com/api/v1/estates/${context.params.id}`);
  const { data = {} } = await res.json();

  return {
    props: {
      property: data
    }
  }
}

// For statically generating the dynamic route pages
export const getStaticPaths = async (context) => {
  // const res = await fetch(`http://localhost:4000/api/v1/estates`);
  const res = await fetch(`https://stellaebamconsulting.com/api/v1/estates`);
  const { data = [] } = await res.json();

  const paths = data.map(item => ({
    params: { id: item.id.toString() }
  }));

  // console.log("paths:", paths);

  return {
    paths,
    fallback: false,
  }
}

export default Property;