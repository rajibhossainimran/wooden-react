import { useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp, FaPlus, FaMinus } from "react-icons/fa";
import video from "../assets/images/wooenVideo.mp4";

const Banner = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5); // Default volume is 50%

  // Toggle Mute/Unmute
  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Increase Volume
  const increaseVolume = () => {
    if (videoRef.current && volume < 1) {
      let newVolume = Math.min(volume + 0.1, 1);
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  // Decrease Volume
  const decreaseVolume = () => {
    if (videoRef.current && volume > 0) {
      let newVolume = Math.max(volume - 0.1, 0);
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  return (
    <div className="mt-14 relative">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        className="w-full h-[600px] object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Sound Controls */}
      <div className="absolute top-5 right-5 flex flex-col items-center gap-2 bg-black bg-opacity-50 p-3 rounded-lg">
        {/* Mute/Unmute Button */}
        <button
          onClick={toggleSound}
          className="text-white text-2xl hover:text-gray-300 transition"
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>

        {/* Volume Up */}
        <button
          onClick={increaseVolume}
          className="text-white text-xl hover:text-gray-300 transition"
        >
          <FaPlus />
        </button>

        {/* Volume Down */}
        <button
          onClick={decreaseVolume}
          className="text-white text-xl hover:text-gray-300 transition"
        >
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

export default Banner;
