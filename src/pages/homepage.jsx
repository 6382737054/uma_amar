import React from 'react';
import { ArrowRight, Award, BookOpen, Microscope, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image Column */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gray-200 rounded-2xl transform -rotate-6"></div>
                <div className="absolute inset-0 bg-gray-100 rounded-2xl transform rotate-3"></div>
                <img
                  src="/Images/home.png"
                  alt="Dr. Uma Amar"
                  className="relative w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Dr. Uma Amar
                  </h1>
                  <p className="text-lg lg:text-xl font-medium text-gray-600 mt-3">
                    Neuroscience Researcher & Healthcare Innovator
                  </p>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dedicated to advancing neurological research and patient care through innovative 
                  approaches and evidence-based treatments. Leading groundbreaking studies in 
                  cognitive science and neurological disorders.
                </p>
                
                <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                  <Link to="/media">
                    <button className="inline-flex items-center px-8 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md">
                      View Research
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="inline-flex items-center px-8 py-3 rounded-lg border-2 border-gray-900 text-gray-900 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md">
                      Get in Touch
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Excellence Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Research Excellence</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-900 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Research Area 1 */}
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors duration-300">
                <Brain className="h-7 w-7 text-gray-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Neurological Research</h3>
              <p className="text-gray-600 leading-relaxed">
                Pioneering research in neuroscience, focusing on understanding neural networks 
                and developing innovative treatment approaches for neurological disorders.
              </p>
            </div>

            {/* Research Area 2 */}
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors duration-300">
                <Microscope className="h-7 w-7 text-gray-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Clinical Studies</h3>
              <p className="text-gray-600 leading-relaxed">
                Leading comprehensive clinical trials and research studies, advancing our 
                understanding of treatment methodologies and patient care approaches.
              </p>
            </div>

            {/* Research Area 3 */}
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors duration-300">
                <BookOpen className="h-7 w-7 text-gray-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Medical Education</h3>
              <p className="text-gray-600 leading-relaxed">
                Contributing to medical knowledge through research publications, educational 
                initiatives, and international collaborations in healthcare innovation.
              </p>
            </div>
          </div>

          {/* Research Focus */}
          <div className="mt-20 bg-white rounded-xl p-10 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Focus</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                With extensive experience in neurological research, our work focuses on 
                understanding brain function and developing innovative treatment approaches. 
                Our research combines cutting-edge technology with evidence-based methodologies 
                to advance medical knowledge and improve patient outcomes.
              </p>
              <p>
                Through international collaborations and continuous research initiatives, 
                we're committed to expanding the boundaries of medical science and developing 
                new approaches to treating neurological conditions. Our dedication to research 
                excellence drives breakthrough discoveries in patient care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;