// import Link from 'next/link'
import TopNav from './header-items/TopNav'
// import HeaderStyles from '../styles/Header.module.css'


const Header = () => {


  return (
    <header id="site-header" className="site-header fixed-top" role="banner">
      <div className="container-fluid container-lg">
        <TopNav />
      </div>
    </header>
  )
}

export default Header