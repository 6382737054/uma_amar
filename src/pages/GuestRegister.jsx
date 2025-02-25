import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterGuest = () => {
  const navigate = useNavigate();
  
  // Define state for form data
  const [formData, setFormData] = useState({
    title: 'Mr.',
    name: '',
    gender: 'Male',
    address: '',
    mobile: '',
    idType: 'Aadhar card',
    idNumber: '',
    roomType: 'Deluxe King',
    roomNumber: '',
    checkInDate: new Date().toISOString().substr(0, 10),
    checkOutDate: '',
    purpose: 'Business',
    pax: '1/0' // 1 adult, 0 children default
  });
  
  // State for ID card upload
  const [idCardFile, setIdCardFile] = useState(null);
  const [idCardPreview, setIdCardPreview] = useState('');
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  // Handle ID card upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIdCardFile(file);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setIdCardPreview(reader.result);
      };
      reader.readAsDataURL(file);
      
      // Clear error for this field if it exists
      if (errors.idCard) {
        setErrors({
          ...errors,
          idCard: ''
        });
      }
    }
  };
  
  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    // Required fields
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    if (!formData.idNumber.trim()) newErrors.idNumber = 'ID number is required';
    if (!formData.roomNumber.trim()) newErrors.roomNumber = 'Room number is required';
    if (!formData.checkOutDate) newErrors.checkOutDate = 'Check-out date is required';
    if (!idCardFile) newErrors.idCard = 'ID card upload is required';
    
    // Mobile validation (10 digits)
    if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }
    
    // Check-out date must be after check-in
    if (formData.checkInDate && formData.checkOutDate) {
      const checkIn = new Date(formData.checkInDate);
      const checkOut = new Date(formData.checkOutDate);
      if (checkOut <= checkIn) {
        newErrors.checkOutDate = 'Check-out date must be after check-in date';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // In a real app, you would submit both the form data and the ID card file
        // For this example, we'll just simulate a successful submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setSubmitSuccess(true);
        
        // Automatically redirect to dashboard after success
        setTimeout(() => {
          navigate('/hotel-dashboard');
        }, 2000);
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({
          ...errors,
          form: 'An error occurred while submitting the form. Please try again.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Title options
  const titleOptions = ['Mr.', 'Mrs.', 'Ms.', 'Dr.'];
  
  // Room type options
  const roomTypeOptions = [
    'Deluxe King', 
    'Deluxe Twin', 
    'Executive Suite', 
    'Standard Room'
  ];
  
  // ID type options
  const idTypeOptions = [
    'Aadhar card',
    'Passport',
    'Driving License',
    'Voter ID',
    'PAN Card'
  ];
  
  // Purpose options
  const purposeOptions = [
    'Business',
    'Leisure',
    'Conference',
    'Family Visit',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Register New Guest</h1>
          <p className="mt-1 text-sm text-gray-500">
            Add a new guest to the system for police verification.
          </p>
        </div>
        
        {submitSuccess ? (
          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-green-700">
                  Guest registration successful! Redirecting to dashboard...
                </p>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {errors.form && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{errors.form}</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Guest Information Section */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-blue-600 to-indigo-700">
                <h3 className="text-lg leading-6 font-medium text-white">Guest Information</h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  
                  {/* Title Selection */}
                  <div className="col-span-6 sm:col-span-1">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <select
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      {titleOptions.map(title => (
                        <option key={title} value={title}>{title}</option>
                      ))}
                    </select>
                  </div>

                  {/* Guest Name */}
                  <div className="col-span-6 sm:col-span-5">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.name ? 'border-red-300' : ''}`}
                      placeholder="Enter guest's full name"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  {/* Gender */}
                  <div className="col-span-6 sm:col-span-2">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  {/* Mobile */}
                  <div className="col-span-6 sm:col-span-2">
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.mobile ? 'border-red-300' : ''}`}
                      placeholder="10-digit mobile number"
                    />
                    {errors.mobile && <p className="mt-2 text-sm text-red-600">{errors.mobile}</p>}
                  </div>
                  
                  {/* Address */}
                  <div className="col-span-6 sm:col-span-6">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <textarea
                      id="address"
                      name="address"
                      rows={3}
                      value={formData.address}
                      onChange={handleChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter guest's full address"
                    />
                  </div>
                  
                  {/* ID Type */}
                  <div className="col-span-6 sm:col-span-2">
                    <label htmlFor="idType" className="block text-sm font-medium text-gray-700">ID Type</label>
                    <select
                      id="idType"
                      name="idType"
                      value={formData.idType}
                      onChange={handleChange}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      {idTypeOptions.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  {/* ID Number */}
                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">ID Number</label>
                    <input
                      type="text"
                      name="idNumber"
                      id="idNumber"
                      value={formData.idNumber}
                      onChange={handleChange}
                      className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.idNumber ? 'border-red-300' : ''}`}
                      placeholder="Enter ID number"
                    />
                    {errors.idNumber && <p className="mt-2 text-sm text-red-600">{errors.idNumber}</p>}
                  </div>

                  {/* ID Card Upload */}
                  <div className="col-span-6">
                    <label className="block text-sm font-medium text-gray-700">ID Card Upload</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        {idCardPreview ? (
                          <div>
                            <img 
                              src={idCardPreview} 
                              alt="ID Preview" 
                              className="mx-auto h-40 object-contain"
                            />
                            <p className="text-xs text-gray-500 mt-2">
                              {idCardFile?.name}
                            </p>
                          </div>
                        ) : (
                          <div>
                            <svg
                              className="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <p className="text-xs text-gray-500">
                              Click to upload or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, PDF up to 5MB
                            </p>
                          </div>
                        )}
                        <div className="flex text-sm text-gray-600 justify-center">
                          <label
                            htmlFor="id-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>{idCardPreview ? 'Change file' : 'Upload a file'}</span>
                            <input
                              id="id-upload"
                              name="id-upload"
                              type="file"
                              className="sr-only"
                              accept="image/*,.pdf"
                              onChange={handleFileUpload}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    {errors.idCard && <p className="mt-2 text-sm text-red-600">{errors.idCard}</p>}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stay Information Section */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-blue-600 to-indigo-700">
                <h3 className="text-lg leading-6 font-medium text-white">Stay Information</h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
               
                  {/* Check-in Date */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">Check-in Date</label>
                    <input
                      type="date"
                      name="checkInDate"
                      id="checkInDate"
                      value={formData.checkInDate}
                      onChange={handleChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  
                  {/* Check-out Date */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">Check-out Date</label>
                    <input
                      type="date"
                      name="checkOutDate"
                      id="checkOutDate"
                      value={formData.checkOutDate}
                      onChange={handleChange}
                      className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.checkOutDate ? 'border-red-300' : ''}`}
                    />
                    {errors.checkOutDate && <p className="mt-2 text-sm text-red-600">{errors.checkOutDate}</p>}
                  </div>
                  
                  {/* Purpose of Visit */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">Purpose of Visit</label>
                    <select
                      id="purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      {purposeOptions.map(purpose => (
                        <option key={purpose} value={purpose}>{purpose}</option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Pax (Adults/Children) */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="pax" className="block text-sm font-medium text-gray-700">Pax (Adults/Children)</label>
                    <select
                      id="pax"
                      name="pax"
                      value={formData.pax}
                      onChange={handleChange}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="1/0">1 Adult, 0 Children</option>
                      <option value="1/1">1 Adult, 1 Child</option>
                      <option value="1/2">1 Adult, 2 Children</option>
                      <option value="2/0">2 Adults, 0 Children</option>
                      <option value="2/1">2 Adults, 1 Child</option>
                      <option value="2/2">2 Adults, 2 Children</option>
                      <option value="3/0">3 Adults, 0 Children</option>
                      <option value="4/0">4 Adults, 0 Children</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Submit Buttons */}
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => navigate('/hotel-dashboard')}
                className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isSubmitting ? 'Registering...' : 'Register Guest'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterGuest;