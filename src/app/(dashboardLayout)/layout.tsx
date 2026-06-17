import DashboardSidebar from '@/components/modules/dashboard/sidebar/DashboardSidebar'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />

      <SidebarInset>
        <header className='flex h-16 items-center gap-2'>
          <SidebarTrigger />
        </header>

        <main className='flex-1'>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
