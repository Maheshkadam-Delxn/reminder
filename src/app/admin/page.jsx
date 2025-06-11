'use client';
import DashboardStats from './components/DashboardStats';
import ComplianceOverview from './components/ComplianceOverview';
import RecentActivity from './components/RecentActivity';
import Dashboard from "./compliance/page"
export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="mt-1 text-sm text-gray-600">
          Overview of system users and compliance status
        </p>
      </div>
      <Dashboard/>
      {/* <DashboardStats /> */}
      {/* <ComplianceOverview /> */}
      {/* <RecentActivity /> */}
    </div>
  );
}
