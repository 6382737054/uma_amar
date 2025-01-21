import React from 'react';
import { ArrowRight, Award, BookOpen, Briefcase } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image Column - Restored to original design */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gray-200 rounded-2xl transform -rotate-6"></div>
                <div className="absolute inset-0 bg-gray-100 rounded-2xl transform rotate-3"></div>
                <img
                  src="/Images/home.png"
                  alt="Professional headshot"
                  className="relative w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Uma Amar
                  </h1>
                  <p className="text-lg lg:text-xl font-medium text-gray-600 mt-3">
                    Senior Software Engineer & Tech Lead
                  </p>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dedicated software engineer with expertise in building scalable web applications 
                  and leading high-performance development teams. Specializing in modern web 
                  technologies and cloud architecture with a focus on creating innovative solutions.
                </p>
                
                <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                  <button className="inline-flex items-center px-8 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="inline-flex items-center px-8 py-3 rounded-lg border-2 border-gray-900 text-gray-900 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md">
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Professional Excellence</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-900 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Achievement Card 1 */}
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors duration-300">
                <Award className="h-7 w-7 text-gray-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Recognized for developing innovative solutions that have significantly 
                improved system performance and user experience across multiple projects.
              </p>
            </div>

            {/* Achievement Card 2 */}
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors duration-300">
                <Briefcase className="h-7 w-7 text-gray-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Leadership Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Successfully led and mentored development teams, implementing best practices 
                that resulted in improved project delivery and team productivity.
              </p>
            </div>

            {/* Achievement Card 3 */}
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors duration-300">
                <BookOpen className="h-7 w-7 text-gray-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Continuous Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Committed to ongoing professional development, regularly contributing to 
                open-source projects and staying current with emerging technologies.
              </p>
            </div>
          </div>

          {/* Professional Journey */}
          <div className="mt-20 bg-white rounded-xl p-10 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Journey</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                With over 8 years of experience in software development, I've cultivated a 
                deep expertise in building robust, scalable applications. My approach combines 
                technical excellence with strategic thinking, ensuring solutions that not only 
                meet immediate needs but also support long-term business objectives.
              </p>
              <p>
                In my current role as Tech Lead, I've successfully guided teams through complex 
                project implementations, fostered a culture of innovation, and maintained high 
                standards of code quality. My commitment to mentoring has helped develop strong, 
                capable teams that consistently deliver outstanding results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;