'use client';
import { useEffect, useState } from 'react';

export default function DashboardStats() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    compliantUsers: 0,
    expiringUsers: 0
  });

  useEffect(() => {
    // Mock data - replace with actual API call
    setStats({
      totalUsers: 1247,
      activeUsers: 1180,
      compliantUsers: 1050,
      expiringUsers: 23
    });
  }, []);

  const statCards = [
    {
      title: 'Total Users',
      value: stats.totalUsers,
      change: '+12%',
      changeType: 'positive',
      icon: '👥',
      color: 'blue'
    },
    {
      title: 'Active Users',
      value: stats.activeUsers,
      change: '+8%',
      changeType: 'positive',
      icon: '✅',
      color: 'green'
    },
    {
      title: 'Compliant',
      value: stats.compliantUsers,
      change: '-2%',
      changeType: 'negative',
      icon: '🛡️',
      color: 'indigo'
    },
    {
      title: 'Expiring Soon',
      value: stats.expiringUsers,
      change: '+15%',
      changeType: 'negative',
      icon: '⚠️',
      color: 'red'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{card.title}</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{card.value.toLocaleString()}</p>
            </div>
            <div className={`p-3 rounded-full bg-${card.color}-100`}>
              <span className="text-2xl">{card.icon}</span>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className={`text-sm font-medium ${
              card.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              {card.change}
            </span>
            <span className="text-sm text-gray-500 ml-2">from last month</span>
          </div>
        </div>
      ))}
    </div>
  );
}