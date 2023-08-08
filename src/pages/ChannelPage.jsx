import { useEffect, useState } from "react"
import {useFetch} from '../hooks/useFetch'
import { useParams } from "react-router-dom"

const ChannelPage = () => {
  const [channelData, setChannelData] = useState([])
  const {channelId} = useParams()
  useEffect(() => {
    const params = {
      part: "snippet,statistics",
      id: channelId, // channelId
    };
    const GetData = async () => {
      const response = await useFetch(
        "https://youtube-v31.p.rapidapi.com/channels", params
      );
      setChannelData(response.items)
    }
    GetData()
  }, [channelId])
  console.log(channelData)
  return (
    <div>ChannelPage</div>
  )
}

export default ChannelPage