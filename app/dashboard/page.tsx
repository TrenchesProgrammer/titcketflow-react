"use client";
import { getSession } from '../utils/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();
    const [session, setSession] = useState(null);

    useEffect(()=> {
        const sessionData = getSession();
        if(!sessionData){
            router.push("/login");
        } else {
            setSession(sessionData);
        }
    },[])

    if(!session) return null;

  return (
    <div className='padding-container '>
        <h2> Welcome, {session.fullname}</h2>
        <p>Here are your upcoming tickets</p>
    </div>
  )
}

export default page