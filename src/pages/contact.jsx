import React from 'react';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Get in touch with us for inquiries about our research and healthcare services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details and Map */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100">
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center shadow-md group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-blue-900" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Address</h3>
                    <p className="text-indigo-900 leading-relaxed">
                      123 Healthcare Avenue<br />
                      Medical District<br />
                      Chennai, Tamil Nadu 600001<br />
                      India
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center shadow-md group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                      <Mail className="w-6 h-6 text-blue-900" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Email</h3>
                    <a 
                      href="mailto:contact@healthcare.com" 
                      className="text-indigo-900 hover:text-blue-700 transition-colors duration-200 flex items-center group"
                    >
                      contact@healthcare.com
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center shadow-md group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                      <Phone className="w-6 h-6 text-blue-900" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Phone</h3>
                    <a 
                      href="tel:+911234567890" 
                      className="text-indigo-900 hover:text-blue-700 transition-colors duration-200 flex items-center group"
                    >
                      +91 123 456 7890
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-blue-100 h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8487666016612!2d80.25023147516847!3d13.047599987253635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52662ef5caa77f%3A0x9f1067aa71e3898e!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1708521760495!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="py-8 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-blue-50 text-lg">
              Ready to schedule an appointment?
            </p>
            <button className="px-8 py-3 bg-white text-indigo-900 rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;