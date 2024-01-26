import SideNav from '@/app/components/SideNav'
import Dashboard from '@/app/components/Dashboard'
export default function DashboardPage (): JSX.Element {
  return (
      <div className="flex md:gap-24 gap-10">
          <SideNav />
          <Dashboard/>
      </div>
  )
}
