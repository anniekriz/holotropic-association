'use client';

import './trainer.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ParticipantPage() {
  const router = useRouter()
  
    useEffect(() => {
      if (sessionStorage.getItem('loggedIn') !== 'true') {
        router.push('/login')
      }
    }, [])

  return (

    <main>

      <p>Work in progress</p>

    </main>

  )
}
