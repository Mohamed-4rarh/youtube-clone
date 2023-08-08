import { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import VideoCard from './VideoCard';

const SuggestedVideos = () => {
  const {videoId} = useParams()
  const [suggetsedVideos, setSuggestedVideos] = useState([])
  useEffect(() => {
    const params = {
      relatedToVideoId: videoId,
      part: "id,snippet",
      type: "video",
      maxResults: "50",
    };
    const GetData = async () => {
      const response = await useFetch(
        "https://youtube-v31.p.rapidapi.com/search", params
      );
      setSuggestedVideos(response.items)
    }
    GetData()
  }, [videoId])
  console.log(suggetsedVideos)
  return (
    <div className='flex flex-wrap lg:flex-col lg:flex-nowrap flex-row items-center justify-center gap-5 overflow-y-auto lg:h-[100vh]'>
      {suggetsedVideos &&
        suggetsedVideos.map((item) => (
          <VideoCard
            img={item.snippet.thumbnails.medium.url}
            title={item.snippet.title}
            channelTitle={item.snippet.channelTitle}
            key={item.id.videoId}
            videoPath={`/${item.id.videoId}`}
            channelPath={`/channel/${item.snippet.channelId}`}
          />
        ))}
    </div>
  );
}

export default SuggestedVideos