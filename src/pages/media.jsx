import React, { useState, useRef } from 'react';
import { PlayCircle } from 'lucide-react';

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState('images');
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  const images = [
    '/Images/media/img1.png',
    '/Images/media/img2.jpg',
    '/Images/media/img3.jpg',
    '/Images/media/img4.jpg',
    '/Images/media/img5.jpg',
    '/Images/media/img6.jpg',
    '/Images/media/img7.jpg',
    '/Images/media/img8.jpg',
    '/Images/media/img9.jpg',
    '/Images/media/img10.jpg',
    '/Images/media/img11.jpg',
    '/Images/media/img12.jpg',
    '/Images/media/img13.jpg',
    '/Images/media/img14.jpg'
  ];

  const videos = [
    {
      id: 'video1',
      thumbnail: '/Images/Videos/thump1.jpg',
      videoUrl: '/Images/Videos/video1.mp4'
    },
    {
      id: 'video2', 
      thumbnail: '/Images/videos/thump2.jpg',
      videoUrl: '/Images/videos/video2.mp4'
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Gallery</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>
        </div>
      </section>

      <section className="border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-16">
            {['images', 'videos'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-6 px-4 relative font-medium text-xl transition-colors duration-200 
                  ${activeTab === tab ? 'text-blue-900' : 'text-blue-600 hover:text-blue-700'}`}
              >
                <span className="capitalize">{tab}</span>
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'images' && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                    transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl 
                    transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative aspect-video bg-indigo-900">
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
                        className="absolute inset-0 bg-indigo-900 bg-opacity-20 group-hover:bg-opacity-30
                        transition-all duration-300 flex items-center justify-center cursor-pointer"
                        onClick={() => handleVideoPlay(video.id)}
                      >
                        <PlayCircle className="w-20 h-20 text-white opacity-90 group-hover:opacity-100
                          transform group-hover:scale-110 transition-all duration-300" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MediaPage;