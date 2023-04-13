import Chart from 'react-apexcharts'
import {useState} from 'react'

export const StockChart = ({chartData, symbol}) => {
  const [dateFormat, setDateFormat] = useState("24h")
  const {day, week, year} = chartData

   const determineTimeFormat = () =>{
    switch(dateFormat){
      case "24h":
        return day
      case "7d":
        return week
      case "1y":
        return year
      default:
        return day
    }
  }
  
  const color = determineTimeFormat()[determineTimeFormat().length - 1].y - determineTimeFormat()[0].y > 0 ? "#26C281" : "#ed3419"
  
  const options = {
    colors : [color],
    title:{
      text : symbol,
      align : "center",
      style: {
        fontSize: "24px"
      }
    },
    chart : {
      id: "stock data",
      animations : {
        speed : 1300
      }
    },
    xaxis :{
      type : "datetime",
      labels : {
        datetimeUTC: false
      }
    },
    tooltip:{
      x: {
        format: "MMM dd HH:MM"
      }
    }
  }

 
  
  const series = [{
    name: symbol,
    data: determineTimeFormat()
  }]

  const renderButtonSelect = (button) => {
    // write a function for button select,, 7:53:30
  }
  
  return <div className="my-5 p-4 drop-shadow-lg bg-white">
    <Chart options={options} series={series} type="area" width="100%"/>
    <div>
      <button className="border-2 w-9" onClick={()=> setDateFormat("24h")}>D</button>
      <button className="border-2 w-9" onClick={()=> setDateFormat("7d")}>W</button>
      <button className="border-2 w-9" onClick={()=> setDateFormat("1y")}>Y</button>
    </div>
  </div>
}