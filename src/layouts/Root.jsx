import { Outlet } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

const Root = () => {
  return (
    <div>
      <SearchBar />
      <Outlet />
    </div>
  )
}

export default Root