import {useEffect, useState} from 'react'
import finnHub from '../apis/finnHub'
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs"

const StockList = () => {
  const [stock, setStock] = useState([])
  const [watchList, setWatchList] = useState(["GOOGl","MSFT","AMZN"])

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
        //console.log(data)
        if(isMounted){
          setStock(data)
          //console.log(stock)
        } 
      }catch (err) {
        
      }
    }
    fetchData();
    return () => (isMounted = false)
  },[]);

  const changeColor=(change)=>{
    return change > 0 ? "green-700": "red-700"
  }

  const renderIcon=(change)=>{
    return change > 0 ? <BsFillCaretUpFill/>:<BsFillCaretDownFill/>
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
            return(<tr className="table-row cursor-pointer hover:bg-red-600 active:bg-blue-700 focus:ring-green-300">
                    <th className="p-2">{item.symbol}</th>
                    <td>{item.data.c}</td>
                    <td className={`text-${changeColor(item.data.d)}`}>{item.data.d}<span className="inline-flex">{renderIcon(item.data.d)}</span></td>
                    <td className={`text-${changeColor(item.data.dp)}`}>{item.data.dp}<span className="inline-flex">{renderIcon(item.data.d)}</span></td>
                    <td>{item.data.h}</td>
                    <td>{item.data.l}</td>
                    <td>{item.data.o}</td>
                    <td>{item.data.pc}</td>
                  </tr>)
          })}
        </tbody>
      </table>
    </div>)
}

export default StockList