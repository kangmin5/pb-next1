import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import { wrapper } from '../redux/store'
import '../styles/globals.css'



function App({ Component, pageProps }) {
  return (
    <div>
      {/* <Header /> */}
      <Nav/>
      <Layout>
          <Component {...pageProps} />
      </Layout> 
      <Footer/>
    </div>
  )
}

export default wrapper.withRedux(App) 
