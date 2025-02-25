import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Hardcoded credentials
    const credentials = {
      hotel: { email: 'hotel1@gmail.com', password: 'hotel123', type: 'hotel' },
      police: { email: 'police@gmail.com', password: 'admin123', type: 'police' }
    };

    // Check credentials
    if (email === credentials.hotel.email && password === credentials.hotel.password) {
      // Store user type in localStorage
      localStorage.setItem('userType', credentials.hotel.type);
      navigate('/hotel-dashboard');
    } else if (email === credentials.police.email && password === credentials.police.password) {
      // Store user type in localStorage
      localStorage.setItem('userType', credentials.police.type);
      navigate('/police-dashboard');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <svg 
          className="absolute bottom-0 left-0 text-white opacity-20"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
        >
          <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center p-10">
          <div className="max-w-xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Guest Registration Portal</h2>
            <p className="text-xl text-white opacity-90">
              Streamline hotel guest registration and enhance security through real-time coordination with law enforcement.
            </p>
            <div className="mt-10">
              {/* Hotel Building SVG */}
              <svg className="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="white" opacity="0.9">
                <path d="M480 0c-17.7 0-32 14.3-32 32V160c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H480zM32 64c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v336c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v336c0 8.8 7.2 16 16 16h38.4c-1.5 5.4-2.4 11-2.4 16.9V464c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48v-31.1c0-5.9-.9-11.5-2.4-16.9H608c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32H512c-17.7 0-32 14.3-32 32v96H416V64c0-17.7-14.3-32-32-32H320c-17.7 0-32 14.3-32 32v96H224V64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32v96H32V64zm352 368c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H400c-8.8 0-16-7.2-16-16V432z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to access your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {errorMessage && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">{errorMessage}</span>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              >
                Sign in
              </button>
            </div>

      
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;