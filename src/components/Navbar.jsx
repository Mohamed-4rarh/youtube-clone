import { useState } from 'react'
import logo from '../assets/Logo.svg'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState('');
    const handleSearch = () => {
        if(searchValue.trim() !== '') {
            navigate({
                pathname: '/',
                search: `?search=${searchValue}`
            })
        }
    }
  return (
    <div className='bg-[#000000] shadow-lg sticky top-0 right-0 py-5 px-2 flex flex-col sm:flex-row items-center justify-center sm:gap-[50px] gap-5'>
      <div className='flex items-center gap-2'>
        <img className='w-[50px]' src={logo} alt="logo" />
        <span className='font-bold text-[#fff] text-[23px]'>Youtube-Clone</span>
      </div>
      <div className='flex gap-2 justify-center w-full sm:w-[60%]'>
        <input type="text" placeholder='search...' className='py-2 px-3  bg-transparent text-[#fff] text-[16px] w-full border rounded-lg' onChange={(e) => setSearchValue(e.target.value)} />
        <button onClick={handleSearch} className='text-[#fff] border hover:border-[#ff0000] font-semibold text-[16px] py-2 px-3 hover:bg-[#ff0000] rounded-lg'>Search</button>
      </div>
    </div>
  )
}

export default Navbar