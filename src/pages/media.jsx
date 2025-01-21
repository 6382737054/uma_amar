import React, { useState, useRef } from 'react';
import { 
  PlayCircle,
  Calendar,
  ArrowRight 
} from 'lucide-react';

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState('articles');
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  const featuredArticle = {
    id: 'featured',
    title: "Breakthrough in Medical Research: A New Era in Healthcare",
    image: "/Images/featured.png",
    date: "January 20, 2024",
    description: "Exploring groundbreaking discoveries that are revolutionizing the healthcare industry and transforming patient care worldwide. This comprehensive study reveals new approaches to treatment methodologies."
  };

  const articles = [
    {
      id: 1,
      title: "Understanding Neural Networks and Brain Function",
      image: "/Images/research.png",
      date: "January 15, 2024",
      description: "An in-depth look at how recent advances in medical research are transforming our understanding of neural networks and brain function."
    },
    {
      id: 2,
      title: "Breaking New Ground in Neurological Treatment",
      image: "/Images/research.png",
      date: "January 10, 2024",
      description: "Exploring innovative approaches in treating complex neurological conditions with breakthrough methodologies."
    },
    {
      id: 3,
      title: "The Future of Personalized Medicine",
      image: "/Images/research.png",
      date: "January 5, 2024",
      description: "Discussing how personalized medicine is shaping the future of healthcare delivery and patient treatment."
    },
    {
      id: 4,
      title: "Advancements in Clinical Research",
      image: "/Images/research.png",
      date: "January 3, 2024",
      description: "Examining the latest developments in clinical research and their impact on modern medical practices."
    }
  ];

  const featuredVideo = {
    id: 'featured-video',
    title: "Revolutionizing Healthcare Through Innovation",
    thumbnail: "/Images/featured-video.png",
    videoUrl: "/Images/testvid.mp4",
    duration: "18:30",
    date: "January 2024",
    description: "A comprehensive overview of groundbreaking medical innovations and their impact on modern healthcare practices."
  };

  const videos = [
    {
      id: 1,
      title: "Understanding Modern Healthcare Approaches",
      thumbnail: "/Images/video1.png",
      videoUrl: "/Images/testvid.mp4",
      duration: "12:45",
      date: "January 2024",
      description: "A comprehensive overview of modern healthcare methodologies and their impact on patient care."
    },
    {
      id: 2,
      title: "Advances in Medical Research",
      thumbnail: "/Images/video2.png",
      videoUrl: "/Images/testvid.mp4",
      duration: "15:30",
      date: "December 2023",
      description: "Exploring the latest breakthroughs in medical research and their practical applications."
    },
    {
      id: 3,
      title: "Patient Care Excellence",
      thumbnail: "/Images/video3.png",
      videoUrl: "/Images/testvid.mp4",
      duration: "10:15",
      date: "December 2023",
      description: "Demonstrating best practices in patient care and treatment procedures."
    },
    {
      id: 4,
      title: "The Future of Healthcare Technology",
      thumbnail: "/Images/video4.png",
      videoUrl: "/Images/testvid.mp4",
      duration: "14:20",
      date: "December 2023",
      description: "Exploring upcoming technological innovations in healthcare and medical treatment."
    }
  ];

  const handleVideoPlay = (videoId) => {
    Object.values(videoRefs.current).forEach(videoRef => {
      if (videoRef && videoRef !== videoRefs.current[videoId]) {
        videoRef.pause();
      }
    });

    const videoRef = videoRefs.current[videoId];
    if (videoRef) {
      if (playingVideo === videoId) {
        videoRef.paused ? videoRef.play() : videoRef.pause();
      } else {
        videoRef.play();
        setPlayingVideo(videoId);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Media Center
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-600 to-gray-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Stay informed with our latest research findings, medical breakthroughs, 
              and healthcare innovations.
            </p>
          </div>
        </div>
      </section>

      {/* Content Navigation */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-12">
            {['articles', 'videos'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 relative font-medium text-lg transition-colors duration-200
                  ${activeTab === tab ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <span className="capitalize">{tab}</span>
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-900"></span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Articles */}
          {activeTab === 'articles' && (
            <>
              {/* Featured Article */}
              <div className="mb-20">
                <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative overflow-hidden">
                      <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-gray-600 transition-colors duration-200">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        {featuredArticle.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          {featuredArticle.date}
                        </span>
                        <button className="text-gray-900 font-medium hover:text-gray-600 transition-colors duration-200 flex items-center">
                          Read Full Article
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regular Articles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article) => (
                  <div 
                    key={article.id}
                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors duration-200">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-6 line-clamp-2">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          {article.date}
                        </span>
                        <button className="text-gray-900 font-medium hover:text-gray-600 transition-colors duration-200 flex items-center">
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Videos */}
          {activeTab === 'videos' && (
            <>
              {/* Featured Video */}
              <div className="mb-20">
                <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative aspect-video bg-black">
                      <video
                        ref={el => videoRefs.current[featuredVideo.id] = el}
                        poster={featuredVideo.thumbnail}
                        className="w-full h-full object-cover"
                        onClick={() => handleVideoPlay(featuredVideo.id)}
                      >
                        <source src={featuredVideo.videoUrl} type="video/mp4" />
                      </video>
                      {(!playingVideo || playingVideo !== featuredVideo.id) && (
                        <div 
                          className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 
                          transition-all duration-300 flex items-center justify-center cursor-pointer"
                          onClick={() => handleVideoPlay(featuredVideo.id)}
                        >
                          <PlayCircle className="w-20 h-20 text-white opacity-90 group-hover:opacity-100 
                            transform group-hover:scale-110 transition-all duration-300" />
                        </div>
                      )}
                      <div className="absolute bottom-4 right-4 px-3 py-1 bg-black bg-opacity-75 text-white rounded-md text-sm">
                        {featuredVideo.duration}
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        {featuredVideo.title}
                      </h2>
                      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        {featuredVideo.description}
                      </p>
                      <span className="flex items-center text-sm text-gray-500 mt-auto">
                        <Calendar className="w-4 h-4 mr-2" />
                        {featuredVideo.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regular Videos */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video) => (
                  <div 
                    key={video.id}
                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative aspect-video bg-black">
                      <video
                        ref={el => videoRefs.current[video.id] = el}
                        poster={video.thumbnail}
                        className="w-full h-full object-cover"
                        onClick={() => handleVideoPlay(video.id)}
                      >
                        <source src={video.videoUrl} type="video/mp4" />
                      </video>
                      {(!playingVideo || playingVideo !== video.id) && (
                        <div 
                          className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 
                          transition-all duration-300 flex items-center justify-center cursor-pointer"
                          onClick={() => handleVideoPlay(video.id)}
                        >
                          <PlayCircle className="w-16 h-16 text-white opacity-90 group-hover:opacity-100 
                            transform group-hover:scale-110 transition-all duration-300" />
                        </div>
                      )}
                      <div className="absolute bottom-4 right-4 px-3 py-1 bg-black bg-opacity-75 text-white rounded-md text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors duration-200">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {video.description}
                      </p>
                      <span className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {video.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default MediaPage;