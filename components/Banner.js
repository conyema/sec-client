import Wave from './svgs/Wave'


const Banner = ({ title }) => {

  return (
    <section className="banner" id="banner">
      <div className="container-fluid container-lg text-center mb-5">
        <h1 className="title">{title}</h1>
      </div>

      <div className="wave-decoration">
        <Wave />
      </div>
    </section>
  )
}

export default Banner