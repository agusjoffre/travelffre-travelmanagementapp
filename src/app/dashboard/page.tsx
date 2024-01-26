import SideNav from '@/app/components/SideNav'
import Dashboard from '@/app/components/Dashboard'
export default function DashboardPage (): JSX.Element {
  return (
      <div className="flex gap-24">
          <SideNav />
          <Dashboard/>
      </div>
  )
}
