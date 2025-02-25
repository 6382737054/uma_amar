import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ViewSubmissions = () => {
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, pending, submitted, rejected
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Mock data - replace with actual API calls
  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      const mockSubmissions = [
        {
          id: 1,
          guestName: 'CVSN Phaneendra Reddy',
          roomNumber: '112',
          checkIn: '2025-02-16T08:31:38',
          checkOut: '2025-02-29T01:16:43',
          idType: 'Aadhar card',
          idNumber: '365897560605',
          mobile: '9959965444',
          address: 'H.No 16-11-7/597, Plot No 597, Mohan Nagar, Fatehnagar, Sangaredddy, Telangana-502319, Hyderabad - 502319, Telangana, India.',
          status: 'Submitted',
          submissionTime: '2025-02-16T09:00:00',
          policeVerificationStatus: 'Verified',
          policeRemarks: 'All documents verified',
          stayDays: 13
        },
        {
          id: 2,
          guestName: 'Maria Garcia',
          roomNumber: '205',
          checkIn: '2025-02-25T14:15:00',
          checkOut: '2025-03-01T12:00:00',
          idType: 'Passport',
          idNumber: 'XYZ789123',
          mobile: '8877665544',
          address: '123 Main St, Apt 4B, New York, USA',
          status: 'Submitted',
          submissionTime: '2025-02-25T14:45:00',
          policeVerificationStatus: 'Pending',
          policeRemarks: '',
          stayDays: 4
        },
        {
          id: 3,
          guestName: 'David Chen',
          roomNumber: '118',
          checkIn: '2025-02-25T16:45:00',
          checkOut: '2025-02-26T09:00:00',
          idType: 'National ID',
          idNumber: 'ID12345678',
          mobile: '9898989898',
          address: '45 Park Avenue, Singapore',
          status: 'Pending',
          submissionTime: '',
          policeVerificationStatus: 'Not Submitted',
          policeRemarks: '',
          stayDays: 1
        },
        {
          id: 4,
          guestName: 'Ahmed Khan',
          roomNumber: '301',
          checkIn: '2025-02-20T10:30:00',
          checkOut: '2025-02-28T12:00:00',
          idType: 'Passport',
          idNumber: 'AB7654321',
          mobile: '7788990011',
          address: '78 Business Bay, Dubai, UAE',
          status: 'Submitted',
          submissionTime: '2025-02-20T11:15:00',
          policeVerificationStatus: 'Flagged',
          policeRemarks: 'Additional verification required',
          stayDays: 8
        },
        {
          id: 5,
          guestName: 'Emma Wilson',
          roomNumber: '215',
          checkIn: '2025-02-24T09:45:00',
          checkOut: '2025-02-27T10:00:00',
          idType: 'Driver License',
          idNumber: 'DL98765432',
          mobile: '9876543210',
          address: '56 Queen Street, London, UK',
          status: 'Pending',
          submissionTime: '',
          policeVerificationStatus: 'Not Submitted',
          policeRemarks: '',
          stayDays: 3
        }
      ];
      
      setSubmissions(mockSubmissions);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter submissions based on status and search term
  const filteredSubmissions = submissions.filter(submission => {
    // Apply status filter
    if (filter === 'pending' && submission.status !== 'Pending') return false;
    if (filter === 'submitted' && submission.status !== 'Submitted') return false;
    if (filter === 'flagged' && submission.policeVerificationStatus !== 'Flagged') return false;
    if (filter === 'verified' && submission.policeVerificationStatus !== 'Verified') return false;
    
    // Apply search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      return (
        submission.guestName.toLowerCase().includes(search) ||
        submission.roomNumber.toLowerCase().includes(search) ||
        submission.idNumber.toLowerCase().includes(search)
      );
    }
    
    return true;
  });

  // Handle submission view
  const handleViewSubmission = (submission) => {
    setSelectedSubmission(submission);
    setShowModal(true);
  };

  // Handle submission to police
  const handleSubmitToPolice = (id) => {
    // In a real app, you would make an API call to submit this record to police
    const updatedSubmissions = submissions.map(submission => {
      if (submission.id === id) {
        return {
          ...submission,
          status: 'Submitted',
          submissionTime: new Date().toISOString(),
          policeVerificationStatus: 'Pending'
        };
      }
      return submission;
    });
    
    setSubmissions(updatedSubmissions);
    alert('Record submitted to police successfully!');
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const options = { 
      year: 'numeric',
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  // Get badge class based on status
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Submitted':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Get badge class based on police verification status
  const getVerificationBadgeClass = (status) => {
    switch (status) {
      case 'Verified':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-blue-100 text-blue-800';
      case 'Flagged':
        return 'bg-red-100 text-red-800';
      case 'Not Submitted':
        return 'bg-gray-100 text-gray-800';
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
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-9.618 5.04L12 20.58l9.618-12.596A11.955 11.955 0 0112 2.944z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="relative">
              <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
                Guest Submissions
              </h1>
              <p className="mt-2 text-lg text-blue-100 max-w-3xl">
                View and manage all guest submissions for police verification.
              </p>
            </div>
          </div>
        </div>
        
        {/* Filter and Search */}
        <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <label htmlFor="filter" className="text-sm font-medium text-gray-700">Filter:</label>
              <select
                id="filter"
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Submissions</option>
                <option value="pending">Pending Submission</option>
                <option value="submitted">Submitted to Police</option>
                <option value="verified">Verified by Police</option>
                <option value="flagged">Flagged by Police</option>
              </select>
            </div>
            
            <div className="w-full sm:w-64">
              <input
                type="text"
                placeholder="Search by name, room, or ID"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        {/* Submissions Table */}
        <div className="bg-white overflow-hidden shadow-lg rounded-lg">
          {loading ? (
            <div className="p-10 text-center">
              <svg className="animate-spin h-10 w-10 mx-auto text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="mt-4 text-gray-500">Loading submissions...</p>
            </div>
          ) : filteredSubmissions.length === 0 ? (
            <div className="p-10 text-center">
              <svg className="h-16 w-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="mt-4 text-gray-500">No submissions found matching your criteria.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gradient-to-r from-blue-700 to-indigo-800">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Guest Details
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Stay Information
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                      ID Information
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Submission Status
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Police Verification
                    </th>
                    <th scope="col" className="relative px-6 py-4">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredSubmissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{submission.guestName}</div>
                        <div className="text-sm text-gray-500">Room {submission.roomNumber}</div>
                        <div className="text-xs text-gray-500">{submission.mobile}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Check In: {formatDate(submission.checkIn)}</div>
                        <div className="text-sm text-gray-500">Check Out: {formatDate(submission.checkOut)}</div>
                        <div className="text-xs text-gray-500">Duration: {submission.stayDays} days</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{submission.idType}</div>
                        <div className="text-sm font-mono text-gray-500">{submission.idNumber}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(submission.status)}`}>
                          {submission.status}
                        </span>
                        {submission.submissionTime && (
                          <div className="text-xs text-gray-500 mt-1">
                            {formatDate(submission.submissionTime)}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getVerificationBadgeClass(submission.policeVerificationStatus)}`}>
                          {submission.policeVerificationStatus}
                        </span>
                        {submission.policeRemarks && (
                          <div className="text-xs text-gray-500 mt-1">
                            {submission.policeRemarks}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleViewSubmission(submission)}
                          className="text-indigo-600 hover:text-indigo-900 mr-4"
                        >
                          View
                        </button>
                        {submission.status === 'Pending' && (
                          <button
                            onClick={() => handleSubmitToPolice(submission.id)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            Submit to Police
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      
      {/* Detail Modal */}
      {showModal && selectedSubmission && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-screen overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-indigo-700">
              <h3 className="text-lg font-medium text-white">
                Guest Submission Details
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div>
                  <h4 className="font-medium text-gray-900 text-lg mb-4">Guest Information</h4>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Name:</span>
                      <p className="text-sm text-gray-900">{selectedSubmission.guestName}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Mobile:</span>
                      <p className="text-sm text-gray-900">{selectedSubmission.mobile}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Address:</span>
                      <p className="text-sm text-gray-900">{selectedSubmission.address}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">ID Type:</span>
                      <p className="text-sm text-gray-900">{selectedSubmission.idType}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">ID Number:</span>
                      <p className="text-sm font-mono text-gray-900">{selectedSubmission.idNumber}</p>
                    </div>
                  </div>
                </div>
                
                {/* Right Column */}
                <div>
                  <h4 className="font-medium text-gray-900 text-lg mb-4">Stay Information</h4>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Room Number:</span>
                      <p className="text-sm text-gray-900">{selectedSubmission.roomNumber}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Check-in Time:</span>
                      <p className="text-sm text-gray-900">{formatDate(selectedSubmission.checkIn)}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Check-out Time:</span>
                      <p className="text-sm text-gray-900">{formatDate(selectedSubmission.checkOut)}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Duration:</span>
                      <p className="text-sm text-gray-900">{selectedSubmission.stayDays} days</p>
                    </div>
                  </div>
                  
                  <h4 className="font-medium text-gray-900 text-lg mt-6 mb-4">Verification Status</h4>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Submission Status:</span>
                      <p className="mt-1">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(selectedSubmission.status)}`}>
                          {selectedSubmission.status}
                        </span>
                      </p>
                    </div>
                    {selectedSubmission.submissionTime && (
                      <div>
                        <span className="text-sm font-medium text-gray-500">Submitted on:</span>
                        <p className="text-sm text-gray-900">{formatDate(selectedSubmission.submissionTime)}</p>
                      </div>
                    )}
                    <div>
                      <span className="text-sm font-medium text-gray-500">Police Verification:</span>
                      <p className="mt-1">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getVerificationBadgeClass(selectedSubmission.policeVerificationStatus)}`}>
                          {selectedSubmission.policeVerificationStatus}
                        </span>
                      </p>
                    </div>
                    {selectedSubmission.policeRemarks && (
                      <div>
                        <span className="text-sm font-medium text-gray-500">Police Remarks:</span>
                        <p className="text-sm text-gray-900">{selectedSubmission.policeRemarks}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* ID Card Preview (Placeholder) */}
              <div className="mt-6 border-t border-gray-200 pt-6">
                <h4 className="font-medium text-gray-900 text-lg mb-4">ID Document</h4>
                <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
                    </svg>
                    <p className="mt-2 text-sm text-gray-500">ID Document preview</p>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="mt-8 flex justify-end space-x-3">
                {selectedSubmission.status === 'Pending' && (
                  <button
                    onClick={() => {
                      handleSubmitToPolice(selectedSubmission.id);
                      setShowModal(false);
                    }}
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit to Police
                  </button>
                )}
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewSubmissions;