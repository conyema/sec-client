import ProductListing from '../components/product/ProductListing'
import Banner from '../components/Banner'
import Section from '../components/Section'
import ContactCta from '../components/ContactCta'
import Meta from '../components/Meta'

import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { useState } from "react";
import useSWR from 'swr'


const Properties = ({ properties }) => {
  // const [name, setName] = useState("");
  // const [pageIndex, setPageIndex] = useState(0);

  // The API URL includes the page index, which is a React state.
  // const { data } = useSWR(`/api/estates?page=${pageIndex}`, fetcher);

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>


  return (
    <>
      {/* <Meta subTitle="Properties" /> */}
      <Meta subTitle="Real Estate" />
      <Banner title={"Properties"} />

      <div className="container-fluid container-lg">
        <Breadcrumb className="p-2">
          <Breadcrumb.Item className="link" href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item className="link" active>Property Listings</Breadcrumb.Item>
        </Breadcrumb>
      </div>


      <Section className={"section"} id={"properties"} title={"Find a home"}>

        <ProductListing products={properties} />

        {/* <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item active" aria-current="page">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav> */}

      </Section>

      <ContactCta />
    </>
  )
}

export const getStaticProps = async () => {
  // const res = await fetch("http://localhost:4000/api/v1/estates");
  const res = await fetch("https://stellaebamconsulting.com/api/v1/estates");
  const { data = [] } = await res.json();

  return {
    props: {
      properties: data
    }
  }
}

export default Properties;