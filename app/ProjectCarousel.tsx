"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, GitFork, ExternalLink, Github } from 'lucide-react';

const ProjectCarousel = () => {
  // Sample project data - replace with your actual GitHub projects
  const projects = [
    {
      id: 1,
      name: "AI Chat Application",
      description: "A real-time chat application powered by AI with modern UI/UX design and WebSocket support.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      stars: 234,
      forks: 45,
      language: "TypeScript",
      languageColor: "#3178c6",
      githubUrl: "https://github.com/yourusername/project1",
      liveUrl: "https://project1.demo.com"
    },
    {
      id: 2,
      name: "E-Commerce Dashboard",
      description: "Full-featured admin dashboard with analytics, inventory management, and real-time data visualization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      stars: 189,
      forks: 32,
      language: "React",
      languageColor: "#61dafb",
      githubUrl: "https://github.com/yourusername/project2",
      liveUrl: "https://project2.demo.com"
    },
    {
      id: 3,
      name: "Machine Learning API",
      description: "RESTful API for ML models with authentication, rate limiting, and comprehensive documentation.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      stars: 312,
      forks: 67,
      language: "Python",
      languageColor: "#3572A5",
      githubUrl: "https://github.com/yourusername/project3",
      liveUrl: "https://project3.demo.com"
    },
    {
      id: 4,
      name: "Task Management System",
      description: "Collaborative task manager with drag-and-drop, real-time updates, and team management features.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      stars: 156,
      forks: 28,
      language: "JavaScript",
      languageColor: "#f1e05a",
      githubUrl: "https://github.com/yourusername/project4",
      liveUrl: "https://project4.demo.com"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState('next');

  const nextSlide = useCallback(() => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevSlide = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  interface Project {
    id: number;
    name: string;
    description: string;
    image: string;
    stars: number;
    forks: number;
    language: string;
    languageColor: string;
    githubUrl: string;
    liveUrl: string;
  }

  const goToSlide = (index: number): void => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const currentProject = projects[currentIndex];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white-900 mb-4">Featured Projects</h2>
      </div>

      <div 
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative h-80 md:h-auto overflow-hidden bg-linear-to-br from-purple-500 to-blue-600">
            <img 
              src={currentProject.image} 
              alt={currentProject.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Language Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: currentProject.languageColor }}
              ></div>
              <span className="text-sm font-medium text-gray-700">{currentProject.language}</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {currentProject.name}
              </h3>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {currentProject.description}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-gray-700">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{currentProject.stars}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <GitFork className="w-5 h-5 text-gray-500" />
                  <span className="font-semibold">{currentProject.forks}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors font-medium"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-8 bg-gray-900' 
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="text-sm text-gray-500 font-medium">
                {currentIndex + 1} / {projects.length}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6 text-gray-900" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6 text-gray-900" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;