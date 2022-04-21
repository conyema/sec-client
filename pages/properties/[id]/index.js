/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'


import ProductDetails from "../../../components/product/ProductDetails";
import NavLink from '../../../components/NavLink'
import Banner from '../../../components/Banner'
import Loader from '../../../components/Loader'





const PropertyView = () => {
  const router = useRouter();
  const { id } = router.query;

  // console.log("router", router);


  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  // if (router.isFallback) {
  //   return <div>Loading...</div>
  // }

  const [property, setProperty] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    async function getProperty(url) {
      const response = await fetch(url);
      const { data } = await response.json();
      console.log(data);

      setProperty(data)
      setLoading(false)
    }

    if (id) {
      setLoading(true)
      getProperty(`https://stellaebamconsulting.com/api/v1/estates/${id}`)
        .catch((err) => {
          console.log(err.message)
          setLoading(false)
          return
        });
    }

  }, [id])

  if (isLoading || !property) {
    return <Loader message={'Fetching Property...'} />
  }

  return (
    <>
      <ProductDetails details={property} />
    </>
  )
}

// {(isLoading && !property)
//   ? <div className="text-center">
//     <Banner title={"Unable to get this property"} />
//     <div className="py-5">
//       <Spinner animation="border" size="sm" />
//       <strong className="d-block my-3">  Fetching Property... </strong>

//       <NavLink href="/properties" className="btn btn-main btn-lg">
//         See others
//       </NavLink>
//     </div>
//   </div>
//   : <ProductDetails details={property} />
// }


export default PropertyView;

