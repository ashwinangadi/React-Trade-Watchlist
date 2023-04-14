import { createContext,useState, useEffect } from "react";

export const WatchListContext = createContext()

export const WatchListContextProvider = ({children}) => {

  
  //Stock Data
  const [stockData, setstockData] = useState([])
  
  //StockList
  const [stock, setStock] = useState([])
  const [watchList, setWatchList] = useState(localStorage.getItem("watchList")?.split(",") || ["MSFT","AMZN","AAPL","GOOG"])

  //To store in local storage
  useEffect(()=>{
    localStorage.setItem("watchList",watchList)
  },[watchList])

  //AutoComplete
  const[search,setSearch]=useState("");
  const[results, setResults]=useState([])

  //To add stocks to watchlist
  const addStock = (item) => {
    console.log("stock added")
    if(watchList.indexOf(item)=== -1){
      setWatchList([...watchList, item])
    }
  }
  
  //To delete stock from watchlist
  const deleteStock = (item) => {
    console.log("stock deleted",watchList.indexOf(item))
      setWatchList(watchList.toSpliced(watchList.indexOf(item),1))
   
  }
    
  
  
  return <WatchListContext.Provider value={{watchList, stock, setStock, results, setResults, search, setSearch, addStock, deleteStock, stockData, setstockData}}>{children}</WatchListContext.Provider>
}

