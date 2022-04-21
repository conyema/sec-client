import NavLink from './NavLink'
import OfferCard from './OfferCard'
import Section from './Section'


const InvestCta = ({ offers }) => {
  let hasOffer = offers.length;

  return (
    <section className="section cta-green" id="invest">
      <div className="container-fluid container-lg text-center">
        <div>
          <h2 className="title">Work with us</h2>

          {/* <p className="fs-4">
            Become our investment or sales partner today.
            Get the best return on your investments and time.
          </p> */}
          <p className="fs-4">

            Become our investment or sales partner today.
            Get the best return on your investments.
          </p>

        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 py-5 gy-5">
          {hasOffer && offers.map((offer, idx) => (
            <div key={idx} className="col">
              <OfferCard {...offer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

InvestCta.defaultProps = {
  offers: [
    {
      title: "Development",
      body: "",
      features: [
        "Land Purchase",
        "Property Development",
        "Property Renovation",
        "Add value to your existing property"
      ],
      link: {
        href: "/services",
        text: "Read More"
      },
      image: {
        icon: false,
        src: "/assets/images/development.jpg"
      }
    },
    {
      title: "Sales & Marketing",
      body: "",
      features: [
        "Property Sales",
        "Property Marketing",
        "Become an agent. Earn a sales commission"
      ],
      link: {
        href: "/contact",
        text: "Talk to us"
      },
      image: {
        icon: false,
        src: "/assets/images/marketing.jpg"
      }
    },
    {
      title: "Management",
      body: "",
      features: [
        "Focus on maximizing profit",
        "Manage all the tenant leases, rent, communications and payments",
        "Keep your property functional, secure and sustainable"
      ],
      link: {
        href: "/contact",
        text: "Talk to us"
      },
      image: {
        icon: false,
        src: "/assets/images/partnership.jpg"
      }
    },
    // {
    //   title: "Partnership",
    //   body: "Use this platform to network and also use the resources provided to help you gain the industry experience…",
    //   link: {
    //     href: "/partnership",
    //     text: "Read More"
    //   },
    //   image: {
    //     icon: false,
    //     src: "/assets/images/partnership.jpg"
    //   }
    // },
  ],
}

export default InvestCta