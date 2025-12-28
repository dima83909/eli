import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Results from '../components/Results'
import Testimonials from '../components/Testimonials'
import QnA from '../components/QnA'
import Numbers from '../components/Numbers'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>NOEATERPROTEIN | ФОРМУЛА — Ахуєнна жопа</title>
        <meta name="description" content="14-денний інтенсив для плоського живота без дієт" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Hero />
      <Intro />
      <Gallery />
      <About />
      <Results />
      <Testimonials />
      <QnA />
      <Numbers />
      <Footer />
    </>
  )
}
