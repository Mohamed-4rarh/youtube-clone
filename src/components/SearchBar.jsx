import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')
  const handleSearch = () => {
    navigate({
      pathname: '/',
      search: `?search=${searchValue}`
    })
  }
  return (
    <div className=' sticky top-0 bg-black py-4 w-full justify-between flex my-5'>
      <div className='mx-auto w-[900px]'>
        <div className=' flex gap-10 mx-5'>
          <input className='w-full py-3 px-4 bg-black text-[#6d737a] border-[#6d737a] border rounded-lg focus:outline-[#f00]' placeholder='Search...' onChange={(e) => setSearchValue(e.target.value)} type="text" name="search" id="search" />
          <button className='text-[#6d737a] py-3 px-4 border border-[#6d737a] rounded-lg hover:text-[#fff] hover:bg-[#f00] hover:border-[#f00]' onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar