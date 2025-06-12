// app/admin/users/page.jsx
'use client';
import { useState, useEffect } from 'react';
import UserList from '../components/UserList';
import EditUserModal from '../components/EditUserModal';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [createFormData, setCreateFormData] = useState({
    loginId: '',
    email: '',
    password: ''
  });

  // Mock data - simplified to only include fields used in creation
  useEffect(() => {
    const mockUsers = [
      {
        id: 1,
        name: 'Acme Corporation',
        email: 'admin@acme.com',
        status: 'active',
        lastLogin: '2024-06-09',
        createdAt: '2024-01-15'
      },
      {
        id: 2,
        name: 'Tech Solutions Ltd',
        email: 'contact@techsol.com',
        status: 'active',
        lastLogin: '2024-06-08',
        createdAt: '2024-02-01'
      },
      {
        id: 3,
        name: 'Healthcare Plus',
        email: 'info@healthplus.com',
        status: 'inactive',
        lastLogin: '2024-06-01',
        createdAt: '2024-03-10'
      }
    ];
    setUsers(mockUsers);
  }, []);

  const handleCreateUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      name: createFormData.loginId,
      email: createFormData.email,
      status: 'active',
      lastLogin: 'Never',
      createdAt: new Date().toISOString().split('T')[0],
      // Add any additional default fields you need
      phone: '',
      complianceCategory: 'General',
      complianceStatus: 'compliant',
      expiryDate: new Date(new Date().setMonth(new Date().getMonth() + 6)).toISOString().split('T')[0]
    };
    setUsers([...users, newUser]);
    // Reset form
    setCreateFormData({
      loginId: '',
      email: '',
      password: ''
    });
  };

  const handleCreateFormChange = (e) => {
    setCreateFormData({
      ...createFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleEditUser = (userData) => {
    setUsers(users.map(user => 
      user.id === editingUser.id ? { ...user, ...userData } : user
    ));
    setEditingUser(null);
  };

  const handleDeleteUser = (userId) => {
    if (confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="mt-1 text-sm text-gray-600">
            Create, edit, and manage user accounts
          </p>
        </div>
      </div>

      {/* Create User Form - Now permanently visible */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Create New User</h2>
        <form onSubmit={handleCreateUser} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Login ID</label>
              <input
                type="text"
                name="loginId"
                required
                value={createFormData.loginId}
                onChange={handleCreateFormChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                value={createFormData.email}
                onChange={handleCreateFormChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                required
                value={createFormData.password}
                onChange={handleCreateFormChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700"
            >
              Create User
            </button>
          </div>
        </form>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div>
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      <UserList
        users={filteredUsers}
        onEdit={setEditingUser}
        onDelete={handleDeleteUser}
      />

      {editingUser && (
        <EditUserModal
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSubmit={handleEditUser}
        />
      )}
    </div>
  );
}