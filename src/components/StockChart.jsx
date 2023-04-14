import Chart from 'react-apexcharts'
import {useState} from 'react'

export const StockChart = ({chartData, symbol}) => {
  const [dateFormat, setDateFormat] = useState("1y")
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
        return year
    }
  }
  
  const color = determineTimeFormat()[determineTimeFormat().length - 1].y - determineTimeFormat()[0].y > 0 ? "#26C281" : "#ed3419"
  
  const options = {
    colors : [color],
    title:{
      text : symbol,
      align : "center",
      style: {
        fontSize: "35px",
        fontWeight: 700,
        color: "#6c757d"
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
    const classes = "border-2 border-gray-100 m-0.5 w-9 h-9 "
    if(button === dateFormat){
      return classes + "bg-gray-300"
    }else{
      return classes + "bg-gray-50"
    }
  }
  
  return <div className="m-5 p-4 bg-white self-center w-[100vh]">
          <Chart options={options} series={series} type="area" width="100%"/>
          <div className="flex justify-center">
            <button className={`${renderButtonSelect("24h")} rounded-l-lg font-medium hover:bg-gray-100`} onClick={()=> setDateFormat("24h")}>D</button>
            <button className={`${renderButtonSelect("7d")} font-medium hover:bg-gray-100`} onClick={()=> setDateFormat("7d")}>W</button>
            <button className={`${renderButtonSelect("1y")} rounded-r-lg font-medium hover:bg-gray-100`} onClick={()=> setDateFormat("1y")}>Y</button>
          </div>
        </div>
}