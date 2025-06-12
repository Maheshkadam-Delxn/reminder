"use client";

export default function ComplianceManagementDemo() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto py-4">
        {/* Client Profile Management */}
        <h2 className="mb-4 text-2xl font-bold text-blue-600">Client Profile Management</h2>
        <div className="mb-6 rounded-lg bg-white p-6 shadow">
          <form>
            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Client Name</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter client name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Contact Details</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter contact details"
                />
              </div>
            </div>

            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter location"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Industry Type</label>
                <select className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none">
                  <option>Construction</option>
                  <option>Manufacturing</option>
                  <option>IT</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">Email ID</label>
                <input
                  type="email"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                  placeholder="client@email.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Login ID</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                  placeholder="login123"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                  placeholder="********"
                />
              </div>
            </div>

            <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none">
              Save Client
            </button>
          </form>
        </div>

        {/* Consent Entry */}
        <h2 className="mb-4 text-2xl font-bold text-green-600">Consent Entry</h2>
        <div className="mb-6 rounded-lg bg-white p-6 shadow">
          <form>
            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Select Client</label>
                <select className="w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:outline-none">
                  <option>BMW</option>
                  <option>Hero</option>
                  <option>Splender</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Consent Type</label>
                <select className="w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:outline-none">
                  <option>CTE</option>
                  <option>CTO</option>
                  <option>CTEE</option>
                  <option>RCTO</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Consent Category</label>
                <select className="w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:outline-none">
                  <option>Green</option>
                  <option>Orange</option>
                  <option>Red</option>
                  <option>White</option>
                  <option>Blue</option>
                </select>
              </div>
            </div>

            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">UAN Number</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Receive Date</label>
                <input
                  type="date"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Expiry Date</label>
                <input
                  type="date"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-gray-700">Document Details</label>
              <textarea
                className="w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:outline-none"
                rows="2"
                placeholder="Enter any additional details"
              ></textarea>
            </div>

            <button className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus:outline-none">
              Save Consent
            </button>
          </form>
        </div>

        {/* Bank Guarantee Entry */}
        <h2 className="mb-4 text-2xl font-bold text-red-600">Bank Guarantee Entry</h2>
        <div className="rounded-lg bg-white p-6 shadow">
          <form>
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="md:col-span-1">
                <label className="mb-2 block text-sm font-medium text-gray-700">Select Client</label>
                <select className="w-full rounded-md border border-gray-300 p-2 focus:border-red-500 focus:outline-none">
                  <option>BMW</option>
                  <option>Hero</option>
                  <option>Splender</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Receive Date</label>
                <input
                  type="date"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-red-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Expiry Date</label>
                <input
                  type="date"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-red-500 focus:outline-none"
                />
              </div>
            </div>

            <button className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700 focus:outline-none">
              Save BG Info
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}