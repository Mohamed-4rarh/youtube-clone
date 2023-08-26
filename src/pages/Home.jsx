import { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import SideBar from '../components/SideBar'
import { useSearchParams } from 'react-router-dom'
import VideoCard from '../components/VideoCard'

const Home = () => {
  const [searchParams] = useSearchParams();
  const [cat, setCat] = useState('coding')
  const [videos, setVideos] = useState([])
  useEffect(() => {
    const params = {
      q: searchParams.get('search') || cat || 'coding',
      part: "snippet,id",
      regionCode: "US",
      maxResults: "50",
      order: "date",
    };
    const GetData = async () => {
      const response = await useFetch(
        "https://youtube-v31.p.rapidapi.com/search", params
      );
      setVideos(response.items)
    }
    GetData()
  }, [cat, searchParams])
  console.log(videos)
  return (
    <div>
      <div className='border-b pb-2 border-[#a1a1a1] shadow-lg w-full overflow-x-auto mb-4 bg-[#000000] sticky top-[67px] sm:top-[73px] right-0'>
        <SideBar setCat={setCat} />
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {videos.map((item) => (
          <VideoCard key={item.id.videoId} img={item.snippet.thumbnails.medium.url} videoPath={item.id.videoId} title={item.snippet.title} channelTitle={item.snippet.channelTitle} channelPath={`/channel/${item.snippet.channelId}`} />
        ))}
      </div>
    </div>
  );
}

export default Home