import React, { useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'; 
import LoginPage from './pages/Login'; 
import HotelDashboard from './pages/HotelDashboard'; 
import PoliceDashboard from './pages/PoliceDashboard'; 
import RegisterGuest from './pages/GuestRegister'; 
import ViewSubmissions from './pages/submission';
import Reports from './pages/reports';
import Navbar from './components/navbar';  

// Layout with Navbar for authenticated users 
const AuthenticatedLayout = ({ children }) => {   
  return (     
    <>       
      <Navbar />       
      <main>{children}</main>     
    </>   
  ); 
};  

// Protected route component to handle authentication 
const ProtectedRoute = ({ children, allowedUserType }) => {   
  const navigate = useNavigate();   
  const location = useLocation();   
  const userType = localStorage.getItem('userType');      
  
  useEffect(() => {     
    // If not logged in, redirect to login     
    if (!userType) {       
      navigate('/login', { replace: true });       
      return;     
    }          
    
    // If logged in but wrong user type, redirect to appropriate dashboard     
    if (allowedUserType && userType !== allowedUserType) {       
      navigate(userType === 'hotel' ? '/hotel-dashboard' : '/police-dashboard', { replace: true });     
    }   
  }, [userType, navigate, allowedUserType, location]);      
  
  // If there's no user logged in, don't render anything while redirecting   
  if (!userType) return null;      
  
  // If user type doesn't match allowed type, don't render while redirecting   
  if (allowedUserType && userType !== allowedUserType) return null;      
  
  // If everything is fine, render the children with Navbar   
  return <AuthenticatedLayout>{children}</AuthenticatedLayout>; 
};  

function App() {   
  return (     
    <Router>       
      <Routes>         
        {/* Login route */}         
        <Route path="/login" element={<LoginPage />} />                  
        
        {/* Protected Hotel routes */}         
        <Route            
          path="/hotel-dashboard"            
          element={             
            <ProtectedRoute allowedUserType="hotel">               
              <HotelDashboard />             
            </ProtectedRoute>           
          }          
        />                  
        
        <Route            
          path="/register-guest"            
          element={             
            <ProtectedRoute allowedUserType="hotel">               
              <RegisterGuest />             
            </ProtectedRoute>           
          }          
        />
        
        <Route            
          path="/view-submissions"            
          element={             
            <ProtectedRoute allowedUserType="hotel">               
              <ViewSubmissions />             
            </ProtectedRoute>           
          }          
        />
        
        <Route            
          path="/reports"            
          element={             
            <ProtectedRoute allowedUserType="hotel">               
              <Reports />             
            </ProtectedRoute>           
          }          
        />
        
        {/* Protected Police routes */}
        <Route            
          path="/police-dashboard"            
          element={             
            <ProtectedRoute allowedUserType="police">               
              <PoliceDashboard />             
            </ProtectedRoute>           
          }          
        />                  
        
        {/* Redirect root to login */}         
        <Route path="/" element={<Navigate to="/login" replace />} />                  
        
        {/* Catch-all redirect to login */}         
        <Route path="*" element={<Navigate to="/login" replace />} />       
      </Routes>     
    </Router>   
  ); 
}  

export default App;