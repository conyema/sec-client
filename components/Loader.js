

const Loader = ({ message }) => {


  return (
    <section className="section loader-box" id="loader">
      <div className="container text-center mb-5">
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        <p className="d-block mt-5">
          <strong>{message}</strong>
        </p>
      </div>
    </section>
  )
}

export default Loader