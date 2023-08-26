import { categories } from '../Categories'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const SideBar = ({setCat}) => {
  return (
    <div className='flex w-full gap-5'>
      {
        categories.map((cat) => (
          <Link onClick={() => setCat(cat.name)} key={cat.name} to={`/`} className='flex'>
            <span className='text-[#6d737a] px-4 w-full py-3 text-lg hover:text-[#f00] hover:border-r-[#f00]'>{cat.name}</span>
          </Link>
        ))
      }
    </div>
  )
}

export default SideBar