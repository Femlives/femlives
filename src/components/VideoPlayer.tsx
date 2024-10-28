import React from 'react';

interface VideoPlayerProps {
  srcUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ srcUrl }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <video controls width='600'>
        {srcUrl ? (
          <source src={srcUrl} type='video/mp4' />
        ) : (
          <p>No video source provided</p>
        )}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
