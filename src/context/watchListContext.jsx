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
  const addStock = (add) => {
    console.log("stock added")
    if(watchList.indexOf(add)=== -1){
      setWatchList([...watchList, add])
    }
  }
  
  //To delete stock from watchlist
  const deleteStock = () => {
    console.log("stock deleted")
  }
    
  
  
  return <WatchListContext.Provider value={{watchList, stock, setStock, results, setResults, search, setSearch, addStock, deleteStock}}>{children}</WatchListContext.Provider>
}

