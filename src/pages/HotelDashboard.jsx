import React, { useState, useEffect } from 'react';

const HotelDashboard = () => {
  const [stats, setStats] = useState({
    totalGuests: 0,
    pendingSubmissions: 0,
    submittedToday: 0,
    occupancyRate: 0
  });
  
  const [recentGuests, setRecentGuests] = useState([]);
  
  // Mock data - replace with actual API calls later
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStats({
        totalGuests: 156,
        pendingSubmissions: 3,
        submittedToday: 12,
        occupancyRate: 87
      });
      
      setRecentGuests([
        { 
          id: 1, 
          name: 'John Smith', 
          roomNumber: '302',
          checkIn: '2025-02-25T08:30:00', 
          checkOut: '2025-02-27T10:00:00',
          idType: 'Passport',
          idNumber: 'AB1234567',
          submissionTime: '2025-02-25T08:45:00',
          status: 'Submitted'
        },
        { 
          id: 2, 
          name: 'Maria Garcia', 
          roomNumber: '205',
          checkIn: '2025-02-25T14:15:00', 
          checkOut: '2025-03-01T12:00:00',
          idType: 'Driver License',
          idNumber: 'DL98765432',
          submissionTime: '2025-02-25T14:30:00',
          status: 'Submitted'
        },
        { 
          id: 3, 
          name: 'David Chen', 
          roomNumber: '118',
          checkIn: '2025-02-25T16:45:00', 
          checkOut: '2025-02-26T09:00:00',
          idType: 'National ID',
          idNumber: 'ID12345678',
          submissionTime: '2025-02-25T16:45:00',
          status: 'Pending'
        }
      ]);
    }, 500);
  }, []);
  
  // Format date for display
  const formatDate = (dateString) => {
    const options = { 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="mb-8 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 rounded-lg shadow-xl overflow-hidden">
          <div className="relative px-6 py-10 sm:px-10 sm:py-12">
            <div className="absolute inset-0 opacity-10">
              <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="white"/>
              </svg>
            </div>
            <div className="relative flex flex-col md:flex-row items-center justify-between">
              <div>
                <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Hotel Management Portal
                </h1>
                <p className="mt-2 text-lg text-blue-100 max-w-3xl">
                  Real-time tracking system for guest registrations and police verification submissions.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="inline-flex rounded-md shadow-sm">
                
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden shadow-lg rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-blue-100 truncate">
                Total Guests
              </dt>
              <dd className="mt-1 text-3xl font-bold text-white">
                {stats.totalGuests}
              </dd>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 overflow-hidden shadow-lg rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-indigo-100 truncate">
                Pending Submissions
              </dt>
              <dd className="mt-1 text-3xl font-bold text-white">
                {stats.pendingSubmissions}
              </dd>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-teal-600 to-emerald-700 overflow-hidden shadow-lg rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-teal-100 truncate">
                Submitted Today
              </dt>
              <dd className="mt-1 text-3xl font-bold text-white">
                {stats.submittedToday}
              </dd>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-600 to-rose-700 overflow-hidden shadow-lg rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-red-100 truncate">
                Current Occupancy
              </dt>
              <dd className="mt-1 text-3xl font-bold text-white">
                {stats.occupancyRate}%
              </dd>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="mt-8">
          <div className="flex items-center mb-4">
            <div className="h-8 w-2 bg-blue-600 rounded-full mr-3"></div>
            <h2 className="text-xl font-bold text-gray-800">Quick Actions</h2>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg shadow-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Register New Guest
            </button>
            
            <button
              type="button"
              className="inline-flex items-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg shadow-lg text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transform transition hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Submit Pending Verifications
            </button>
            
            <button
              type="button"
              className="inline-flex items-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg shadow-lg text-white bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transform transition hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Generate Guest Report
            </button>
          </div>
        </div>
        
        {/* Recent Submissions Table */}
        <div className="mt-8">
          <div className="flex items-center mb-4">
            <div className="h-8 w-2 bg-indigo-600 rounded-full mr-3"></div>
            <h2 className="text-xl font-bold text-gray-800">Recent Check-ins</h2>
          </div>
          <div className="mt-4 flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-xl bg-white">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gradient-to-r from-blue-700 to-indigo-800">
                      <tr>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Guest / Room
                        </th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Stay Period
                        </th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                          ID Information
                        </th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Check-in Time
                        </th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="relative px-6 py-4">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentGuests.map((guest) => (
                        <tr key={guest.id} className={guest.status === 'Pending' ? 'bg-red-50 hover:bg-red-100 transition-colors' : 'hover:bg-blue-50 transition-colors'}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{guest.name}</div>
                            <div className="text-sm text-gray-500">Room {guest.roomNumber}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{formatDate(guest.checkIn)}</div>
                            <div className="text-sm text-gray-500">to {formatDate(guest.checkOut)}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{guest.idType}</div>
                            <div className="text-sm text-gray-500 font-mono">{guest.idNumber}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-3 py-1 inline-flex text-sm font-semibold rounded-full bg-blue-100 text-blue-800">
                              {formatDate(guest.submissionTime)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              guest.status === 'Submitted' 
                                ? 'bg-emerald-100 text-emerald-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {guest.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 font-medium hover:underline transition-colors mr-3">
                              View
                            </button>
                            {guest.status === 'Pending' && (
                              <button className="text-blue-600 hover:text-blue-900 font-medium hover:underline transition-colors">
                                Submit
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDashboard;