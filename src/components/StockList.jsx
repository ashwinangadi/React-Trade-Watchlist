import {useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import finnHub from '../apis/finnHub'
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs"
import {WatchListContext} from '../context/watchListContext'
import {RiDeleteBin3Fill} from "react-icons/ri"

const StockList = () => {
  
  const {watchList, stock, setStock, deleteStock} = useContext(WatchListContext)
  const navigate = useNavigate()

  useEffect(()=>{
    let isMounted =true
    const TOKEN = "cgonqu1r01qlmgv21me0cgonqu1r01qlmgv21meg"
    const fetchData = async () =>{
      try{
        const response = await Promise.all(watchList.map((item) => {
          return finnHub.get("/quote",{
            params : {
              symbol : item,
              token : TOKEN
            }
         })
        }))
        const data = response.map(item =>{
          return {
              data : item.data,
              symbol : item.config.params.symbol
          }
        })
        if(isMounted){
          setStock(data)
        } 
      }catch (err) {
        console.log("error caught")
      }
    }
    fetchData();
    return () => (isMounted = false)
  },[watchList]);

  const changeColor=(change)=>{
    return change > 0 ? "text-green-700": "text-red-700"
  }

  const renderIcon=(change)=>{
    return change > 0 ? <BsFillCaretUpFill/>:<BsFillCaretDownFill/>
  }

  const handleStockSelect = (stck) => {
    navigate(`detail/${stck}`)
  }

  return( 
    <div >
      <table className ="table-auto md:table-fixed mx-auto w-[85%] text-center border-2 border-separate ">
        <thead className="bg-blue-300">
          <tr>
            <th className="p-2">Symbol</th>
            <th>Last</th>
            <th>Change</th>
            <th>Change %</th>
            <th>High</th>
            <th>Low</th>
            <th>Open</th>
            <th>Close</th>
            
          </tr>
        </thead>
        <tbody className="border-2 bg-blue-100 ">
          {stock.map(item => {
            return(<tr className="table-row focus:ring-green-300">
                    <th className="p-2 cursor-pointer hover:bg-red-600 active:bg-blue-700" onClick={()=> handleStockSelect(item.symbol)} >{item.symbol}</th>
                    <td>{item.data.c}</td>
                    <td className={`${changeColor(item.data.d)}`}>{item.data.d}<span className="inline-flex">{renderIcon(item.data.d)}</span></td>
                    <td className={`${changeColor(item.data.dp)}`}>{item.data.dp}<span className="inline-flex">{renderIcon(item.data.d)}</span></td>
                    <td>{item.data.h}</td>
                    <td>{item.data.l}</td>
                    <td>{item.data.o}</td>
                    <td className="flex justify-around p-2">{item.data.pc}<button className=" z-10" onClick={deleteStock}><RiDeleteBin3Fill /></button></td>
                    
                  </tr>)
          })}
        </tbody>
      </table>
    </div>)
}

export default StockList