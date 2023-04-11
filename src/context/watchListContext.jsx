import { createContext,useState } from "react";

export const WatchListContext = createContext()

export const WatchListContextProvider = ({children}) => {
  const [stock, setStock] = useState([])
  const [watchList, setWatchList] = useState(["GOOGl","MSFT","AMZN"])
  
  return <WatchListContext.Provider value={{watchList, stock, setStock}}>{children}</WatchListContext.Provider>
}

