import React, { useState } from 'react';
import { Star, Quote, ChevronRight, ChevronLeft } from 'lucide-react';

const TestimonialsPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO, TechVision Inc.",
      company: "TechVision Inc.",
      image: "/Images/test1.png",
      quote: "Uma's expertise in software development has been transformative for our organization. Their ability to understand complex business requirements and deliver elegant solutions is exceptional.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chang",
      position: "Director of Engineering",
      company: "InnovateX Solutions",
      image: "/Images/test1.png",
      quote: "Working with Uma has been an outstanding experience. Their technical leadership and commitment to excellence have significantly elevated our development standards.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Product Manager",
      company: "GlobalTech Systems",
      image: "/Images/test1.png",
      quote: "Uma brings an unparalleled level of expertise and professionalism to every project. Their innovative solutions and strategic approach have consistently exceeded our expectations.",
      rating: 5,
    },
  ];

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Client Testimonials
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Hear from industry leaders about their experiences and the impact 
            of our collaborative partnerships.
          </p>
        </div>
      </section>

      {/* Featured Testimonial Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-12 border border-blue-100">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-tl-2xl rounded-br-2xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-tr-2xl rounded-bl-2xl -z-10"></div>
            
            <div className="relative">
              {/* Quote Icon */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-12 h-12 text-white transform rotate-180" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="pt-16 flex flex-col items-center">
                <div className="w-24 h-24 mb-6 rounded-full overflow-hidden border-4 border-indigo-100 shadow-xl">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-indigo-500 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl lg:text-2xl text-indigo-950 text-center mb-8 italic">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-indigo-900">{testimonials[activeTestimonial].name}</h3>
                  <p className="text-indigo-700">{testimonials[activeTestimonial].position}</p>
                  <p className="text-indigo-600">{testimonials[activeTestimonial].company}</p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-12">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 hover:from-indigo-200 hover:to-purple-200 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6 text-indigo-900" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 hover:from-purple-200 hover:to-indigo-200 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6 text-indigo-900" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Grid Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-100 via-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100"
              >
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-indigo-200 shadow-md"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-indigo-900">{testimonial.name}</h3>
                    <p className="text-indigo-700">{testimonial.position}</p>
                    <p className="text-indigo-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-indigo-500 fill-current" />
                  ))}
                </div>
                <p className="text-indigo-800">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;