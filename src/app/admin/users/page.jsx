// app/admin/users/page.jsx
'use client';
import { useState, useEffect } from 'react';
import UserList from '../components/UserList';
import CreateUserModal from '../components/CreateUserModal';
import EditUserModal from '../components/EditUserModal';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

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

  const handleCreateUser = (userData) => {
    const newUser = {
      id: users.length + 1,
      name: userData.name,
      email: userData.email,
      status: 'active',
      lastLogin: 'Never',
      createdAt: new Date().toISOString().split('T')[0]
    };
    setUsers([...users, newUser]);
    setShowCreateModal(false);
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
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
        >
          Create New User
        </button>
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

      {showCreateModal && (
        <CreateUserModal
          onClose={() => setShowCreateModal(false)}
          onSubmit={handleCreateUser}
        />
      )}

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