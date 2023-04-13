import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import finnHub from '../apis/finnHub'
import {StockChart} from '../components/StockChart'
import {StockData} from '../components/StockData'

const formatData = (data) => {
  return data.t.map((el,index)=>{
    return {
      x : el * 1000,
      y : Math.floor(data.c[index])
    }
  })
}

const StockDetailPage = () => {

  const [chartData ,setChartData] = useState()
  const {symbol} = useParams()
  
  useEffect(()=>{
    const TOKEN = "cgonqu1r01qlmgv21me0cgonqu1r01qlmgv21meg"
    const fetchData = async () => {
      const date = new Date();
      const currentTime = Math.floor(date.getTime()/1000)
      let oneDay;
      if(date.getDay() === 6){
         oneDay = currentTime - 2 * 60 * 60 * 24
      }else if(date.getDay() === 0){
         oneDay = currentTime - 3 * 60 * 60 * 24
      }else{
         oneDay = currentTime - 2 * 60 * 60 * 24
      }
      const oneWeek = currentTime - 7 * 60 * 60 * 24
      const oneYear = currentTime - 365 * 60 * 60 * 24

      try{
        const responses = await Promise.all([finnHub.get('/stock/candle',{
            params:{
              symbol:symbol,
              resolution : 30,
              from : oneDay,
              to : currentTime,
              token : TOKEN
            }
          }),finnHub.get('/stock/candle',{
            params:{
              symbol:symbol,
              resolution : 60,
              from : oneWeek,
              to : currentTime,
              token : TOKEN
            }
          }),finnHub.get('/stock/candle',{
            params:{
              symbol:symbol,
              resolution : "W",
              from : oneYear,
              to : currentTime,
              token : TOKEN
            }
          })
        ]);
        
        setChartData({
          day : formatData(responses[0].data),
          week : formatData(responses[1].data),
          year : formatData(responses[2].data)
        })
        
      }catch (err){
        console.log(err)
      }
    }
    fetchData()
  },[symbol])
  return(
    <div>
      <div>
        {chartData && (
        <div>
          <StockChart chartData={chartData} symbol={symbol} />
        </div>
        )}
      </div>
      <div>
        <StockData />
      </div>
    </div>  
  )
}

export default StockDetailPage