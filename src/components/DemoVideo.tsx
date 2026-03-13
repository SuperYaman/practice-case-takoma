import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import demoVideo from "../../public/assets/video/demo-video.mp4";

export default function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      setProgress((video.currentTime / video.duration) * 100);
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => {
      video.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex flex-col items-center px-6 py-10">
      <div className="w-full max-w-4xl aspect-video overflow-hidden rounded-2xl shadow-xl relative">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={demoVideo} type="video/mp4" />
        </video>

        <button
          onClick={togglePlay}
          className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>

        <div className="absolute bottom-0 left-0 w-full h-2 bg-white/30">
          <div
            className="h-2 bg-pink-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}