const Chip = ({ title, icon }) => {

  return (
    <>
      {/* <p className="chip"> {title} </p> */}
      <div className="chip" >
        <div className="chip-deco">
          {/* <div className="chip-icon"> {idx} </div> */}
          <div className="chip-icon"> {icon} </div>
        </div>
        <div className="chip-title"> {title} </div>
      </div>
    </>
  )
}

export default Chip