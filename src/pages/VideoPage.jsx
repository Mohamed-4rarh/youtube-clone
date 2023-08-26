import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import SuggestedVideos from '../components/SuggestedVideos';

const VideoPage = () => {
  const [videoData, setVideoData] = useState([])
  const {videoId} = useParams()
  useEffect(() => {
    const params = {
      part: "contentDetails,snippet,statistics",
      id: videoId
    };
    const GetData = async () => {
      const response = await useFetch(
        "https://youtube-v31.p.rapidapi.com/videos", params
      );
      setVideoData(response.items)
    }
    GetData()
  }, [videoId])
  console.log(videoData)
  return (
    <div className='flex flex-col lg:flex-row justify-between gap-10 px-5'>
      {videoData &&
        videoData.map((vid) => (
          <div className="flex-1 sticky top-[65px] sm:top-[73px] bg-black" key={videoId}>
            <iframe
              width='100%'
              className='h-[220px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[640px] rounded-xl'
              src={`https://www.youtube-nocookie.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div>
              <h3 className="text-[#fff]">{vid.snippet.title}</h3>
              
              <details className='text-[#fff]'>
                {vid.snippet.description}
              </details>
            </div>
          </div>
        ))
      }
      <SuggestedVideos />
    </div>
  );
}

export default VideoPage