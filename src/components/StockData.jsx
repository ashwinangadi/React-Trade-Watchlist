import {useEffect, useState, useContext} from 'react'
import finnHub from '../apis/finnHub'
import {WatchListContext} from '../context/watchListContext'

export const StockData = ({symbol}) => {

  //const [stockData, setstockData] = useState([])
  const {stockData, setstockData} = useContext(WatchListContext)
  
  useEffect(()=>{
    let isMounted = true;
    const TOKEN = "cgonqu1r01qlmgv21me0cgonqu1r01qlmgv21meg"
    const fetchData = async ()=>{
      try{
        const response = await finnHub.get('/stock/profile2',{
          params:{
          symbol : symbol,
          token : TOKEN
        }
      })
      console.log(response.data)
        if(isMounted){
          setstockData(response.data)
        }
      }catch (err){
        
      }
    }
    fetchData()
    return () => (isMounted = false)
  },[symbol])
  
  return (
    <div>
      { stockData && (
        <div className="grid grid-cols-4 gap-4 font-mono text-xl m-5">
          <div >
            <div className="text-gray-500">Country</div>
            <div className="text-gray-800">{stockData.country}</div>
          </div>
          <div className="">
            <div className="text-gray-500">Exchange</div>
            <div className="text-gray-800">{stockData.exchange}</div>
          </div>
          <div className="">
            <div className="text-gray-500">Ticker</div>
            <div className="text-gray-800">{stockData.ticker}</div>
          </div>
          <div className="">
            <div className="text-gray-500">Industry</div>
            <div className="text-gray-800">{stockData.finnhubIndustry}</div>
          </div>
          <div className="">
            <div className="text-gray-500">Market Capitalization</div>
            <div className="text-gray-800">{stockData.marketCapitalization}</div>
          </div>
          <div className="">
            <div className="text-gray-500">Shares Outstanding</div>
            <div className="text-gray-800">{stockData.shareOutstanding}</div>
          </div>
          <div className="">
            <div className="text-gray-500">IPO</div>
            <div className="text-gray-800">{stockData.ipo}</div>
          </div>
          <div className="">
            <div className="text-gray-500">Website</div>
            <a className="text-blue-600" href={stockData.weburl}>{stockData.weburl}</a>
          </div>
      </div>)}
    </div>)
}