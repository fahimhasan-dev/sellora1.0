"use client"
import React from 'react'
import { signIn } from 'next-auth/react'
export default function LoginButton() {
  return (
      <div>
          <button onClick={()=>signIn()} className='btn bg-[#6c7fd8] border-none rounded text-white px-4 py-2 hover:bg-[#4557a8]'>Login</button>
    </div>
  )
}
