import { getDefaultDashboardRoute } from '@/lib/authUtils'
import { getUserInfo } from '@/services/auth/auth.services'
import DashboardSidebarContent from './DashboardSidebarContent'
import { redirect } from 'next/navigation'
import { getNavItemsByRole } from '@/routes'

const DashboardSidebar = async () => {
  let userInfo = null

  try {
    userInfo = await getUserInfo()
  } catch (error: any) {
    // Optional: check error type/message
    if (error?.message?.includes('Invalid access token')) {
      redirect('/login')
    }

    // fallback redirect (optional)
    redirect('/login')
  }

  // If API returns null instead of throwing error
  if (!userInfo) {
    redirect('/login')
  }
  //   console.log(userInfo, 'user info')

  const navItems = getNavItemsByRole(userInfo?.role)
  const dashboardHome = getDefaultDashboardRoute(userInfo?.role)

  return (
    <DashboardSidebarContent
      userInfo={userInfo}
      navItems={navItems}
      dashboardHome={dashboardHome}
    />
  )
}

export default DashboardSidebar
