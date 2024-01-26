import { SignInButton, auth, currentUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation'
export default async function Home (): Promise<JSX.Element> {
  const user = await currentUser()
  const { userId } = auth()

  if (userId && user) {
    redirect('/dashboard')
  }

  return (
    <main className="flex flex-col gap-5 h-screen items-center justify-center bg-transparent p-4 md:text-center">
      <h1 className="text-3xl font-bold underline">Welcome to Travelffre!</h1>
      <p className="md:text-2xl md:font-medium text-sm font-light">Track your adventures around the world and share them with your friends.</p>
      <div className='md:flex-row flex flex-col w-full gap-4 items-center justify-center'>
        <h3 className='md:text-2xl md:font-medium text-sm font-light'>Start now!</h3>
        <Button className='md:w-max w-full'><SignInButton mode='modal'/></Button>
      </div>
    </main>
  )
}
