const Newsletter = () => {

  return (
    <div className="newsletter theme-bg">
      <div className="container-fluid container-lg">
        <div className="row row-cols-1 row-cols-sm-2 py-2">
          <div className="col py-2">
            <p className="m-0"> Get latest deals and investment offers in to your inbox.</p>
          </div>
          <div className="col m-auto">
            <form className="box-container gform" id="newsletter-form">
              <label className="visually-hidden" htmlFor="email">Email</label>
              <div className="input-group">
                <input className="form-control" type="email" id="email" name="email" placeholder="Your Email" required />
                <button className="btn btn-accent m-0" type="submit" id="submit-btn">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Newsletter