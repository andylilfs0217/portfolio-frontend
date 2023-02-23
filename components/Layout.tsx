import Footer from './Footer'
import ResponsiveAppBar from './CustomAppBar'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <ResponsiveAppBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
