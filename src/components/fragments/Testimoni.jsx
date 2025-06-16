import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Heart,
  MessageCircle,
  Share,
  Volume2,
  VolumeX,
} from "lucide-react";
import CustomButton from "../layout/CustomButton";

export default function Testimoni() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [likedVideos, setLikedVideos] = useState(new Set());
  const [showYouTubePlayer, setShowYouTubePlayer] = useState(false);
  const carouselRef = useRef(null);

  const videos = [
    {
      id: 1,
      youtubeId: "dQw4w9WgXcQ", // Rick Astley - Never Gonna Give You Up
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      title: "Morning Energy Boost",
      username: "@fitnessguru",
      likes: "12.5K",
      comments: "234",
      description: "Start your day with power! 💪 #EnergyBoost #MorningRoutine",
    },
    {
      id: 2,
      youtubeId: "9bZkp7q19f0", // PSY - GANGNAM STYLE
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
      title: "Pre-Workout Fuel",
      username: "@athletelife",
      likes: "8.9K",
      comments: "156",
      description:
        "The secret to crushing your workout 🔥 #PreWorkout #Fitness",
    },
    {
      id: 3,
      youtubeId: "kJQP7kiw5Fk", // Luis Fonsi - Despacito
      thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
      title: "Recovery Power",
      username: "@healthyvibes",
      likes: "15.2K",
      comments: "298",
      description: "Post-workout recovery made easy ✨ #Recovery #Wellness",
    },
    {
      id: 4,
      youtubeId: "fJ9rUzIMcZQ", // Queen - Bohemian Rhapsody
      thumbnail: "https://img.youtube.com/vi/fJ9rUzIMcZQ/maxresdefault.jpg",
      title: "Daily Hydration",
      username: "@hydrationstation",
      likes: "6.7K",
      comments: "89",
      description: "Stay hydrated, stay powerful 💧 #Hydration #Health",
    },
    {
      id: 5,
      youtubeId: "L_jWHffIx5E", // Smash Mouth - All Star
      thumbnail: "https://img.youtube.com/vi/L_jWHffIx5E/maxresdefault.jpg",
      title: "Energy On-The-Go",
      username: "@busylifestyle",
      likes: "11.3K",
      comments: "187",
      description: "Perfect for busy days! ⚡ #OnTheGo #BusyLife",
    },
    {
      id: 6,
      youtubeId: "ZZ5LpwO-An4", // HEYYEYAAEYAAAEYAEYAA
      thumbnail: "https://img.youtube.com/vi/ZZ5LpwO-An4/maxresdefault.jpg",
      title: "Night Recovery",
      username: "@sleepwell",
      likes: "9.1K",
      comments: "134",
      description: "Wind down with power 🌙 #NightTime #Recovery",
    },
  ];

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
    setShowYouTubePlayer(false);
    setIsPlaying(false);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
    setShowYouTubePlayer(false);
    setIsPlaying(false);
  };

  const toggleLike = (videoId) => {
    setLikedVideos((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(videoId)) {
        newSet.delete(videoId);
      } else {
        newSet.add(videoId);
      }
      return newSet;
    });
  };

  const scrollToVideo = (index) => {
    setCurrentVideo(index);
    setShowYouTubePlayer(false);
    setIsPlaying(false);
    if (carouselRef.current) {
      const videoWidth = carouselRef.current.offsetWidth / 3;
      carouselRef.current.scrollTo({
        left: index * videoWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePlayVideo = () => {
    setShowYouTubePlayer(true);
    setIsPlaying(true);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevVideo();
      if (e.key === "ArrowRight") nextVideo();
      if (e.key === " ") {
        e.preventDefault();
        if (!showYouTubePlayer) {
          handlePlayVideo();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showYouTubePlayer]);

  return (
    <div className="relative w-full min-h-screen py-10 lg:py-20 bg-neutral-200 text-black z-10 overflow-hidden">
      {/* Header */}
      <div className="relative z-20 pt-8 pb-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Fuelled by Tenplus
        </h1>
        <p className="text-lg">Hear from our happily hydrated community</p>
      </div>

      {/* Main Video Display */}
      <div className="relative z-10 flex justify-center items-center px-4 mb-8">
        <div className="relative w-full max-w-sm mx-auto">
          {/* Video Container */}
          <div className="relative aspect-[9/16] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800">
            {/* YouTube Player or Thumbnail */}
            {showYouTubePlayer ? (
              <iframe
                src={`https://www.youtube.com/embed/${
                  videos[currentVideo].youtubeId
                }?autoplay=1&mute=${
                  isMuted ? 1 : 0
                }&controls=1&modestbranding=1&rel=0`}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={videos[currentVideo].title}
              />
            ) : (
              <>
                {/* Video Thumbnail */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 cursor-pointer"
                  style={{
                    backgroundImage: `url(${videos[currentVideo].thumbnail})`,
                  }}
                  onClick={handlePlayVideo}
                >
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handlePlayVideo}
                    className="w-20 h-20 cursor-pointer bg-black/50 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
                  >
                    <Play className="w-10 h-10 text-neutral-200 hover:text-black ml-1" />
                  </button>
                </div>
              </>
            )}

            {/* Video Info Overlay - Only show when not playing */}
            {!showYouTubePlayer && (
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="text-white">
                  <h3 className="font-bold text-lg mb-1">
                    {videos[currentVideo].title}
                  </h3>
                  <p className="text-primary text-sm mb-2">
                    {videos[currentVideo].username}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {videos[currentVideo].description}
                  </p>
                </div>
              </div>
            )}

            {/* Side Actions - Only show when not playing */}
            {!showYouTubePlayer && (
              <div className="absolute right-4 bottom-20 flex flex-col space-y-6">
                <button
                  onClick={() => toggleLike(videos[currentVideo].id)}
                  className="flex flex-col items-center space-y-1 group"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      likedVideos.has(videos[currentVideo].id)
                        ? "bg-red-500 text-white"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        likedVideos.has(videos[currentVideo].id)
                          ? "fill-current"
                          : ""
                      }`}
                    />
                  </div>
                  <span className="text-white text-xs font-medium">
                    {videos[currentVideo].likes}
                  </span>
                </button>

                <button className="flex flex-col items-center space-y-1 group">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white text-xs font-medium">
                    {videos[currentVideo].comments}
                  </span>
                </button>

                <button className="flex flex-col items-center space-y-1 group">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                    <Share className="w-6 h-6 text-white" />
                  </div>
                </button>
              </div>
            )}

            {/* Volume Control - Only show when not playing */}
            {!showYouTubePlayer && (
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
            )}

            {/* Close Video Button - Only show when playing */}
            {showYouTubePlayer && (
              <button
                onClick={() => {
                  setShowYouTubePlayer(false);
                  setIsPlaying(false);
                }}
                className="absolute top-4 right-4 z-30 w-10 h-10 bg-black/70 rounded-full flex items-center justify-center hover:bg-black/90 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Video Carousel Navigation */}
      <div className="relative z-10 px-4 mb-8">
        <div
          ref={carouselRef}
          className="flex space-x-4 justify-center overflow-x-auto scrollbar-hide py-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => scrollToVideo(index)}
              className={`flex-shrink-0 relative w-20 h-28 rounded-2xl overflow-hidden transition-all duration-300 ${
                index === currentVideo
                  ? "ring-3 ring-primary scale-110"
                  : "opacity-70 hover:opacity-100 hover:scale-105"
              }`}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              {index === currentVideo && (
                <div className="absolute inset-0 border-2 border-primary rounded-2xl"></div>
              )}
              {/* YouTube Play Icon on Thumbnail */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 bg-black/60 rounded-sm flex items-center justify-center">
                  <Play className="w-3 h-3 text-white ml-0.5" fill="white" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevVideo}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextVideo}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Bottom CTA */}
      <div className="relative z-10 text-center pb-8">
        <CustomButton text="Try Tenplus Now" />
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentVideo
                ? "bg-black w-6"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
