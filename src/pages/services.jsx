import React from 'react';
import { 
  Microscope, 
  Brain, 
  Stethoscope, 
  BookOpen, 
  Users, 
  ArrowRight,
  BadgeCheck
} from 'lucide-react';

const ServicesPage = () => {
  const mainServices = [
    {
      icon: <Microscope className="w-7 h-7" />,
      title: "Research Excellence",
      description: "Pioneering research in neuroscience and cognitive disorders, with a focus on developing innovative therapeutic approaches.",
      points: [
        "International research collaborations",
        "State-of-the-art laboratories",
        "Clinical trial management",
        "Research publication and dissemination"
      ]
    },
    {
      icon: <Brain className="w-7 h-7" />,
      title: "Clinical Expertise",
      description: "Specialized clinical care focusing on neurological disorders, utilizing evidence-based treatment approaches.",
      points: [
        "Comprehensive neurological assessments",
        "Advanced diagnostic procedures",
        "Personalized treatment plans",
        "Long-term care management"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Stethoscope />,
      title: "Patient Care",
      description: "Comprehensive medical care with focus on patient well-being and recovery."
    },
    {
      icon: <BookOpen />,
      title: "Education",
      description: "Medical education and training programs for healthcare professionals."
    },
    {
      icon: <Users />,
      title: "Consultation",
      description: "Expert consultation services for complex medical cases."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Healthcare Services & Research
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 leading-relaxed">
              Combining advanced research with exceptional clinical care to transform 
              the future of healthcare and improve patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-blue-100">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center shadow-md">
                    <div className="text-blue-900">{service.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 ml-6">{service.title}</h3>
                </div>
                
                <p className="text-indigo-900 mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>

                <div className="space-y-4">
                  {service.points.map((point, idx) => (
                    <div key={idx} className="flex items-center">
                      <BadgeCheck className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-indigo-800">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-16">
            Additional Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-900 group-hover:to-indigo-900 transition-all duration-300 shadow-md">
                  <div className="text-blue-900 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-indigo-800 leading-relaxed mb-6">{service.description}</p>
                <button className="text-blue-700 font-medium hover:text-blue-900 transition-colors duration-200 inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Participation */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-blue-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">
            Research Opportunities
          </h2>
          <p className="text-xl text-indigo-900 mb-12 leading-relaxed">
            Join our research initiatives and contribute to groundbreaking studies 
            that advance medical knowledge and improve patient care.
          </p>
          <div className="inline-flex items-center justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-lg hover:from-blue-800 hover:to-indigo-900 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
              View Current Studies
            </button>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="py-8 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-blue-50 text-lg mb-4 md:mb-0">
              Need professional medical consultation?
            </p>
            <button className="px-8 py-3 bg-white text-indigo-900 rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Schedule an Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;