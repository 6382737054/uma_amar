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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Healthcare Services & Research
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-600 to-gray-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Combining advanced research with exceptional clinical care to transform 
              the future of healthcare and improve patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-10 shadow-lg">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                    <div className="text-gray-900">{service.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-6">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>

                <div className="space-y-4">
                  {service.points.map((point, idx) => (
                    <div key={idx} className="flex items-center">
                      <BadgeCheck className="w-5 h-5 text-gray-900 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Additional Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors duration-300">
                  <div className="text-gray-900 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <button className="text-gray-900 font-medium hover:text-gray-600 transition-colors duration-200 inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Participation */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Research Opportunities
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Join our research initiatives and contribute to groundbreaking studies 
            that advance medical knowledge and improve patient care.
          </p>
          <div className="inline-flex items-center justify-center">
            <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md">
              View Current Studies
            </button>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-white text-lg mb-4 md:mb-0">
              Need professional medical consultation?
            </p>
            <button className="px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Schedule an Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;