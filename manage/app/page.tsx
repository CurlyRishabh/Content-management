import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main><h1 className='h-'>Hello World</h1>
    
      <Link href="/login">Login</Link>
    </main>
  )
}
