import Wave from './svgs/Wave'
import Valley from './svgs/Valley'


const Banner = ({ title }) => {


  return (
    <section className="banner" id="banner">
      <div className="container-fluid container-lg text-center mb-5">
        <h1 className="title">{title}</h1>
      </div>

      <div className="banner-decor">
        {/* <Wave /> */}
        <Valley />
      </div>
    </section>
  )
}

export default Banner