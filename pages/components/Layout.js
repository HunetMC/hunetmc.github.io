// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Next.js
import Head from "next/head"

// Components
import Navbar from './Navbar'

const Layout = (props) => {
    const { title, children } = props
    const siteTitle = "web"
    
    return (
        <>
          <Head>
            <title>{title ? `${title} - ${siteTitle}` : siteTitle}</title>
            <link rel="icon" href="/images/favicon.ico" />
          </Head>
          <main>
          <Navbar />
            <div className="container mx-auto">
              {children}
            </div>
          </main>
        </>
      )
}

export default Layout