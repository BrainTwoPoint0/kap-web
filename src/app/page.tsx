import Image from 'next/image'
import Navbar from './common/navbar'
import Enquiries from './components/enquiries'
import Header from './components/header'

export default function Home() {
  return (
    <main>
      <Header />
      <Enquiries />
    </main>
  )
}
