import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Reports = () => {
  const navigate = useNavigate();
  
  // Report type and date range state
  const [reportType, setReportType] = useState('guestRegistrations');
  const [dateRange, setDateRange] = useState('week');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isCustomRange, setIsCustomRange] = useState(false);
  
  // Report data state
  const [reportData, setReportData] = useState([]);
  const [summary, setSummary] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);
  
  // Set default start and end dates based on the selected date range
  useEffect(() => {
    const today = new Date();
    let start = new Date();
    
    if (dateRange === 'week') {
      // Last 7 days
      start.setDate(today.getDate() - 7);
    } else if (dateRange === 'month') {
      // Last 30 days
      start.setDate(today.getDate() - 30);
    } else if (dateRange === 'quarter') {
      // Last 90 days
      start.setDate(today.getDate() - 90);
    } else if (dateRange === 'custom') {
      setIsCustomRange(true);
      return;
    } else {
      setIsCustomRange(false);
    }
    
    setStartDate(start.toISOString().split('T')[0]);
    setEndDate(today.toISOString().split('T')[0]);
    setIsCustomRange(false);
  }, [dateRange]);
  
  // Generate the selected report
  const generateReport = () => {
    setIsLoading(true);
    
    // In a real application, this would be an API call to get report data
    setTimeout(() => {
      // Mock data for different report types
      if (reportType === 'guestRegistrations') {
        setReportData(mockGuestRegistrationsData);
        setSummary({
          totalGuests: 42,
          averageStayDuration: 3.5,
          pendingVerifications: 5,
          completedVerifications: 37
        });
      } else if (reportType === 'policeVerifications') {
        setReportData(mockPoliceVerificationsData);
        setSummary({
          totalSubmissions: 37,
          verifiedCount: 34,
          flaggedCount: 2,
          pendingCount: 1,
          averageVerificationTime: '4.2 hours'
        });
      } else if (reportType === 'occupancyTrends') {
        setReportData(mockOccupancyTrendsData);
        setSummary({
          averageOccupancy: '78%',
          peakOccupancy: '94%',
          peakDate: 'Feb 18, 2025',
          lowestOccupancy: '62%',
          lowestDate: 'Feb 24, 2025'
        });
      }
      
      setIsLoading(false);
      setReportGenerated(true);
    }, 1500);
  };
  
  // Handle report download
  const handleDownload = (format) => {
    // In a real application, this would generate and download the report file
    alert(`Downloading report in ${format.toUpperCase()} format`);
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric',
      month: 'short', 
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Mock data for guest registrations report
  const mockGuestRegistrationsData = [
    {
      id: 1,
      guestName: 'CVSN Phaneendra Reddy',
      roomNumber: '112',
      checkIn: '2025-02-16T08:31:38',
      checkOut: '2025-02-29T01:16:43',
      idType: 'Aadhar card',
      idNumber: '365897560605',
      status: 'Verified',
      stayDays: 13
    },
    {
      id: 2,
      guestName: 'Maria Garcia',
      roomNumber: '205',
      checkIn: '2025-02-20T14:15:00',
      checkOut: '2025-02-24T12:00:00',
      idType: 'Passport',
      idNumber: 'XYZ789123',
      status: 'Verified',
      stayDays: 4
    },
    {
      id: 3,
      guestName: 'David Chen',
      roomNumber: '118',
      checkIn: '2025-02-21T16:45:00',
      checkOut: '2025-02-23T09:00:00',
      idType: 'National ID',
      idNumber: 'ID12345678',
      status: 'Verified',
      stayDays: 2
    },
    {
      id: 4,
      guestName: 'Ahmed Khan',
      roomNumber: '301',
      checkIn: '2025-02-22T10:30:00',
      checkOut: '2025-02-25T12:00:00',
      idType: 'Passport',
      idNumber: 'AB7654321',
      status: 'Flagged',
      stayDays: 3
    },
    {
      id: 5,
      guestName: 'Emma Wilson',
      roomNumber: '215',
      checkIn: '2025-02-24T09:45:00',
      checkOut: '2025-02-27T10:00:00',
      idType: 'Driver License',
      idNumber: 'DL98765432',
      status: 'Pending',
      stayDays: 3
    }
  ];
  
  // Mock data for police verifications report
  const mockPoliceVerificationsData = [
    {
      id: 1,
      guestName: 'CVSN Phaneendra Reddy',
      submissionTime: '2025-02-16T09:00:00',
      verificationTime: '2025-02-16T14:22:00',
      verificationStatus: 'Verified',
      responseTime: '5h 22m'
    },
    {
      id: 2,
      guestName: 'Maria Garcia',
      submissionTime: '2025-02-20T14:45:00',
      verificationTime: '2025-02-20T18:10:00',
      verificationStatus: 'Verified',
      responseTime: '3h 25m'
    },
    {
      id: 3,
      guestName: 'David Chen',
      submissionTime: '2025-02-21T17:00:00',
      verificationTime: '2025-02-21T20:15:00',
      verificationStatus: 'Verified',
      responseTime: '3h 15m'
    },
    {
      id: 4,
      guestName: 'Ahmed Khan',
      submissionTime: '2025-02-22T11:15:00',
      verificationTime: '2025-02-22T16:30:00',
      verificationStatus: 'Flagged',
      responseTime: '5h 15m'
    },
    {
      id: 5,
      guestName: 'Emma Wilson',
      submissionTime: '2025-02-24T10:45:00',
      verificationTime: '',
      verificationStatus: 'Pending',
      responseTime: 'Pending'
    }
  ];
  
  // Mock data for occupancy trends report
  const mockOccupancyTrendsData = [
    { date: '2025-02-16', occupancyRate: 75, totalRooms: 100, occupiedRooms: 75 },
    { date: '2025-02-17', occupancyRate: 82, totalRooms: 100, occupiedRooms: 82 },
    { date: '2025-02-18', occupancyRate: 94, totalRooms: 100, occupiedRooms: 94 },
    { date: '2025-02-19', occupancyRate: 88, totalRooms: 100, occupiedRooms: 88 },
    { date: '2025-02-20', occupancyRate: 85, totalRooms: 100, occupiedRooms: 85 },
    { date: '2025-02-21', occupancyRate: 78, totalRooms: 100, occupiedRooms: 78 },
    { date: '2025-02-22', occupancyRate: 80, totalRooms: 100, occupiedRooms: 80 },
    { date: '2025-02-23', occupancyRate: 75, totalRooms: 100, occupiedRooms: 75 },
    { date: '2025-02-24', occupancyRate: 62, totalRooms: 100, occupiedRooms: 62 },
    { date: '2025-02-25', occupancyRate: 73, totalRooms: 100, occupiedRooms: 73 }
  ];
  
  // Get badge class based on verification status
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Verified':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Flagged':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 rounded-lg shadow-xl overflow-hidden">
          <div className="relative px-6 py-10 sm:px-10 sm:py-12">
            <div className="absolute inset-0 opacity-10">
              <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="relative">
              <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
                Report Generation
              </h1>
              <p className="mt-2 text-lg text-blue-100 max-w-3xl">
                Generate and download detailed reports for your hotel operations.
              </p>
            </div>
          </div>
        </div>
        
        {/* Report Configuration Form */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Configure Report Parameters</h2>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              {/* Report Type */}
              <div className="sm:col-span-2">
                <label htmlFor="reportType" className="block text-sm font-medium text-gray-700">
                  Report Type
                </label>
                <select
                  id="reportType"
                  name="reportType"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                >
                  <option value="guestRegistrations">Guest Registrations</option>
                  <option value="policeVerifications">Police Verifications</option>
                  <option value="occupancyTrends">Occupancy Trends</option>
                </select>
              </div>
              
              {/* Date Range */}
              <div className="sm:col-span-2">
                <label htmlFor="dateRange" className="block text-sm font-medium text-gray-700">
                  Date Range
                </label>
                <select
                  id="dateRange"
                  name="dateRange"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                >
                  <option value="week">Last 7 Days</option>
                  <option value="month">Last 30 Days</option>
                  <option value="quarter">Last 90 Days</option>
                  <option value="custom">Custom Range</option>
                </select>
              </div>
              
              {/* Custom Date Range */}
              {isCustomRange && (
                <>
                  <div className="sm:col-span-1">
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                      Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      id="startDate"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                      End Date
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      id="endDate"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                </>
              )}
              
              {/* Generate Button */}
              <div className="sm:col-span-2 flex items-end">
                <button
                  type="button"
                  onClick={generateReport}
                  disabled={isLoading}
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating...
                    </>
                  ) : 'Generate Report'}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Generated Report */}
        {reportGenerated && !isLoading && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Report Header */}
            <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {reportType === 'guestRegistrations' ? 'Guest Registrations Report' :
                     reportType === 'policeVerifications' ? 'Police Verifications Report' :
                     'Occupancy Trends Report'}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    {formatDate(startDate)} - {formatDate(endDate)}
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 flex space-x-3">
                  <button
                    type="button"
                    onClick={() => handleDownload('pdf')}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    PDF
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDownload('excel')}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Excel
                  </button>
                </div>
              </div>
            </div>
            
            {/* Report Summary */}
            <div className="px-4 py-5 sm:p-6 border-b border-gray-200">
              <h4 className="text-base font-medium text-gray-900 mb-4">Summary</h4>
              <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-4">
                {reportType === 'guestRegistrations' && (
                  <>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Total Guests</dt>
                      <dd className="mt-1 text-xl font-semibold text-gray-900">{summary.totalGuests}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Average Stay Duration</dt>
                      <dd className="mt-1 text-xl font-semibold text-gray-900">{summary.averageStayDuration} days</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Pending Verifications</dt>
                      <dd className="mt-1 text-xl font-semibold text-gray-900">{summary.pendingVerifications}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Completed Verifications</dt>
                      <dd className="mt-1 text-xl font-semibold text-gray-900">{summary.completedVerifications}</dd>
                    </div>
                  </>
                )}
                
                {reportType === 'policeVerifications' && (
                  <>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Total Submissions</dt>
                      <dd className="mt-1 text-xl font-semibold text-gray-900">{summary.totalSubmissions}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Verified</dt>
                      <dd className="mt-1 text-xl font-semibold text-green-600">{summary.verifiedCount}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Flagged</dt>
                      <dd className="mt-1 text-xl font-semibold text-red-600">{summary.flaggedCount}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Average Response Time</dt>
                      <dd className="mt-1 text-xl font-semibold text-gray-900">{summary.averageVerificationTime}</dd>
                    </div>
                  </>
                )}
                
                {reportType === 'occupancyTrends' && (
                  <>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Average Occupancy</dt>
                      <dd className="mt-1 text-xl font-semibold text-gray-900">{summary.averageOccupancy}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Peak Occupancy</dt>
                      <dd className="mt-1 text-xl font-semibold text-green-600">{summary.peakOccupancy}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Peak Date</dt>
                      <dd className="mt-1 text-lg font-semibold text-gray-900">{summary.peakDate}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Lowest Occupancy</dt>
                      <dd className="mt-1 text-xl font-semibold text-red-600">{summary.lowestOccupancy}</dd>
                    </div>
                  </>
                )}
              </dl>
            </div>
            
            {/* Report Data */}
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-base font-medium text-gray-900 mb-4">Detailed Data</h4>
              
              {/* Guest Registrations Table */}
              {reportType === 'guestRegistrations' && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Guest Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Room
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Check-in Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Check-out Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Stay Duration
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ID Details
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {reportData.map((guest) => (
                        <tr key={guest.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {guest.guestName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {guest.roomNumber}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatDate(guest.checkIn)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatDate(guest.checkOut)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {guest.stayDays} days
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {guest.idType}: {guest.idNumber}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(guest.status)}`}>
                              {guest.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              
            {/* Police Verifications Table */}
            {reportType === 'policeVerifications' && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Guest Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Submission Time
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Verification Time
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Response Time
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {reportData.map((verification) => (
                        <tr key={verification.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {verification.guestName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatDate(verification.submissionTime)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {verification.verificationTime ? formatDate(verification.verificationTime) : 'Pending'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {verification.responseTime}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(verification.verificationStatus)}`}>
                              {verification.verificationStatus}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              
              {/* Occupancy Trends Table */}
              {reportType === 'occupancyTrends' && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total Rooms
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Occupied Rooms
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Occupancy Rate
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {reportData.map((day, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {formatDate(day.date)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {day.totalRooms}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {day.occupiedRooms}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center">
                              <span className={`
                                ${day.occupancyRate >= 90 ? 'text-green-600' : 
                                   day.occupancyRate >= 70 ? 'text-blue-600' : 
                                   day.occupancyRate >= 50 ? 'text-yellow-600' : 'text-red-600'}
                              `}>
                                {day.occupancyRate}%
                              </span>
                              <div className="ml-4 w-32 bg-gray-200 rounded-full h-2.5">
                                <div 
                                  className={`h-2.5 rounded-full ${
                                    day.occupancyRate >= 90 ? 'bg-green-600' : 
                                    day.occupancyRate >= 70 ? 'bg-blue-600' : 
                                    day.occupancyRate >= 50 ? 'bg-yellow-600' : 'bg-red-600'
                                  }`}
                                  style={{width: `${day.occupancyRate}%`}}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;