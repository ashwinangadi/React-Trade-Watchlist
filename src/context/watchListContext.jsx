import { createContext,useState } from "react";

export const WatchListContext = createContext()

export const WatchListContextProvider = ({children}) => {

  

  //StockList
  const [stock, setStock] = useState([])
  const [watchList, setWatchList] = useState(["MSFT","AMZN","AAPL","GOOG"])

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
    
  
  
  return <WatchListContext.Provider value={{watchList, stock, setStock, results, setResults, search, setSearch, addStock, deleteStock}}>{children}</WatchListContext.Provider>
}

