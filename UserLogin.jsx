import React, { useState } from 'react'
export default function UserLogin({ onBack, onLogin }){
  const [username,setUsername]=useState(''); const [password,setPassword]=useState('')
  return (
    <div className="page panel">
      <button onClick={onBack} className="back">← Back</button>
      <h2 className="text-xl mb-4">User Login</h2>
      <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Username" className="mb-2 p-2 border rounded w-full" />
      <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="mb-2 p-2 border rounded w-full" />
      <button onClick={()=>onLogin(username,password)} className="px-4 py-2 bg-white rounded w-full">Login</button>
    </div>
  )
}