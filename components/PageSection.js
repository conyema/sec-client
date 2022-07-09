const PageSection = ({ title, children, ...props }) => {

  return (
    <section {...props} >
      {title &&
        <h2 className="title text-center">
          <span className="sub-title">{title}</span>
        </h2>
      }

      <div className="container-fluid container-lg">
        {children}
      </div>
    </section>
  )
}

export default PageSection