import { useState } from 'react'
import logo from '../assets/Logo.svg'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState('');
    // const [cat, setCat] = useState('');
    const handleSearch = () => {
      if(searchValue.trim() !== '') {
          navigate({
              pathname: '/',
              search: `?search=${searchValue}`
          })
      }
    }
    
  return (
    <div className='bg-[#000000] shadow-lg sticky top-0 right-0 py-3 px-2  sm:gap-[50px] '>
      <div className='flex items-center justify-center gap-5'>
        <div className='flex items-center gap-2'>
          <img className='w-[50px]' src={logo} alt="logo" />
          <span className='font-bold text-[#fff] text-[23px] hidden sm:block'>Youtube-Clone</span>
        </div>
        <div className='flex gap-2 justify-center w-full sm:w-[60%]'>
          <input type="text" placeholder='search...' className='py-2 px-3  bg-transparent text-[#fff] text-[16px] w-full border rounded-lg' onChange={(e) => setSearchValue(e.target.value)} />
          <button onClick={handleSearch} className='text-[#fff] border hover:border-[#ff0000] font-semibold text-[16px] py-2 px-3 hover:bg-[#ff0000] rounded-lg'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar