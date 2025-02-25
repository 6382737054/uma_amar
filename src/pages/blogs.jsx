import React from 'react';

const BlogPage = () => {
  const articles = [
    {
      id: 1,
      title: "உயிர் வளர்க்கும் ஊட்டச்சத்து",
      link: "https://www.dailythanthi.com/News/SirappuKatturaigal/2019/09/17110949/LifeGiving-Nutrition.vpf",
      source: "Daily Thanthi"
    },
    {
      id: 2,
      title: "நம்மைச் சுற்றி உள்ளது ஆரோக்கிய உணவு",
      link: "https://www.hindutamil.in/news/supplements/nalam-vazha/786322-healthy-food-is-all-around-us.html",
      source: "Hindu Tamil"
    },
    {
      id: 3,
      title: "இளைய தலைமுறைக்கு இன்றைய தேவை ஊட்டச்சத்து உள்ள உணவே",
      link: "https://www.dinamani.com/health/health-news/2017/Sep/06/இளைய-தலைமுறைக்கு-இன்றைய-தேவை-ஊட்டச்சத்து-உள்ள-உணவே-2768364.html",
      source: "Dinamani"
    }
  ];
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Published Articles</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-4">
            {articles.map((article) => (
              <a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-6 
                  shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 
                  border border-blue-100"
              >
                <h2 className="text-xl font-semibold text-blue-900 mb-2">
                  {article.title}
                </h2>
                <p className="text-indigo-800">
                  {article.source}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;