import React, { useState } from 'react'
import Landing from './components/Landing'
import AdminLogin from './components/AdminLogin'
import UserLogin from './components/UserLogin'
import AdminDashboard from './components/AdminDashboard'
import UserDashboard from './components/UserDashboard'

const HARDCODED_ADMIN = { username: 'Cheesyorder', password: 'Chessy$2023' }

export default function App(){
  const [page,setPage]=useState('landing')
  const [adminSession,setAdminSession]=useState(null)
  const [userSession,setUserSession]=useState(null)

  function logoutAll(){ setAdminSession(null); setUserSession(null); setPage('landing') }

  return (
    <div>
      {page==='landing' && <Landing onAdmin={()=>setPage('admin-login')} onUser={()=>setPage('user-login')} />}
      {page==='admin-login' && <AdminLogin onBack={()=>setPage('landing')} onLogin={(u,p)=>{setAdminSession({username:u}); setPage('admin-dashboard')}} fillAdmin={()=>HARDCODED_ADMIN} />}
      {page==='user-login' && <UserLogin onBack={()=>setPage('landing')} onLogin={(u,p)=>{setUserSession({username:u}); setPage('user-dashboard')}} />}
      {page==='admin-dashboard' && adminSession && <AdminDashboard adminSession={adminSession} logoutAll={logoutAll} />}
      {page==='user-dashboard' && userSession && <UserDashboard userSession={userSession} logoutAll={logoutAll} />}
    </div>
  )
}