import {WatchListContext} from '../context/watchListContext'
import {useContext} from 'react'
import { BiHomeAlt2 } from "react-icons/bi"

export const Header = () => {
  const {stockData} = useContext(WatchListContext)
  return(
    <div className="flex justify-around items-center h-15 my-5 ">
      <div className=" border-2 border-gray-100 bg-gray-50 hover:bg-gray-300 p-3 rounded-xl shadow-lg"><BiHomeAlt2/></div>
      <div className="col-span-9 font-mono flex justify-center items-center ">
            <div className="h-10 w-10">
              <img src={stockData.logo} />
            </div>
            <div className="text-gray-900 text-4xl ml-2" >
              {stockData.name}
            </div>
        </div>
      <div></div>
    </div>
  )
}