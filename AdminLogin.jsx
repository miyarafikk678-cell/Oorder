import React, { useState } from 'react'
export default function AdminLogin({ onBack, onLogin, fillAdmin }){
  const [username,setUsername]=useState(''); const [password,setPassword]=useState('')
  return (
    <div className="page panel">
      <button onClick={onBack} className="back">← Back</button>
      <h2 className="text-xl mb-4">Admin Login</h2>
      <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Username" className="mb-2 p-2 border rounded w-full" />
      <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="mb-2 p-2 border rounded w-full" />
      <div className="flex flex-col sm:flex-row gap-2">
        <button onClick={()=>onLogin(username,password)} className="px-4 py-2 bg-white rounded w-full sm:w-auto">Login</button>
        <button onClick={()=>{ const f=fillAdmin(); setUsername(f.username); setPassword(f.password) }} className="px-4 py-2 bg-gray-200 rounded w-full sm:w-auto">Fill Test Admin</button>
      </div>
    </div>
  )
}