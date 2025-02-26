// Add this at the top of your RegisterGuest.js file
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Hotel, Users, Lock, Calendar, MapPin, CreditCard, User } from 'lucide-react';

const RegisterGuest = () => {
const navigate = useNavigate();

  // Main form data state
  const [formData, setFormData] = useState({
    category: 'family', // family or bachelor
    bachelorCount: 1,
    roomType: 'Deluxe King',
    roomNumber: '',
    checkInDate: new Date().toISOString().substr(0, 10),
    checkOutDate: '',
    purpose: 'Business'
  });

  // State for primary guest and additional bachelor guests
  const [primaryGuest, setPrimaryGuest] = useState({
    title: 'Mr.',
    name: '',
    gender: 'Male',
    dob: '', // Add this line
    mobile: '',
    address: '',
    city: '',
    state: '',
    nationality: '',
    roomNumber: '',
    idType: 'Aadhar card',
    idNumber: '',
    idCardFile: null,
    idCardPreview: ''
  });

  // State for additional bachelor guests
  const [additionalGuests, setAdditionalGuests] = useState([]);

  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Options for different select fields
  const titleOptions = ['Mr.', 'Mrs.', 'Ms.', 'Dr.'];
  const roomTypeOptions = ['Deluxe King', 'Deluxe Twin', 'Executive Suite', 'Standard Room'];
  const idTypeOptions = ['Aadhar card', 'Passport', 'Driving License', 'Voter ID', 'PAN Card'];
  const purposeOptions = ['Business', 'Leisure', 'Conference', 'Family Visit', 'Other'];

  // Handle primary guest form field changes
  const handlePrimaryGuestChange = (e) => {
    const { name, value } = e.target;
    setPrimaryGuest({
      ...primaryGuest,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Handle main form field changes
  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'category') {
      setAdditionalGuests([]);
    }

    if (name === 'bachelorCount') {
      const count = parseInt(value);
      setAdditionalGuests(prevGuests => {
        const newGuests = [...prevGuests];
        if (count > prevGuests.length) {
          // Add more guest slots
          for (let i = prevGuests.length; i < count - 1; i++) {
            newGuests.push({
              name: '',
              mobile: '',
              dob: '', // Add this line
              idType: 'Aadhar card',
              idNumber: '',
              idCardFile: null,
              idCardPreview: ''
            });
          }
        } else if (count < prevGuests.length) {
          // Remove excess guest slots
          newGuests.splice(count - 1);
        }
        return newGuests;
      });
    }

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Handle ID card upload for primary guest
  const handlePrimaryGuestFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPrimaryGuest({
          ...primaryGuest,
          idCardFile: file,
          idCardPreview: reader.result
        });
      };
      reader.readAsDataURL(file);

      if (errors.primaryGuestIdCard) {
        setErrors({
          ...errors,
          primaryGuestIdCard: ''
        });
      }
    }
  };

  // Handle additional guest changes
  const handleAdditionalGuestChange = (index, field, value) => {
    setAdditionalGuests(prevGuests => {
      const newGuests = [...prevGuests];
      newGuests[index] = {
        ...newGuests[index],
        [field]: value
      };
      return newGuests;
    });

    if (errors[`additionalGuest${index}${field}`]) {
      setErrors({
        ...errors,
        [`additionalGuest${index}${field}`]: ''
      });
    }
  };

  // Handle ID card upload for additional guests
  const handleAdditionalGuestFileUpload = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAdditionalGuests(prevGuests => {
          const newGuests = [...prevGuests];
          newGuests[index] = {
            ...newGuests[index],
            idCardFile: file,
            idCardPreview: reader.result
          };
          return newGuests;
        });
      };
      reader.readAsDataURL(file);

      if (errors[`additionalGuest${index}IdCard`]) {
        setErrors({
          ...errors,
          [`additionalGuest${index}IdCard`]: ''
        });
      }
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    // Validate primary guest
    if (!primaryGuest.name.trim()) newErrors.name = 'Name is required';
    if (!primaryGuest.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    if (!primaryGuest.idNumber.trim()) newErrors.idNumber = 'ID number is required';
    if (!primaryGuest.idCardFile) newErrors.primaryGuestIdCard = 'ID card upload is required';
    if (primaryGuest.mobile && !/^\d{10}$/.test(primaryGuest.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }

    // Validate room details
    if (!formData.roomNumber.trim()) newErrors.roomNumber = 'Room number is required';
    if (!formData.checkOutDate) newErrors.checkOutDate = 'Check-out date is required';
// Inside validateForm function, add these validations:
if (!primaryGuest.roomNumber.trim()) newErrors.roomNumber = 'Room number is required';
if (!primaryGuest.city.trim()) newErrors.city = 'City is required';
if (!primaryGuest.state.trim()) newErrors.state = 'State is required';
if (!primaryGuest.nationality.trim()) newErrors.nationality = 'Nationality is required';
    // Validate dates
    if (formData.checkInDate && formData.checkOutDate) {
      const checkIn = new Date(formData.checkInDate);
      const checkOut = new Date(formData.checkOutDate);
      if (checkOut <= checkIn) {
        newErrors.checkOutDate = 'Check-out date must be after check-in date';
      }
    }

    // Validate additional guests for bachelors
    if (formData.category === 'bachelor' && formData.bachelorCount > 1) {
      additionalGuests.forEach((guest, index) => {
        if (!guest.name.trim()) {
          newErrors[`additionalGuest${index}name`] = `Guest ${index + 2} name is required`;
        }
        if (!guest.mobile.trim()) {
          newErrors[`additionalGuest${index}mobile`] = `Guest ${index + 2} mobile is required`;
        }
        if (!guest.idNumber.trim()) {
          newErrors[`additionalGuest${index}idNumber`] = `Guest ${index + 2} ID number is required`;
        }
        if (!guest.idCardFile) {
          newErrors[`additionalGuest${index}IdCard`] = `Guest ${index + 2} ID card is required`;
        }
        if (guest.mobile && !/^\d{10}$/.test(guest.mobile)) {
          newErrors[`additionalGuest${index}mobile`] = `Guest ${index + 2} mobile must be 10 digits`;
        }
      });
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
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setSubmitSuccess(true);
        
        // Redirect to dashboard after success
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

  // Render ID card upload section
  const renderIdCardUpload = (preview, onUpload, error) => (
    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
      <div className="space-y-1 text-center">
        {preview ? (
          <div>
            <img 
              src={preview} 
              alt="ID Preview" 
              className="mx-auto h-40 object-contain"
            />
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
            <p className="text-xs text-gray-500">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-500">PNG, JPG, PDF up to 5MB</p>
          </div>
        )}
        <div className="flex text-sm text-gray-600 justify-center">
          <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
            <span>{preview ? 'Change file' : 'Upload a file'}</span>
            <input
              type="file"
              className="sr-only"
              accept="image/*,.pdf"
              onChange={onUpload}
            />
          </label>
        </div>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>
    </div>
  );


  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="border-b border-gray-200">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Register New Guest</h1>
                  <p className="mt-1 text-gray-500">Add a new guest to the system for police verification</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">* Required fields</span>
            </div>
          </div>
        </div>
  
        {/* Form Content */}
        <div className="px-8 py-6">
          {submitSuccess ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-800">Guest registration successful! Redirecting to dashboard...</p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Booking Details */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <Hotel className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-medium text-gray-900">Booking Details</h3>
                  </div>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleFormDataChange}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      <option value="family">Family</option>
                      <option value="group">Group</option>
                      <option value="solo">Solo</option>
                    </select>
                  </div>
                  {formData.category === 'group' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Number of People *</label>
                      <select
                        name="bachelorCount"
                        value={formData.bachelorCount}
                        onChange={handleFormDataChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      >
                        {[1, 2, 3, 4].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              </div>
  
              {/* Primary Guest Information */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                      <select
                        name="title"
                        value={primaryGuest.title}
                        onChange={handlePrimaryGuestChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      >
                        {titleOptions.map(title => (
                          <option key={title} value={title}>{title}</option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={primaryGuest.name}
                        onChange={handlePrimaryGuestChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
                      <select
                        name="gender"
                        value={primaryGuest.gender}
                        onChange={handlePrimaryGuestChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                      <input
                        type="date"
                        name="dob"
                        value={primaryGuest.dob}
                        onChange={handlePrimaryGuestChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        name="mobile"
                        value={primaryGuest.mobile}
                        onChange={handlePrimaryGuestChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">ID Type *</label>
                      <select
                        name="idType"
                        value={primaryGuest.idType}
                        onChange={handlePrimaryGuestChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      >
                        {idTypeOptions.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">ID Number *</label>
                      <input
                        type="text"
                        name="idNumber"
                        value={primaryGuest.idNumber}
                        onChange={handlePrimaryGuestChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                    <textarea
                      name="address"
                      rows={3}
                      value={primaryGuest.address}
                      onChange={handlePrimaryGuestChange}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={primaryGuest.city}
                        onChange={handlePrimaryGuestChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                      <input
                        type="text"
                        name="state"
                        value={primaryGuest.state}
                        onChange={handlePrimaryGuestChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nationality *</label>
                      <input
                        type="text"
                        name="nationality"
                        value={primaryGuest.nationality}
                        onChange={handlePrimaryGuestChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Stay Information */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-medium text-gray-900">Stay Information</h3>
                  </div>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Room Number *</label>
                    <input
                      type="text"
                      name="roomNumber"
                      value={formData.roomNumber}
                      onChange={handleFormDataChange}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Purpose of Visit</label>
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleFormDataChange}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      {purposeOptions.map(purpose => (
                        <option key={purpose} value={purpose}>{purpose}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date *</label>
                    <input
                      type="date"
                      name="checkInDate"
                      value={formData.checkInDate}
                      onChange={handleFormDataChange}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date *</label>
                    <input
                      type="date"
                      name="checkOutDate"
                      value={formData.checkOutDate}
                      onChange={handleFormDataChange}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>
  
              {/* Form Actions */}
              <div className="flex justify-end space-x-4 pt-6">
                <button
                  type="button"
                  onClick={() => navigate('/hotel-dashboard')}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isSubmitting ? 'Registering...' : 'Register Guest'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
export default RegisterGuest;