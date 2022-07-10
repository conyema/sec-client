import ProductCard from './ProductCard'


const ProductList = ({ products, featured = false }) => {
  // const isEmpty = !(products.length > 0);
  const isEmpty = !products;


  return (
    <>
      {isEmpty
        ? <div className="text-center">No Properties yet.</div>
        : <div id="Listing" className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-4 py-5">
          {products.map(product => (
            <div className="col" key={product.id}>
              <ProductCard item={product} />
            </div>
          ))}
        </div>
      }
    </>

  )
}

export default ProductList