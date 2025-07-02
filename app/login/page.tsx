'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import './login.css'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const adminUser = process.env.NEXT_PUBLIC_ADMIN_USERNAME
    const adminPass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD

    if (username === adminUser && password === adminPass) {
      sessionStorage.setItem('loggedIn', 'true')
      router.push('/')
    } else {
      setError('Invalid credentials')
    }
  }

  useEffect(() => {
    if (localStorage.getItem('loggedIn') === 'true') {
      router.push('/')
    }
  }, [])

  return (
    <form onSubmit={handleLogin} className="login-form">
      <h1 className="login-title">Admin Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="login-input"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="login-input"
        required
      />
      <button type="submit" className="login-button">
        Log In
      </button>
      {error && <p className="login-error">{error}</p>}
    </form>
  )
}
