import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchRecords = () => {
  const navigate = useNavigate();
  
  // Search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [ageRange, setAgeRange] = useState('all');
  const [gender, setGender] = useState('all');
  const [guestType, setGuestType] = useState('all');
  const [stayDuration, setStayDuration] = useState('all');
  const [checkInDate, setCheckInDate] = useState('');
  const [idType, setIdType] = useState('all');
  
  // Records state
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  // Load mock data
  useEffect(() => {
    // In a real app, this would be an API call
    setTimeout(() => {
      const mockData = generateMockData();
      setRecords(mockData);
      setFilteredRecords(mockData);
      setIsLoading(false);
    }, 1000);
  }, []);
  
  // Apply filters when any filter criteria changes
  useEffect(() => {
    if (records.length > 0) {
      applyFilters();
    }
  }, [searchTerm, ageRange, gender, guestType, stayDuration, checkInDate, idType]);
  
  // Function to apply all filters
  const applyFilters = () => {
    let filtered = [...records];
    
    // Apply search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(record => 
        record.guestName.toLowerCase().includes(search) ||
        record.idNumber.toLowerCase().includes(search) ||
        record.hotelName.toLowerCase().includes(search) ||
        record.address.toLowerCase().includes(search)
      );
    }
    
    // Apply age range filter
    if (ageRange !== 'all') {
      const [minAge, maxAge] = ageRange.split('-').map(Number);
      filtered = filtered.filter(record => {
        if (maxAge) {
          return record.age >= minAge && record.age <= maxAge;
        } else {
          return record.age >= minAge;
        }
      });
    }
    
    // Apply gender filter
    if (gender !== 'all') {
      filtered = filtered.filter(record => record.gender === gender);
    }
    
    // Apply guest type filter
    if (guestType !== 'all') {
      filtered = filtered.filter(record => record.guestType === guestType);
    }
    
    // Apply stay duration filter
    if (stayDuration !== 'all') {
      if (stayDuration === '1-3') {
        filtered = filtered.filter(record => record.stayDays >= 1 && record.stayDays <= 3);
      } else if (stayDuration === '4-7') {
        filtered = filtered.filter(record => record.stayDays >= 4 && record.stayDays <= 7);
      } else if (stayDuration === '8-14') {
        filtered = filtered.filter(record => record.stayDays >= 8 && record.stayDays <= 14);
      } else if (stayDuration === '15+') {
        filtered = filtered.filter(record => record.stayDays >= 15);
      }
    }
    
    // Apply check-in date filter
    if (checkInDate) {
      const selectedDate = new Date(checkInDate);
      const selectedDateStr = selectedDate.toISOString().split('T')[0];
      
      filtered = filtered.filter(record => {
        const recordDate = new Date(record.checkIn);
        const recordDateStr = recordDate.toISOString().split('T')[0];
        return recordDateStr === selectedDateStr;
      });
    }
    
    // Apply ID type filter
    if (idType !== 'all') {
      filtered = filtered.filter(record => record.idType === idType);
    }
    
    setFilteredRecords(filtered);
  };
  
  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setAgeRange('all');
    setGender('all');
    setGuestType('all');
    setStayDuration('all');
    setCheckInDate('');
    setIdType('all');
    setFilteredRecords(records);
  };
  
  // View record details
  const viewRecordDetails = (record) => {
    setSelectedRecord(record);
    setShowModal(true);
  };
  
  // Generate mock data for demo
  const generateMockData = () => {
    const guestTypes = ['Solo', 'Family', 'Group',];
    const idTypes = ['Aadhar card', 'Passport', 'Driving License', 'Voter ID', 'PAN Card'];
    const genders = ['Male', 'Female'];
    const hotelNames = ['Grand Hotel', 'Sunrise Inn', 'City Center Hotel', 'Royal Palace', 'Seaside Resort'];
    
    return Array.from({ length: 50 }, (_, i) => {
      // Random check-in date between 1-30 days ago
      const checkInDaysAgo = Math.floor(Math.random() * 30) + 1;
      const checkIn = new Date();
      checkIn.setDate(checkIn.getDate() - checkInDaysAgo);
      
      // Random stay duration
      const stayDays = Math.floor(Math.random() * 14) + 1;
      
      // Random check-out date based on check-in and stay duration
      const checkOut = new Date(checkIn);
      checkOut.setDate(checkOut.getDate() + stayDays);
      
      const alertStatus = Math.random() < 0.05 ? 'Flagged' : 'Normal';
      
      return {
        id: i + 1,
        guestName: [
          'Rajesh Kumar', 'Priya Sharma', 'Mohammed Ismail', 'Sunita Patel', 'David Wilson',
          'Sanjay Gupta', 'Neha Singh', 'Rahul Verma', 'Ananya Reddy', 'John Smith',
          'Vijay Malhotra', 'Aishwarya Rao', 'Ahmed Khan', 'Deepika Nair', 'Robert Brown',
          'Vikram Shah', 'Meera Joshi', 'Arjun Yadav', 'Sneha Kapoor', 'Michael Johnson'
        ][Math.floor(Math.random() * 20)],
        age: Math.floor(Math.random() * 60) + 18,
        gender: genders[Math.floor(Math.random() * genders.length)],
        hotelName: hotelNames[Math.floor(Math.random() * hotelNames.length)],
        roomNumber: `${Math.floor(Math.random() * 5) + 1}${Math.floor(Math.random() * 30) + 1}`,
        checkIn: checkIn.toISOString(),
        checkOut: checkOut.toISOString(),
        stayDays,
        idType: idTypes[Math.floor(Math.random() * idTypes.length)],
        idNumber: `ID${Math.floor(Math.random() * 100000000)}`,
        guestType: guestTypes[Math.floor(Math.random() * guestTypes.length)],
        address: `${Math.floor(Math.random() * 100) + 1}, ${['Park Street', 'MG Road', 'Civil Lines', 'Connaught Place', 'Anna Nagar'][Math.floor(Math.random() * 5)]}, ${['Mumbai', 'Delhi', 'Chennai', 'Bangalore', 'Hyderabad', 'Kolkata'][Math.floor(Math.random() * 6)]}`,
        phoneNumber: `${['9', '8', '7'][Math.floor(Math.random() * 3)]}${Math.floor(Math.random() * 1000000000).toString().padStart(9, '0')}`,
        status: alertStatus,
        submissionTime: new Date(checkIn.getTime() + Math.floor(Math.random() * 3600000)).toISOString()
      };
    });
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
  
  // Get status badge class
  const getStatusBadgeClass = (status) => {
    return status === 'Flagged' 
      ? 'bg-red-100 text-red-800' 
      : 'bg-green-100 text-green-800';
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 rounded-lg shadow-xl overflow-hidden">
          <div className="relative px-6 py-10 sm:px-10 sm:py-12">
            <div className="absolute inset-0 opacity-10">
              <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="relative">
              <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
                Search Guest Records
              </h1>
              <p className="mt-2 text-lg text-blue-100 max-w-3xl">
                Find and filter guest registration records across all hotels.
              </p>
            </div>
          </div>
        </div>
        
        {/* Search and Filter Panel */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="px-4 py-5 sm:p-6">
            {/* Search Box */}
            <div className="mb-6">
              <label htmlFor="search" className="block text-lg font-medium text-gray-700">Search</label>
              <div className="mt-2 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3"
                  placeholder="Search by name, ID, hotel name, or address"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            {/* Filter Rows */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Age Range Filter */}
              <div>
                <label htmlFor="ageRange" className="block text-sm font-medium text-gray-700">Age Range</label>
                <select
                  id="ageRange"
                  name="ageRange"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={ageRange}
                  onChange={(e) => setAgeRange(e.target.value)}
                >
                  <option value="all">All Ages</option>
                  <option value="18-25">18-25</option>
                  <option value="26-35">26-35</option>
                  <option value="36-45">36-45</option>
                  <option value="46-60">46-60</option>
                  <option value="61-">61+</option>
                </select>
              </div>
              
              {/* Gender Filter */}
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="all">All Genders</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              
              {/* Guest Type Filter */}
              <div>
                <label htmlFor="guestType" className="block text-sm font-medium text-gray-700">Guest Type</label>
                <select
                  id="guestType"
                  name="guestType"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={guestType}
                  onChange={(e) => setGuestType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="Solo">Solo</option>
                 
                  <option value="Family">Family</option>
                  <option value="Group">Group</option>
                 
                </select>
              </div>
              
              {/* Stay Duration Filter */}
              <div>
                <label htmlFor="stayDuration" className="block text-sm font-medium text-gray-700">Stay Duration</label>
                <select
                  id="stayDuration"
                  name="stayDuration"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={stayDuration}
                  onChange={(e) => setStayDuration(e.target.value)}
                >
                  <option value="all">Any Duration</option>
                  <option value="1-3">1-3 days</option>
                  <option value="4-7">4-7 days</option>
                  <option value="8-14">8-14 days</option>
                  <option value="15+">15+ days</option>
                </select>
              </div>
              
              {/* Check-in Date Filter */}
              <div>
                <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">Check-in Date</label>
                <input
                  type="date"
                  id="checkInDate"
                  name="checkInDate"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
              </div>
              
              {/* ID Type Filter */}
              <div>
                <label htmlFor="idType" className="block text-sm font-medium text-gray-700">ID Type</label>
                <select
                  id="idType"
                  name="idType"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={idType}
                  onChange={(e) => setIdType(e.target.value)}
                >
                  <option value="all">All ID Types</option>
                  <option value="Aadhar card">Aadhar Card</option>
                  <option value="Passport">Passport</option>
                  <option value="Driving License">Driving License</option>
                  <option value="Voter ID">Voter ID</option>
                  <option value="PAN Card">PAN Card</option>
                </select>
              </div>
            </div>
            
            {/* Filter Actions */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
        
        {/* Results Section */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Search Results</h2>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {filteredRecords.length} Records
            </span>
          </div>
          
          {isLoading ? (
            <div className="p-10 text-center">
              <svg className="animate-spin h-10 w-10 mx-auto text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="mt-4 text-gray-500">Loading records...</p>
            </div>
          ) : filteredRecords.length === 0 ? (
            <div className="p-10 text-center">
              <svg className="h-16 w-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="mt-4 text-gray-500">No records found matching your filters.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Guest Details
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hotel & Room
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stay Information
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID Information
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredRecords.map((record) => (
                    <tr key={record.id} className={record.status === 'Flagged' ? 'bg-red-50 hover:bg-red-100' : 'hover:bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{record.guestName}</div>
                        <div className="text-sm text-gray-500">Age: {record.age} • {record.gender}</div>
                        <div className="text-sm text-gray-500">{record.guestType}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{record.hotelName}</div>
                        <div className="text-sm text-gray-500">Room {record.roomNumber}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Check In: {formatDate(record.checkIn)}</div>
                        <div className="text-sm text-gray-500">Check Out: {formatDate(record.checkOut)}</div>
                        <div className="text-sm text-gray-500">Duration: {record.stayDays} days</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{record.idType}</div>
                        <div className="text-sm font-mono text-gray-500">{record.idNumber}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(record.status)}`}>
                          {record.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => viewRecordDetails(record)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          View Details
                        </button>
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
      {showModal && selectedRecord && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-t-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">
                  Guest Record Details
                </h3>
                {selectedRecord.status === 'Flagged' && (
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Flagged
                  </span>
                )}
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div>
                  <h4 className="font-medium text-gray-900 text-lg mb-4">Guest Information</h4>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Name:</span>
                      <p className="text-sm text-gray-900">{selectedRecord.guestName}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Age & Gender:</span>
                      <p className="text-sm text-gray-900">{selectedRecord.age} • {selectedRecord.gender}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Guest Type:</span>
                      <p className="text-sm text-gray-900">{selectedRecord.guestType}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Phone:</span>
                      <p className="text-sm text-gray-900">{selectedRecord.phoneNumber}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Address:</span>
                      <p className="text-sm text-gray-900">{selectedRecord.address}</p>
                    </div>
                  </div>
                  
                  <h4 className="font-medium text-gray-900 text-lg mt-6 mb-4">ID Information</h4>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-500">ID Type:</span>
                      <p className="text-sm text-gray-900">{selectedRecord.idType}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">ID Number:</span>
                      <p className="text-sm font-mono text-gray-900">{selectedRecord.idNumber}</p>
                    </div>
                    <div className="pt-3">
                      <span className="text-sm font-medium text-gray-500">ID Document:</span>
                      <div className="mt-2 bg-gray-100 rounded-lg p-4 flex items-center justify-center h-32">
                        <div className="text-center">
                          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
                          </svg>
                          <p className="mt-2 text-sm text-gray-500">ID Document preview</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
            <div>
                      <span className="text-sm font-medium text-gray-500">Check-in Date:</span>
                      <p className="text-sm text-gray-900">{formatDate(selectedRecord.checkIn)}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Check-out Date:</span>
                      <p className="text-sm text-gray-900">{formatDate(selectedRecord.checkOut)}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Stay Duration:</span>
                      <p className="text-sm text-gray-900">{selectedRecord.stayDays} days</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Submission Time:</span>
                      <p className="text-sm text-gray-900">{formatDate(selectedRecord.submissionTime)}</p>
                    </div>
                  </div>
                  
                  <h4 className="font-medium text-gray-900 text-lg mt-6 mb-4">Action Center</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Verification Status</h5>
                      <div className="flex space-x-2">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(selectedRecord.status)}`}>
                          {selectedRecord.status}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="remarks" className="block text-sm font-medium text-gray-700">Add Remarks/Notes</label>
                      <textarea
                        id="remarks"
                        name="remarks"
                        rows={3}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter your notes about this guest record..."
                      ></textarea>
                    </div>
                    
                    <div className="flex space-x-3">
                      {selectedRecord.status !== 'Flagged' ? (
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          Flag Record
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Clear Flag
                        </button>
                      )}
                      
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                        </svg>
                        Download Record
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="mt-8 flex justify-end space-x-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Close
                </button>
              </div>
            </div>

    
      )}
    </div>
  );
};

export default SearchRecords;