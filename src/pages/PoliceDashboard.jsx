import React, { useState, useEffect } from 'react';

const PoliceDashboard = () => {
  const [stats, setStats] = useState({
    totalHotels: 0,
    activeGuests: 0,
    submissionsToday: 0,
    alerts: 0
  });
  
  const [recentSubmissions, setRecentSubmissions] = useState([]);
  
  // Mock data - replace with actual API calls later
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStats({
        totalHotels: 24,
        activeGuests: 187,
        submissionsToday: 43,
        alerts: 2
      });
      
      setRecentSubmissions([
        { 
          id: 1, 
          guestName: 'John Smith', 
          hotelName: 'Grand Hotel',
          checkIn: '2025-02-25T08:30:00', 
          checkOut: '2025-02-27T10:00:00',
          idType: 'Passport',
          idNumber: 'AB1234567',
          submissionTime: '2025-02-25T08:45:00',
          status: 'Normal'
        },
        { 
          id: 2, 
          guestName: 'Maria Garcia', 
          hotelName: 'Sunrise Inn',
          checkIn: '2025-02-25T14:15:00', 
          checkOut: '2025-03-01T12:00:00',
          idType: 'Driver License',
          idNumber: 'DL98765432',
          submissionTime: '2025-02-25T14:30:00',
          status: 'Normal'
        },
        { 
          id: 3, 
          guestName: 'Robert Johnson', 
          hotelName: 'City Center Hotel',
          checkIn: '2025-02-25T11:20:00', 
          checkOut: '2025-02-26T10:00:00',
          idType: 'National ID',
          idNumber: 'ID12345678',
          submissionTime: '2025-02-25T11:45:00',
          status: 'Alert'
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
                <path d="M17 11v2h-1.46l-3.77 3.76c-.2.2-.51.2-.71 0l-1.94-1.94v.68c0 .28-.22.5-.5.5s-.5-.22-.5-.5V14h-.68c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1.6c.1 0 .2.04.26.11l1.82 1.82 3.54-3.54c.06-.06.15-.11.24-.11H17zM3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2z" fill="white"/>
              </svg>
            </div>
            <div className="relative flex flex-col md:flex-row items-center justify-between">
              <div>
                <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Police Verification Portal
                </h1>
                <p className="mt-2 text-lg text-blue-100 max-w-3xl">
                  Real-time monitoring system for guest registrations across all hotels in the district.
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
                Registered Hotels
              </dt>
              <dd className="mt-1 text-3xl font-bold text-white">
                {stats.totalHotels}
              </dd>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 overflow-hidden shadow-lg rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-indigo-100 truncate">
                Active Guests
              </dt>
              <dd className="mt-1 text-3xl font-bold text-white">
                {stats.activeGuests}
              </dd>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-teal-600 to-emerald-700 overflow-hidden shadow-lg rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-teal-100 truncate">
                Submissions Today
              </dt>
              <dd className="mt-1 text-3xl font-bold text-white">
                {stats.submissionsToday}
              </dd>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-600 to-rose-700 overflow-hidden shadow-lg rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-red-100 truncate">
                Active Alerts
              </dt>
              <dd className="mt-1 text-3xl font-bold text-white">
                {stats.alerts}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Advanced Guest Search
            </button>
            
            <button
              type="button"
              className="inline-flex items-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg shadow-lg text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transform transition hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Manage Active Alerts
            </button>
            
            <button
              type="button"
              className="inline-flex items-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg shadow-lg text-white bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transform transition hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Generate Intelligence Report
            </button>
          </div>
        </div>
        
    
        
        {/* Recent Submissions Table */}
        <div className="mt-8">
          <div className="flex items-center mb-4">
            <div className="h-8 w-2 bg-indigo-600 rounded-full mr-3"></div>
            <h2 className="text-xl font-bold text-gray-800">Recent Guest Submissions</h2>
          </div>
          <div className="mt-4 flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-xl bg-white">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gradient-to-r from-blue-700 to-indigo-800">
                      <tr>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Guest / Hotel
                        </th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Stay Period
                        </th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                          ID Information
                        </th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Submission Time
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
                      {recentSubmissions.map((submission) => (
                        <tr key={submission.id} className={submission.status === 'Alert' ? 'bg-red-50 hover:bg-red-100 transition-colors' : 'hover:bg-blue-50 transition-colors'}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{submission.guestName}</div>
                            <div className="text-sm text-gray-500">{submission.hotelName}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{formatDate(submission.checkIn)}</div>
                            <div className="text-sm text-gray-500">to {formatDate(submission.checkOut)}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{submission.idType}</div>
                            <div className="text-sm text-gray-500 font-mono">{submission.idNumber}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-3 py-1 inline-flex text-sm font-semibold rounded-full bg-blue-100 text-blue-800">
                              {formatDate(submission.submissionTime)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              submission.status === 'Normal' 
                                ? 'bg-emerald-100 text-emerald-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {submission.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 font-medium hover:underline transition-colors mr-3">
                              View
                            </button>
                    
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

export default PoliceDashboard;