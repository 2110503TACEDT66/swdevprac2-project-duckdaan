import { getServerSession } from 'next-auth'
import TopmenuItem from './TopmenuItem'
import styles from './topmenu.module.css'
import Image from 'next/image'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Link } from '@mui/material'

async function TopMenu() {

  const session = await getServerSession(authOptions)

  return (
    <div className={styles.menucontainer}>
      <div className='flex flex-row absolute left-0 h-full'>
    {
      session? <Link href="/api/auth/signout"><div className='flex items-center left-0 h-full px-2 
       right-0 text-cyan-600 text-sm'>Sign-Out of {session.user?.name}</div></Link>
      :<Link href="/api/auth/signin"><div className='flex items-center right-0 h-full px-2 left-0 text-cyan-600 text-sm'>Sign-in</div></Link>
      }
      <TopmenuItem title='MyBooking' pageRef='/mybooking'/>
      
    </div>

      <TopmenuItem title='Booking' pageRef='/booking' />
      <Image src={'/img/logo.png'}
      className={styles.logoimg}
      alt='logo'
      width={0}
      height={0}
      sizes='100vh'/>

    
    
    </div>
  )
}

export default TopMenu