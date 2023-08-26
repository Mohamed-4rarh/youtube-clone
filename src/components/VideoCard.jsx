import {CheckBadgeIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const VideoCard = ({ img, videoPath, title, channelTitle, channelPath}) => {
  return (
    <Link to={videoPath} className="rounded-lg overflow-hidden">
      <div className='flex flex-col justify-between bg-[rgb(16,16,16)] overflow-hidden w-[400px]'>
        <img src={img} alt="video thumbnail" className='w-[400px] h-[200px] rounded-t-md' />
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