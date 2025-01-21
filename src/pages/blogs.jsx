import React, { useState } from 'react';
import { X } from 'lucide-react';

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "Advancing Neurological Research: New Frontiers",
      image: "/Images/blog.png",
      excerpt: "Exploring the latest breakthroughs in neurological research and their implications for patient care.",
      content: `
        Recent advances in neurological research have opened new frontiers in our understanding of brain function and treatment methodologies. This comprehensive study reveals groundbreaking insights into neural networks and their role in cognitive processes.
  
        The research focuses on several key areas:
  
        First, we examine the role of neural plasticity in recovery and rehabilitation. Our findings suggest that the brain's ability to adapt and reorganize itself is far more sophisticated than previously understood. This has significant implications for treatment approaches, particularly in cases of trauma or degenerative conditions.
  
        Furthermore, our research has uncovered new patterns in neural signal processing that could revolutionize our approach to neurological disorders. By understanding these patterns, we can develop more targeted and effective treatments.
  
        The implications of these findings extend beyond immediate clinical applications. They offer new perspectives on brain development, learning processes, and the potential for neural regeneration. This could lead to breakthrough treatments for conditions previously considered untreatable.
  
        Looking ahead, these discoveries pave the way for innovative therapeutic approaches and personalized treatment strategies. The future of neurological care looks increasingly promising as we continue to uncover the brain's remarkable capabilities.
      `
    },
    {
      id: 2,
      title: "Innovation in Patient Care: A Modern Approach",
      image: "/Images/blog.png",
      excerpt: "Examining modern methodologies in patient care and treatment optimization.",
      content: `
        Modern healthcare is undergoing a transformation, driven by technological advances and new understanding of patient needs. This article explores innovative approaches to patient care that are reshaping the healthcare landscape.
  
        Key aspects of modern patient care:
  
        Our research has identified several crucial elements that define modern patient care. These include personalized treatment plans, integrated care approaches, and the use of advanced monitoring technologies. Each of these components contributes to better patient outcomes and more efficient healthcare delivery.
  
        The role of technology in patient care has evolved significantly. From AI-assisted diagnostics to remote monitoring systems, technological innovations are enabling more precise and responsive care delivery. This integration of technology with traditional care methods is creating new possibilities for treatment and recovery.
  
        Looking forward, the future of patient care will likely see even greater innovation. The continued development of new technologies and methodologies promises to further enhance our ability to provide effective, personalized care to each patient.
      `
    },
    {
      id: 3,
      title: "The Future of Medical Research",
      image: "/Images/blog.png",
      excerpt: "Investigating emerging trends and future directions in medical research.",
      content: `
        The landscape of medical research is rapidly evolving, with new technologies and methodologies opening unprecedented possibilities. This comprehensive analysis explores the future directions of medical research and their potential impact on healthcare.
  
        Key trends in medical research:
  
        Advanced genomic studies are revealing new insights into disease mechanisms and potential treatments. This understanding is leading to more targeted and effective therapeutic approaches.
  
        Artificial intelligence and machine learning are revolutionizing how we analyze medical data and identify patterns. These tools are enabling faster, more accurate diagnosis and treatment planning.
  
        The integration of various research disciplines is creating new opportunities for breakthrough discoveries. This interdisciplinary approach is essential for addressing complex medical challenges.
  
        Future implications:
        These developments suggest a future where medical treatments are increasingly personalized and precise. The combination of advanced technology with deeper biological understanding will likely lead to more effective treatments and better patient outcomes.
      `
    },
    {
      id: 4,
      title: "Breakthroughs in Clinical Trials and Treatment Methods",
      image: "/Images/blog.png",
      excerpt: "Recent clinical trials revealing promising results in treatment methodologies and patient outcomes.",
      content: `
        Recent clinical trials have demonstrated remarkable progress in developing new treatment methods across various medical disciplines. These findings represent significant steps forward in our understanding of disease management and patient care.
  
        Key findings from recent trials:
  
        Multiple studies have shown exceptional promise in targeting specific disease pathways with unprecedented precision. This targeted approach has led to improved treatment efficacy and reduced side effects in many cases.
  
        Patient response rates have exceeded expectations in several key areas, particularly in treatments for chronic conditions. The data suggests that these new approaches could significantly improve long-term patient outcomes.
  
        The integration of advanced monitoring systems has also played a crucial role in these trials. Real-time data collection and analysis have enabled more responsive and adaptive treatment protocols.
  
        Future applications:
        These findings open new possibilities for personalized medicine and treatment optimization. The successful integration of these methods into clinical practice could revolutionize our approach to patient care.
      `
    },
    {
      id: 5,
      title: "Understanding Cognitive Health: A Comprehensive Guide",
      image: "/Images/blog.png",
      excerpt: "Exploring modern approaches to cognitive health assessment and maintenance.",
      content: `
        Cognitive health remains a critical focus in modern medical research, with new insights emerging about brain function and maintenance. This comprehensive analysis examines current understanding and future directions in cognitive health care.
  
        Key aspects of cognitive health:
  
        Recent research has revealed new connections between lifestyle factors and cognitive function. These findings emphasize the importance of holistic approaches to maintaining brain health.
  
        Advanced imaging techniques have provided unprecedented views of brain activity and function. These observations have led to new theories about cognitive development and decline.
  
        The role of preventive measures has gained increased attention. Evidence suggests that early intervention and maintenance strategies can significantly impact long-term cognitive health.
  
        Practical implications:
        Understanding these aspects of cognitive health enables more effective approaches to both prevention and treatment. The field continues to evolve with promising developments for cognitive health management.
      `
    },
    {
      id: 6,
      title: "Advances in Preventive Medicine and Healthcare",
      image: "/Images/blog.png",
      excerpt: "New developments in preventive healthcare and early intervention strategies.",
      content: `
        Preventive medicine has emerged as a crucial focus in modern healthcare, with new strategies and technologies enabling better early intervention. This analysis explores recent advances and their implications for public health.
  
        Key developments:
  
        Advanced screening methods have revolutionized early detection capabilities. These technologies allow for more accurate and earlier identification of potential health issues.
  
        Predictive analytics has become an invaluable tool in preventive medicine. By analyzing patterns and risk factors, healthcare providers can better anticipate and prevent potential health problems.
  
        The role of lifestyle modification has been further validated through comprehensive studies. Research continues to reveal the significant impact of preventive measures on long-term health outcomes.
  
        Looking forward:
        The field of preventive medicine continues to evolve, promising even more effective approaches to maintaining health and preventing disease development.
      `
    },
    {
      id: 7,
      title: "Integrative Medicine: Bridging Traditional and Modern Approaches",
      image: "/Images/blog.png",
      excerpt: "Examining the synergy between traditional healing methods and modern medical practices.",
      content: `
        The integration of traditional healing wisdom with modern medical science has opened new possibilities in patient care. This exploration looks at how combining different approaches can enhance treatment outcomes.
  
        Key insights:
  
        Research has shown that integrative approaches can provide more comprehensive patient care. The combination of traditional wisdom and modern techniques often yields better results than either approach alone.
  
        Patient satisfaction has improved significantly with integrative methods. Many report better overall experiences and outcomes when traditional and modern approaches are thoughtfully combined.
  
        Evidence continues to support the validity of certain traditional practices when combined with modern medicine. This validation has led to more widespread acceptance of integrative approaches.
  
        Future directions:
        The field of integrative medicine continues to evolve, promising new ways to enhance patient care through combined approaches to healing and wellness.
      `
    },
    {
      id: 8,
      title: "Medical Technology and Patient Care: The Next Frontier",
      image: "/Images/blog.png",
      excerpt: "How emerging technologies are transforming the delivery of healthcare services.",
      content: `
        Technological advancements continue to reshape the landscape of medical care, introducing new possibilities for treatment and patient monitoring. This analysis explores the latest developments and their impact on healthcare delivery.
  
        Major developments:
  
        Artificial intelligence has revolutionized diagnostic processes and treatment planning. Machine learning algorithms now assist in everything from image analysis to treatment recommendation.
  
        Remote monitoring technologies have enabled more effective outpatient care. These systems allow for continuous patient monitoring while maintaining normal daily activities.
  
        Virtual reality applications have shown promise in both treatment and training. These tools offer new ways to approach rehabilitation and medical education.
  
        Impact and implications:
        These technological advances are creating new paradigms in healthcare delivery, promising more efficient and effective patient care options for the future.
      `
    }
  ];
    

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Research Blog
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-600 to-gray-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Insights and perspectives on the latest developments in medical research 
              and healthcare innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                  transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedBlog(blog)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-600 
                    transition-colors duration-200">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 
                transition-colors duration-200 z-10"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              <div className="relative h-64 lg:h-80">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {selectedBlog.title}
                </h2>

                <div className="prose prose-lg max-w-none">
                  {selectedBlog.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;