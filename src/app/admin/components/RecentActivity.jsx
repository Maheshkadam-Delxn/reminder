'use client';
import { useState, useEffect } from 'react';

export default function RecentActivity() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Mock activity data
    const mockActivities = [
      {
        id: 1,
        type: 'user_created',
        message: 'New user account created for "Global Tech Solutions"',
        timestamp: '2024-06-10T10:30:00Z',
        user: 'Admin User'
      },
      {
        id: 2,
        type: 'compliance_updated',
        message: 'Compliance status updated for "Healthcare Plus" - Now Critical',
        timestamp: '2024-06-10T09:15:00Z',
        user: 'System'
      },
      {
        id: 3,
        type: 'reminder_sent',
        message: 'Reminder sent to "Manufacturing Co" for upcoming compliance expiry',
        timestamp: '2024-06-10T08:45:00Z',
        user: 'Admin User'
      },
      {
        id: 4,
        type: 'user_login',
        message: 'User "Acme Corporation" logged in successfully',
        timestamp: '2024-06-09T16:20:00Z',
        user: 'System'
      }
    ];
    setActivities(mockActivities);
  }, []);

  const getActivityIcon = (type) => {
    const icons = {
      'user_created': '👤',
      'compliance_updated': '🔄',
      'reminder_sent': '📧',
      'user_login': '🔐'
    };
    return icons[type] || '📝';
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <p className="text-sm text-gray-600">Latest system activities and updates</p>
      </div>
      <div className="p-6">
        <div className="flow-root">
          <ul className="-mb-8">
            {activities.map((activity, index) => (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {index !== activities.length - 1 && (
                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" />
                  )}
                  <div className="relative flex space-x-3">
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-sm">{getActivityIcon(activity.type)}</span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5">
                      <div>
                        <p className="text-sm text-gray-900">{activity.message}</p>
                      </div>
                      <div className="mt-2 flex items-center space-x-2 text-xs text-gray-500">
                        <span>By {activity.user}</span>
                        <span>•</span>
                        <span>{formatTimestamp(activity.timestamp)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}