'use client';
import { useState, useEffect } from 'react';

export default function ComplianceOverview() {
  const [complianceData, setComplianceData] = useState([]);

  useEffect(() => {
    // Mock compliance overview data
    const mockData = [
      { name: 'Acme Corp', status: 'green', expiryDate: '2024-07-15', daysLeft: 35 },
      { name: 'Tech Solutions', status: 'yellow', expiryDate: '2024-06-25', daysLeft: 15 },
      { name: 'Healthcare Plus', status: 'red', expiryDate: '2024-06-17', daysLeft: 7 },
      { name: 'Manufacturing Co', status: 'orange', expiryDate: '2024-06-20', daysLeft: 10 },
      { name: 'Finance Ltd', status: 'green', expiryDate: '2024-08-01', daysLeft: 52 }
    ];
    setComplianceData(mockData);
  }, []);

  const getStatusColor = (status) => {
    const colors = {
      'green': 'bg-green-100 text-green-800 border-green-200',
      'yellow': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'orange': 'bg-orange-100 text-orange-800 border-orange-200',
      'red': 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getStatusText = (status) => {
    const texts = {
      'green': 'Compliant',
      'yellow': '1 Month Left',
      'orange': '15 Days Left',
      'red': 'Critical - 7 Days'
    };
    return texts[status] || 'Unknown';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Compliance Overview</h3>
        <p className="text-sm text-gray-600">Recent compliance status updates</p>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {complianceData.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-600">Expires: {item.expiryDate}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">{item.daysLeft} days left</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(item.status)}`}>
                  {getStatusText(item.status)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}