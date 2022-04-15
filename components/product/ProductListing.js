import ProductItem from './ProductItem'


const ProductListing = ({ products, featured = false }) => {
  const isEmpty = !(products.length > 0);

  return (
    <>
      {isEmpty
        ? <div className="text-center">No Properties to show</div>
        : <div id="Listing" className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 py-5">
          {products.map(product => (
            <div className="col" key={product.id}>
              <ProductItem item={product} />
            </div>
          ))}
        </div>
      }
    </>

  )
}

export default ProductListing