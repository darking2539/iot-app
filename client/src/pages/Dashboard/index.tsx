import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Users</h2>
            <p className="text-gray-600">Total: 100</p>
            <p className="text-gray-600">Active: 80</p>
            <p className="text-gray-600">Inactive: 20</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Products</h2>
            <p className="text-gray-600">Total: 200</p>
            <p className="text-gray-600">In Stock: 150</p>
            <p className="text-gray-600">Out of Stock: 50</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Sales</h2>
            <p className="text-gray-600">Total: $10,000</p>
            <p className="text-gray-600">Today: $500</p>
            <p className="text-gray-600">This Week: $3,000</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Orders</h2>
            <p className="text-gray-600">Total: 50</p>
            <p className="text-gray-600">Pending: 10</p>
            <p className="text-gray-600">Completed: 40</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
