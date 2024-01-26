import { UserButton, auth, currentUser, SignInButton, SignOutButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function SideNav (): Promise<JSX.Element | null> {
  const user = await currentUser()
  const { userId } = auth()

  return (

      <div
          className=" flex flex-col gap-8 h-screen w-auto
           md:w-[10%] border-r-[1px] border-r-neutral-300 pl-4 pr-4 pt-12 pb-2
           items-center">
          {!userId
            ? <Button className='md:w-max w-3'><SignInButton mode='modal' /></Button>

            : <>
        <div className='flex gap-4 items-center justify-center p-2'>

              <UserButton afterSignOutUrl="/"/>
              <div className='md:flex md:flex-col hidden'>
                <p>Welcome,</p>
                  <p><strong>
                      {user?.username ? user.username : user?.firstName}
                  </strong></p>
              </div>
          </div>

          <ul className='flex flex-col gap-8'>
            <Link href={'/dashboard'}>
              <li className='hidden md:font-medium md:flex'>Dashboard</li>
            </Link>
            <li className='hidden md:font-medium md:flex'>Notifications</li>
            <Link href={'/about'}>
              <li className='hidden md:font-medium md:flex'>About the creator</li>
            </Link>
            <Button className='md:w-max md:flex hidden'><SignOutButton/></Button>
          </ul>

    </>
  }
</div>

  )
}
