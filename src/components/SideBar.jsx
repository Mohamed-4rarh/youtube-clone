import { categories } from '../Categories'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const SideBar = ({setCat}) => {
  return (
    <div className='w-full lg:w-[180px] lg:sticky top-[80px]'>
      <div className='flex lg:flex-col flex-row lg:overflow-y-auto overflow-x-auto lg:h-[90vh]'>
        {
          categories.map((cat) => (
            <Link onClick={() => setCat(cat.name)} key={cat.name} to={`/`} className='flex'>
              <span className='text-[#6d737a] px-4 w-full py-3 text-lg hover:text-[#f00] hover:border-r-[#f00]'>{cat.name}</span>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default SideBar