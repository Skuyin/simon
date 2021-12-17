import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css';
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

