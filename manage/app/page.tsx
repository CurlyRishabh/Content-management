import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main><h1 className='text-rose-600'>Hello World</h1>
    
      <Link href="/login">NETFLIX</Link>
    </main>
  )
}
