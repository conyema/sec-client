import { useState, useEffect } from "react";
// import useSWR from 'swr'
// import Spinner from 'react-bootstrap/Spinner';
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import apiServer from '../config/index'

import ProductList from '../components/product/ProductList'
import Banner from '../components/Banner'
import PageSection from '../components/PageSection'
import ContactCta from '../components/ContactCta'
import Meta from '../components/Meta'
import Loader from '../components/Loader'


const Properties = () => {
  const [properties, setProperties] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    async function getProperties(url) {
      const response = await fetch(url);
      const { data } = await response.json();
      // console.log(data);

      setProperties(data)
      setLoading(false)
    }

    setLoading(true)
    getProperties(`${apiServer}/estates`)
      .catch((err) => {
        // console.log(err.message)
        setLoading(false)
        return
      });

  }, [])

  // if (isLoading) return <Spinner animation="border" variant="success" />
  // if (!properties) return <p>No Property</p>
  if (isLoading) {
    return <Loader message={'Fetching Property...'} />
  }


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


      <PageSection className={"section"} id={"properties"} title={"Find a home"}>

        <ProductList products={properties} />

        {/* {isLoading
          ? <Loader message={'Fetching Properties...'} />
          : <ProductList products={properties} />
        } */}
      </PageSection>

      <ContactCta />
    </>
  )
}


export default Properties;