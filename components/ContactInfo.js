const ContactInfo = ({ address, email, phones, openHours }) => {

  return (
    <div className="container-fluid">
      <div className="row row-cols-1 g-4">
        <div className="col">
          <h4 className="heading heading"> Visit our office</h4>
          <address>
            {/* <p> {address.line1} </p>
            <p> {address.line2} </p> */}
            <p>
              <span className="d-inline-block me-1"> {address.line1} </span>
              <span className="d-inline-block"> {address.line2} </span>
            </p>
          </address>
        </div>
        <div className="col">
          <h4 className="heading"> Send a mail</h4>
          <p>
            <a className="link" href={`mailto:${email}`}> {email} </a>
          </p>
        </div>
        <div className="col">
          <h4 className="heading"> Call us</h4>
          <ul className="list-unstyled">
            {phones.map((phone, idx) => (
              <li key={idx} className="d-inline">
                <a className="link" href={`tel:${phone}`}>{phone}</a>
                {idx < (phones.length - 1) ? <span className="me-1"> , </span> : ""}
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h4 className="heading"> Business Hours</h4>
          <table className="table table-borderless">
            <tbody>
              {openHours.map(({ day, time }, idx) => (
                <tr key={idx}>
                  <td>{day}</td>
                  <td>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo;