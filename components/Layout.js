import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
// import Newsletter from './Newsletter'
// import Decor from './svgs/Decor'
// import layoutStyles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className="container-fluid container-xxl p-0">
      <Meta />

      <Header />

      <div>
        <main className="site-main" id="main-content" role="main">
          {children}
        </main>
      </div>

      {/* <Newsletter /> */}

      {/* <Decor /> */}
      <Footer />
    </div>
  )
}

export default Layout;