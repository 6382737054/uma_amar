import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './pages/homepage';
import TestimonialsPage from './pages/testimonials';
import ServicesPage from './pages/services';
import MediaPage from './pages/media';
import BlogPage from './pages/blogs';
import ContactPage from './pages/contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-16"> {/* Add padding-top to account for fixed navbar */}
          <Routes>
            {/* Redirect root to /home */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            
            {/* Main routes */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/testimonial" element={<TestimonialsPage/>} />
            <Route path="/services" element={<ServicesPage/>}/>
            <Route path="/media" element={<MediaPage/>}/>
            <Route path="/blog" element={<BlogPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/login" element={<div>Login Page</div>} />

            {/* Catch all route for 404 */}
            <Route path="*" element={
              <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                  <p className="text-gray-600 mb-4">Page not found</p>
                  <button
                    onClick={() => window.location.href = '/home'}
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                  >
                    Go Home
                  </button>
                </div>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;