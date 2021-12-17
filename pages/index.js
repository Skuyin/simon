import Navbar from '../components/Navbar'
import ProductLists from '../components/ProductLists';
import data from '../utils/data';
import Featured from '../components/Featured';
import Footer from '../components/Footer';



export default function Home() {
  return (
    <>
    <Navbar />
    <Featured />
    <ProductLists data={data} />
    <Footer />
    </>
  )
}

