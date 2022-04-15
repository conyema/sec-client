import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import Newsletter from './Newsletter'
// import layoutStyles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />

      <Header />

      <div>
        <main className="site-main" id="main-content" role="main">
          {children}
        </main>
      </div>

      <Newsletter />
      <Footer />
    </>
  )
}

export default Layout;