import {useEffect, useState} from 'react'
import finnHub from '../apis/finnHub'

export const StockData = ({symbol}) => {

  const [stockInfo, setStockInfo] = useState([])
  
  useEffect(()=>{
    const TOKEN = "cgonqu1r01qlmgv21me0cgonqu1r01qlmgv21meg"
    const fetchData = async ()=>{
      const response = await finnHub.get('/stock/profile2',{
        params:{
          symbol : symbol,
          token : TOKEN
        }
      })
      console.log(response.data)
      setStockInfo(response.data)
    }
    fetchData()
  },[stockInfo])
  
  return (
    <div className="grid grid-cols-4 gap-4 border-2 mb-5">
      <div className="col-span-4 flex justify-center items-center">
        <div><img src={stockInfo.logo} /></div><div>{stockInfo.name}</div>
      </div>
      <div className="">
        <div>Country</div>
        <div>{stockInfo.country}</div>
      </div>
      <div className="">
        <div>Exchange</div>
        <div>{stockInfo.exchange}</div>
      </div>
      <div className="">
        <div>Industry</div>
        <div>{stockInfo.finnhubIndustry}</div>
      </div>
      <div className="">
        <div>IPO</div>
        <div>{stockInfo.ipo}</div>
      </div>
      <div className="">
        <div>Market Capitalization</div>
        <div>{stockInfo.marketCapitalization}</div>
      </div>
      <div className="">
        <div>Shares Outstanding</div>
        <div>{stockInfo.shareOutstanding}</div>
      </div>
      <div className="">
        <div>Ticker</div>
        <div>{stockInfo.ticker}</div>
      </div>
      <div className="">
        <div>Website</div>
        <div>{stockInfo.weburl}</div>
      </div>
    </div>)
}