import React from 'react'
import Sidebar from '../../Components/NavLink'
import AdminHeader from '../../Components/Header'
import AdminLayout from '../../Layout/AdminLayout'
import Dashboard from '../Admin/Dashbaord'
import RecentActivity from '../Admin/RecentActivities'
import AnalyticsDashboard from '../Admin/Chart'

const Landing: React.FC = () => {
  return (
    <>
    <AdminLayout>
<Dashboard />
<AnalyticsDashboard />
<RecentActivity />
    </AdminLayout>
{/* <AdminHeader /> */}

{/* <Sidebar /> */}
    </>
  )
}

export default Landing