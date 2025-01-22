import React from 'react';
import { ArrowRight, Award, BookOpen, Apple, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image Column */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-blue-200 rounded-2xl transform -rotate-6"></div>
                <div className="absolute inset-0 bg-blue-100 rounded-2xl transform rotate-3"></div>
                <img
                  src="/Images/home.png"
                  alt="P. Uma Maheswari"
                  className="relative w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                    P. Uma Maheswari
                  </h1>
                  <p className="text-lg lg:text-xl font-medium text-blue-100 mt-3">
                    Assistant Professor, Clinical Nutrition and Dietetics
                  </p>
                </div>
                
                <p className="text-lg text-blue-50 leading-relaxed">
                  Dedicated nutrition educator with over 12 years of academic experience at SDNB Vaishnav College for Women. 
                  Certified Diabetes Educator pursuing Ph.D. at Bharathiar University. Advocate for holistic nutrition 
                  integrating diet, lifestyle, and mental health.
                </p>
                
                <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                  <Link to="/achievements">
                    <button className="inline-flex items-center px-8 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md">
                      View Achievements
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="inline-flex items-center px-8 py-3 rounded-lg border-2 border-blue-100 text-blue-50 hover:bg-blue-800/50 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md">
                      Get in Touch
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Excellence Section */}
      <section className="py-20 bg-gradient-to-b from-slate-100 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">Professional Excellence</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-900 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Area 1 */}
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors duration-300">
                <Apple className="h-7 w-7 text-blue-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Nutrition Education</h3>
              <p className="text-slate-600 leading-relaxed">
                Extensive experience in nutrition and dietetics education, with a focus on holistic 
                approaches. Regular contributor to nutrition awareness through media and public speaking.
              </p>
            </div>

            {/* Area 2 */}
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors duration-300">
                <Award className="h-7 w-7 text-blue-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Achievements</h3>
              <p className="text-slate-600 leading-relaxed">
                Recipient of the Outstanding Service Award 2021 from Madras Library Association and 
                Legendary Award from Rotary Club for contributions to education.
              </p>
            </div>

            {/* Area 3 */}
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors duration-300">
                <Heart className="h-7 w-7 text-blue-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Community Impact</h3>
              <p className="text-slate-600 leading-relaxed">
                Founded and hosts weekly book review meetings since 2020, fostering literary 
                engagement across India with over 300 sessions conducted.
              </p>
            </div>
          </div>

          {/* Professional Focus */}
          <div className="mt-20 bg-gradient-to-br from-blue-50 to-white rounded-xl p-10 shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Professional Focus</h3>
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p>
                With a strong foundation in Clinical Nutrition and Dietetics, P. Uma Maheswari promotes 
                the philosophy of "Think Global and Eat Local." Her approach combines traditional wisdom 
                with modern nutritional science, emphasizing the importance of holistic wellness through 
                diet, lifestyle modifications, and mental health.
              </p>
              <p>
                As a Certified Diabetes Educator and experienced academic professional, she has made 
                significant contributions through media appearances, including daily nutrition awareness 
                sessions on Makkal Television, and through community outreach programs such as the 
                gender sensitization programme for the Erode District Police.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;