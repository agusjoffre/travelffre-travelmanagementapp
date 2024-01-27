'use client'
import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'

export default function SubmitButton (): JSX.Element {
  const { pending } = useFormStatus()
  return (<Button disabled={pending} type="submit">Add</Button>)
}
