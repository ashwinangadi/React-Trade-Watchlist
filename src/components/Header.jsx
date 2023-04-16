import { WatchListContext } from '../context/watchListContext'
import { useContext } from 'react'
import { BiHomeAlt2 } from "react-icons/bi"
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  const { stockData } = useContext(WatchListContext)
  return (
    <div className="flex justify-around items-center h-15 my-5 ">
      <div className="  border-gray-100 bg-gray-50 hover:bg-gray-300 p-3 rounded-xl shadow-lg cursor-pointer ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 duration-300" onClick={() => navigate('/')}><BiHomeAlt2 /></div>
      <div className="col-span-9 font-mono flex justify-center items-center ">
        <div className="h-10 w-10 ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer shadow-md">
          <a className="text-blue-600" href={stockData.weburl}><img src={stockData.logo} /></a>
        </div>
        <div className="text-gray-900 text-xl md:text-4xl ml-2" >
          {stockData.name}
        </div>
      </div>
      <div></div>
    </div>
  )
}