import { FC, useEffect, useState } from 'react';
import { LiveVideoWrapper } from './LiveVideo.style';

type LiveVideoProps = {
  videoUrl?: string;
};

const LiveVideo: FC<LiveVideoProps> = ({ videoUrl = 'http://localhost:5000/video_feed' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsLoading(false);
    img.onerror = () => {
      setIsLoading(false);
      setError('Error loading video');
    };
    img.src = videoUrl;
  }, [videoUrl]);

  return (
    <LiveVideoWrapper data-testid="LiveVideo">
      <h3>Live Video</h3>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <img
          src={videoUrl}
          alt="Live video feed"
          style={{ width: '100%', height: 'auto' }}
        />
      )}
    </LiveVideoWrapper>
  );
};

export default LiveVideo;
