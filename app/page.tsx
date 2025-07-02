'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './styles.css';


export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    if (sessionStorage.getItem('loggedIn') !== 'true') {
      router.push('/login')
    }
  }, [])

  return (

    <main>

      <Link href="./admin" className='link'>Admin</Link>
      <Link href="./trainer" className='link'>Trainer</Link>
      <Link href="./participant" className='link'>Participant</Link>

    </main>

  )
}
