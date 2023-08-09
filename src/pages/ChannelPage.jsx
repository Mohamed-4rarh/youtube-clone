import { useEffect, useState } from "react"
import {useFetch} from '../hooks/useFetch'
import { useParams } from "react-router-dom"
import VideoCard from '../components/VideoCard'
import {CheckBadgeIcon} from '@heroicons/react/24/solid'

const ChannelPage = () => {
  const [channelData, setChannelData] = useState([])
  const [channelVideos, setChannelVideos] = useState([])
  const {channelId} = useParams()
  useEffect(() => {
    const channelParams = {
      part: "snippet,statistics",
      id: channelId, // channelId
    };
    const videosParams = {
      channelId: channelId, //channelId
      part: "snippet,id",
      order: "date",
      maxResults: "50",
    };
    const GetChannelData = async () => {
      const channelResponse = await useFetch(
        "https://youtube-v31.p.rapidapi.com/channels", channelParams
      );
      const channelVideosResponse = await useFetch(
        "https://youtube-v31.p.rapidapi.com/search", videosParams
      );
      setChannelData(channelResponse.items)
      setChannelVideos(channelVideosResponse.items)
    }
    GetChannelData()
  }, [channelId])
  console.log(channelData)
  console.log(channelVideos)
  return (
    <div>
      <div>
        {channelData &&
          channelData.map((channel) => (
            <div key={channelId} className="text-center items-center">
              <div className="h-[300px] relative -z-10">
                <img
                  src={channel.brandingSettings.image.bannerExternalUrl}
                  className="w-[100%] h-[300px]"
                  alt="cover img"
                />
                <div className="flex flex-col items-center z-10 absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <img
                    src={channel.snippet.thumbnails.high.url}
                    className="w-[180px] h-[180px] rounded-full mb-5 border border-[#f00]"
                    alt="img"
                  />
                  <span className="text-[#fff] font-semibold text-lg flex gap-2 items-center w-[400px] justify-center">
                    {channel.snippet.title}{" "}
                    <CheckBadgeIcon className="text-[#f00] w-5" />
                  </span>
                  <span className="text-[#6d737a] font-medium text-base">
                    {channel.statistics.viewCount} Subscriber
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center mt-[180px] gap-5">
                {channelVideos &&
                  channelVideos.map((vid) => (
                    <VideoCard
                      key={vid.id.videoId}
                      videoPath={`/${vid.id.videoId}`}
                      img={vid.snippet.thumbnails.high.url}
                      title={vid.snippet.title}
                      channelTitle={vid.snippet.channelTitle}
                      channelPath={`/channel/${channelId}`}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ChannelPage