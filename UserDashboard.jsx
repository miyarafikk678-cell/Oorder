import React from 'react'
export default function UserDashboard({ userSession, logoutAll }){
  return (
    <div className="page panel">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h2 className="text-2xl">User Dashboard — {userSession.username}</h2>
        <button onClick={logoutAll} className="px-3 py-2 bg-red-200 rounded mt-2 sm:mt-0">Logout</button>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <button className="sidebar-btn">Create Order</button>
        <button className="sidebar-btn">Past Orders</button>
        <button className="sidebar-btn">Received Orders</button>
      </div>
      <div className="panel">Content goes here...</div>
    </div>
  )
}