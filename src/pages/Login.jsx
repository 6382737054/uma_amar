import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Hotel, Lock } from 'lucide-react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const { email, password, rememberMe } = formData;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    const credentials = {
      hotel: { email: 'hotel1@gmail.com', password: 'hotel123', type: 'hotel' },
      police: { email: 'police@gmail.com', password: 'admin123', type: 'police' }
    };

    if (email === credentials.hotel.email && password === credentials.hotel.password) {
      localStorage.setItem('userType', credentials.hotel.type);
      navigate('/hotel-dashboard');
    } else if (email === credentials.police.email && password === credentials.police.password) {
      localStorage.setItem('userType', credentials.police.type);
      navigate('/police-dashboard');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `
          radial-gradient(circle at 10% 20%, rgb(239, 246, 255) 0%, rgb(219, 234, 254) 90%),
          radial-gradient(circle at 90% 80%, rgb(237, 233, 254) 0%, rgb(252, 231, 243) 90%)
        `,
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        {/* Grid Pattern */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        ></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-purple-100 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-pink-100 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-indigo-100 rounded-full opacity-20 blur-2xl"></div>
      </div>

      <div className="w-full max-w-5xl h-[600px] bg-white rounded-2xl shadow-xl flex overflow-hidden relative z-10">
        {/* Left side - Image and Info */}
        <div className="w-1/2 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-600 to-blue-700 text-white relative">
          <div className="absolute top-0 left-0 w-full p-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Shield className="w-6 h-6" /> 
              Registry Portal
            </h2>
          </div>
          
          <div className="w-4/5 h-auto mb-8">
            <img 
              src="/Images/login.png"
              alt="Login Illustration" 
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Unified Hotel-Police Coordination System</h3>
            <p className="text-sm text-gray-100 max-w-sm mx-auto">
              Streamline guest registration and enhance security through real-time coordination between hotels and law enforcement.
            </p>
            <div className="flex justify-center gap-12 mt-6">
              <div className="flex flex-col items-center">
                <Hotel className="w-8 h-8 mb-2" />
                <p className="text-sm">Hotels</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 mb-2" />
                <p className="text-sm">Police</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-1/2 flex items-center justify-center px-12">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
              <p className="mt-3 text-gray-600">Please sign in to continue</p>
            </div>

            <form onSubmit={handleLogin} className="mt-8 space-y-6">
              {errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                  <span className="block text-sm">{errorMessage}</span>
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="Enter your email"
                      value={email}
                      onChange={handleChange}
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="Enter your password"
                      value={password}
                      onChange={handleChange}
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Lock className="w-5 h-5" />
                    </span>
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    checked={rememberMe}
                    onChange={handleChange}
                  />
                  <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm font-medium text-purple-600 hover:text-purple-500 transition-colors">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;