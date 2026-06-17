import { Route } from '@/types'

export const adminRoutes: Route[] = [
  {
    title: 'ADMIN',
    items: [
      {
        title: 'Admin Dashboard',
        url: '/admin-dashboard',
        icon: 'LayoutDashboard',
      },
      {
        title: 'Course Management',
        url: '/admin-dashboard/course-management',
        icon: 'BookOpen',
      },
      {
        title: 'Exam Management',
        url: '/admin-dashboard/exam-management',
        icon: 'ClipboardList',
      },
      {
        title: 'Student Management',
        url: '/admin-dashboard/student-management',
        icon: 'Users',
      },
      {
        title: 'Pre Tabulations',
        icon: 'Table',
        children: [
          {
            title: 'Pre Tabulations (40)',
            url: '/admin-dashboard/pre-tabulations-forty',
            icon: 'ChevronRight',
          },
          {
            title: 'Pre Tabulations (60)',
            url: '/admin-dashboard/pre-tabulations-sixty',
            icon: 'ChevronRight',
          },
        ],
      },
      {
        title: 'Tabulation Management (GPA)',
        url: '/admin-dashboard/tabulations',
        icon: 'BarChart2',
      },
    ],
  },
]
