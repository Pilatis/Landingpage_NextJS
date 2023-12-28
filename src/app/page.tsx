import Image from 'next/image'
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import Features from './components/Features/Features'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


export default function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Features />
      <Contact />
      <Footer />
    </div>
  )
}
