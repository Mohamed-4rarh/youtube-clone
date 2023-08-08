import {CheckBadgeIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const VideoCard = ({key, img, videoPath, title, channelTitle, channelPath}) => {
  return (
    <Link key={key} to={videoPath} className="bg-[#f9f9f9] rounded-lg w-[320px]">
      <div className=' rounded-lg flex flex-col justify-between bg-[#1e1e1e] overflow-hidden w-[320px]'>
        <img src={img} alt="video thumbnail" className='w-[320px] h-[180px] rounded-t-md' />
        <div className=" rounded-b-lg flex flex-col gap-4 p-4 w-full">
          <span className="text-[white] text-[15px] font-medium inline-block overflow-hidden whitespace-nowrap text-ellipsis">
            {title}
          </span>
          <Link to={channelPath}>
            <span className="text-[#6d737a] flex gap-1 text-center items-center text-[11px] font-semibold">
              {channelTitle}{" "}
              <CheckBadgeIcon className="w-[12px] h-[12px] text-[#f00]" />
            </span>
          </Link>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard