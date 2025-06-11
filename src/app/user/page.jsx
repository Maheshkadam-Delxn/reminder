'use client'

// Sample data for compliance cards
const complianceData = [
  {
    type: 'CTE',
    status: 'Valid',
    expiryDate: '2025-12-15',
    daysLeft: 188,
    color: 'green'
  },
  {
    type: 'CTO',
    status: 'Expiring',
    expiryDate: '2025-07-20',
    daysLeft: 40,
    color: 'yellow'
  },
  {
    type: 'CTEE',
    status: 'Valid',
    expiryDate: '2026-03-10',
    daysLeft: 273,
    color: 'green'
  },
  {
    type: 'RCTO',
    status: 'Expired',
    expiryDate: '2025-05-01',
    daysLeft: -40,
    color: 'red'
  }
]

function ComplianceCard({ compliance }) {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Valid': return '✅'
      case 'Expiring': return '⚠️'
      case 'Expired': return '❌'
      default: return '❓'
    }
  }

  const getStatusColor = (color) => {
    switch (color) {
      case 'green': return 'bg-green-100 text-green-800 border-green-200'
      case 'yellow': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'red': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800">{compliance.type}</h3>
        <span className="text-2xl">{getStatusIcon(compliance.status)}</span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Status:</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(compliance.color)}`}>
            {compliance.status}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Expiry Date:</span>
          <span className="text-sm font-medium text-gray-800">{formatDate(compliance.expiryDate)}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Days Left:</span>
          <span className={`text-sm font-bold ${
            compliance.daysLeft < 0 ? 'text-red-600' : 
            compliance.daysLeft < 60 ? 'text-yellow-600' : 'text-green-600'
          }`}>
            {compliance.daysLeft < 0 ? `${Math.abs(compliance.daysLeft)} days overdue` : `${compliance.daysLeft} days`}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <div className="text-sm text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {complianceData.map((compliance, index) => (
          <ComplianceCard key={index} compliance={compliance} />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">2</div>
            <div className="text-sm text-gray-600">Valid Consents</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">1</div>
            <div className="text-sm text-gray-600">Expiring Soon</div>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="text-2xl font-bold text-red-600">1</div>
            <div className="text-sm text-gray-600">Expired</div>
          </div>
        </div>
      </div>
    </div>
  )
}