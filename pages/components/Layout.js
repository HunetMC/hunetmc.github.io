// Bootstrap
import 'react-bootstrap/Container';

// Next.js
import Head from "next/head"

// Components
import Navbar from './Navbar'

const Layout = (props) => {
    const { title, children } = props
    const siteTitle = "HunetMC"
    
    return (
        <>
          <Head>
            <title>{title ? `${title} - ${siteTitle}` : siteTitle}</title>
            <link rel="icon" href="/images/favicon.ico" />
          </Head>
          <main>
            <Navbar />
            <div className="container">
              {children}
            </div>
          </main>
        </>
      )
}

export default Layout