import Image from 'next/image'
import Link from 'next/link'
import ProductCart from './components/productCart'

export default function Home() {
  return (
    <main >
          <h1>Hello world</h1>
          <ProductCart />
    </main>
  )
}
