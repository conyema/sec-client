// import NavLink from '../components/NavLink'
import Image from 'next/image'


const Map = ({ link, thumbnail }) => {

  return (
    <>
      <div className="container-fluid">
        <h4 className="heading"> Find Us</h4>
        {/* <div className="img-thumbnail img-shadow m-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.769703887336!2d7.435644690225868!3d9.084732447946934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e753477dc2609%3A0xa1a471b8aea6bc66!2s62%20Bala%20Kona%20St%2C%20Kado%20900108%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2suk!4v1645443236061!5m2!1sen!2suk"
            width="400" height="300" allowfullscreen="" loading="lazy">
          </iframe>
        </div> */}
        <div className="d-flex justify-content-center py-5" id="map">
          <div className="d-flex img-thumbnail">
            <Image
              src={thumbnail}
              alt="Our location"
              width="500"
              height="375"
              loading="lazy"
            />
          </div>
        </div>
        <a className="btn btn-main" href={link} target="_blank" rel="noreferrer"> Get Directions </a>
      </div>
    </>
  )
}

export default Map;