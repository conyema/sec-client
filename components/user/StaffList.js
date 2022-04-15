import Header from '../Header'
import layoutStyles from '../styles/Layout.module.css'

const StaffList = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main className={layoutStyles.container}>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout;