import Layout from '../components/Layout'

import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap-grid.css'
// import 'bootstrap/dist/css/bootstrap-reboot.css'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {


  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
