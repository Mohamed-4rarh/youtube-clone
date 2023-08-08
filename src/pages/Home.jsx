import { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import SideBar from '../components/SideBar'
import { useSearchParams } from 'react-router-dom'
import VideoCard from '../components/VideoCard'

const Home = () => {
  const [searchParams] = useSearchParams();
  const [cat, setCat] = useState('new')
  const [videos, setVideos] = useState([])
  useEffect(() => {
    const params = {
      q: searchParams.get('search') || cat || 'sport',
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
    <div className="flex lg:flex-row flex-col gap-5">
      <div className=" sticky lg:top-[90px] top-[80px] left-0 bg-black w-full">
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