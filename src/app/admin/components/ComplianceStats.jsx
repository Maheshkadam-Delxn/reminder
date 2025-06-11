'use client';

export default function ComplianceStats({ data }) {
  const getStats = () => {
    const stats = {
      total: data.length,
      compliant: data.filter(item => item.status === 'green').length,
      warning: data.filter(item => item.status === 'yellow').length,
      urgent: data.filter(item => item.status === 'orange').length,
      critical: data.filter(item => item.status === 'red').length
    };
    return stats;
  };

  const stats = getStats();

  const statCards = [
    {
      title: 'Total Companies',
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

  return (
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
  );
}
