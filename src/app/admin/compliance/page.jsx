'use client';
import { useState, useEffect } from 'react';

export default function CompliancePage() {
  const [complianceData, setComplianceData] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    // Mock compliance data with new fields
    const mockData = [
      {
        id: 1,
        clientName: 'Acme Corporation',
        expiryDate: '2024-07-15',
        status: 'green',
        daysLeft: 35,
        lastRenewal: '2024-01-15',
        consentType: 'CTO',
        uan: 'UAN' + Math.floor(100000 + Math.random() * 900000)
      },
      {
        id: 2,
        clientName: 'Tech Solutions Ltd',
        expiryDate: '2024-06-25',
        status: 'yellow',
        daysLeft: 15,
        lastRenewal: '2024-02-01',
        consentType: 'CTE',
        uan: 'UAN' + Math.floor(100000 + Math.random() * 900000)
      },
      {
        id: 3,
        clientName: 'Healthcare Plus',
        expiryDate: '2024-06-17',
        status: 'red',
        daysLeft: 7,
        lastRenewal: '2024-03-10',
        consentType: 'CTO',
        uan: 'UAN' + Math.floor(100000 + Math.random() * 900000)
      },
      {
        id: 4,
        clientName: 'Manufacturing Co',
        expiryDate: '2024-06-20',
        status: 'orange',
        daysLeft: 10,
        lastRenewal: '2024-01-20',
        consentType: 'CTE',
        uan: 'UAN' + Math.floor(100000 + Math.random() * 900000)
      }
    ];
    setComplianceData(mockData);
  }, []);

  const filteredData = complianceData.filter(item => {
    if (filterStatus === 'all') return true;
    return item.status === filterStatus;
  });

  const handleSendReminder = (clientId) => {
    alert(`Reminder sent to client ID: ${clientId}`);
  };

  const handleRenewCompliance = (clientId) => {
    setComplianceData(complianceData.map(item => 
      item.id === clientId 
        ? { ...item, status: 'green', daysLeft: 365, lastRenewal: new Date().toISOString().split('T')[0] }
        : item
    ));
  };

  // ComplianceStats component logic
  const getStats = () => {
    const stats = {
      total: complianceData.length,
      compliant: complianceData.filter(item => item.status === 'green').length,
      warning: complianceData.filter(item => item.status === 'yellow').length,
      urgent: complianceData.filter(item => item.status === 'orange').length,
      critical: complianceData.filter(item => item.status === 'red').length
    };
    return stats;
  };

  const stats = getStats();

  const statCards = [
    {
      title: 'Total Clients',
      value: stats.total,
      icon: '🏢',
      color: 'blue',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Compliant',
      value: stats.compliant,
      icon: '✅',
      color: 'green',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Warning (1 Month)',
      value: stats.warning,
      icon: '⚠️',
      color: 'yellow',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    },
    {
      title: 'Urgent (15 Days)',
      value: stats.urgent,
      icon: '🔶',
      color: 'orange',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    {
      title: 'Critical (7 Days)',
      value: stats.critical,
      icon: '🚨',
      color: 'red',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    }
  ];

  // ComplianceTable component logic
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
      'red': 'Critical'
    };
    return texts[status] || 'Unknown';
  };

  const getStatusIcon = (status) => {
    const icons = {
      'green': '✅',
      'yellow': '⚠️',
      'orange': '🔶',
      'red': '🚨'
    };
    return icons[status] || '❓';
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        {statCards.map((card, index) => (
          <div key={index} className={`${card.bgColor} rounded-lg p-4 border border-gray-200`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{card.title}</p>
                <p className={`text-2xl font-bold ${card.textColor} mt-1`}>
                  {card.value}
                </p>
              </div>
              <div className="text-2xl">
                {card.icon}
              </div>
            </div>
            {stats.total > 0 && (
              <div className="mt-2">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-${card.color}-500 h-2 rounded-full`}
                      style={{ width: `${(card.value / stats.total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-xs text-gray-600">
                    {stats.total > 0 ? Math.round((card.value / stats.total) * 100) : 0}%
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Filter */}
      <div className="flex gap-4">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="all">All Status</option>
          <option value="green">Compliant (Green)</option>
          <option value="yellow">Warning (Yellow)</option>
          <option value="orange">Urgent (Orange)</option>
          <option value="red">Critical (Red)</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Consent Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  UAN
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Expiry Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Days Left
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{item.clientName}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.consentType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.uan}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="mr-2">{getStatusIcon(item.status)}</span>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(item.status)}`}>
                        {getStatusText(item.status)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.expiryDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${
                      item.daysLeft <= 7 ? 'text-red-600' :
                      item.daysLeft <= 15 ? 'text-orange-600' :
                      item.daysLeft <= 30 ? 'text-yellow-600' :
                      'text-green-600'
                    }`}>
                      {item.daysLeft} days
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleSendReminder(item.id)}
                        className="text-blue-600 hover:text-blue-900 text-sm"
                      >
                        Send Reminder
                      </button>
                      <button
                        onClick={() => handleRenewCompliance(item.id)}
                        className="text-green-600 hover:text-green-900 text-sm"
                      >
                        Mark Renewed
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}