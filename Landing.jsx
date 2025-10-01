import React from 'react'
export default function Landing({ onAdmin, onUser }){
  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-screen">
      <button onClick={onAdmin} className="big-btn">Admin</button>
      <button onClick={onUser} className="big-btn">User</button>
    </div>
  )
}