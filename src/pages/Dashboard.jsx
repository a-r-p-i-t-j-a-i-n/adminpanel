import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', password: '', role: 'user' });
  const [deleteUserId, setDeleteUserId] = useState('');
  const [changePasswordUserId, setChangePasswordUserId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [databaseId, setDatabaseId] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem('token');
    setToken(tokenFromStorage);

    if (tokenFromStorage) {
      fetchUsers(tokenFromStorage);
    }
  }, []);

  const fetchUsers = async (token) => {
    try {
      const userList = await ApiService.getAllUsers(token);
      setUsers(userList);
    } catch (error) {
      console.error('Error fetching users:', error.message);
      // Optionally handle error here
    }
  };

  const handleCreateUser = async () => {
    try {
      await ApiService.createUser(newUser, token);
      await fetchUsers(token);
      setNewUser({ username: '', password: '', role: 'user' });
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  };

  const handleDeleteUser = async () => {
    try {
      await ApiService.deleteUser(deleteUserId, token);
      await fetchUsers(token);
      setDeleteUserId('');
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  };

  const handleChangePassword = async () => {
    try {
      await ApiService.changePassword(changePasswordUserId, newPassword, token);
      await fetchUsers(token);
      setChangePasswordUserId('');
      setNewPassword('');
    } catch (error) {
      console.error('Error changing password:', error.message);
    }
  };

  const handleAssignUserToDatabase = async () => {
    try {
      await ApiService.assignUserToDatabase(deleteUserId, databaseId, token);
      await fetchUsers(token);
      setDeleteUserId('');
      setDatabaseId('');
    } catch (error) {
      console.error('Error assigning user to database:', error.message);
    }
  };

  return (
    <div>
      <h1>User Management</h1>
      <div>
        <h2>Create User</h2>
        <input
          type="text"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
        <select value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button onClick={handleCreateUser}>Create User</button>
      </div>
      <div>
        <h2>Delete User</h2>
        <input
          type="text"
          placeholder="User ID"
          value={deleteUserId}
          onChange={(e) => setDeleteUserId(e.target.value)}
        />
        <button onClick={handleDeleteUser}>Delete User</button>
      </div>
      <div>
        <h2>Change Password</h2>
        <input
          type="text"
          placeholder="User ID"
          value={changePasswordUserId}
          onChange={(e) => setChangePasswordUserId(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button onClick={handleChangePassword}>Change Password</button>
      </div>
      <div>
        <h2>Assign User to Database</h2>
        <input
          type="text"
          placeholder="User ID"
          value={deleteUserId}
          onChange={(e) => setDeleteUserId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Database ID"
          value={databaseId}
          onChange={(e) => setDatabaseId(e.target.value)}
        />
        <button onClick={handleAssignUserToDatabase}>Assign User to Database</button>
      </div>
      <div>
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user._id}>{user.username}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
