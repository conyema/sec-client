// import NavLink from '../components/NavLink'
// import Image from 'next/image'


const Map = (props) => {


  return (
    <>
      <div className="container-fluid">
        <h4 className="heading"> Find Us</h4>
        <div className="d-flex img-thumbnail img-shadow m-auto mt-5">
          <iframe
            src={props.mapSrc}
            width="100%" height="300" allowFullScreen="" loading="lazy">
          </iframe>
        </div>
        {/* <div className="d-flex justify-content-center py-5" id="map">
          <div className="d-flex img-thumbnail">
            <iframe
              src={props.mapSrc}
              width="100%" height="300" allowfullscreen="" loading="lazy">
            </iframe>
          </div>
        </div> */}
        {/* <div className="d-flex justify-content-center py-5" id="map">
          <div className="d-flex img-thumbnail">
            <Image
              src={props.imgSrc}
              alt="Our location"
              width="500"
              height="375"
              loading="lazy"
            />
          </div>
        </div> */}
        {/* <a className="btn btn-main" href={props.link} target="_blank" rel="noreferrer"> Get Directions </a> */}
      </div>
    </>
  )
}

export default Map;