import { useEffect, useContext } from 'react'
import { FaTimes } from "react-icons/fa"
import finnHub from '../apis/finnHub'
import { WatchListContext } from '../context/watchListContext'

const AutoComplete = () => {



  const { results, setResults, search, setSearch, addStock } = useContext(WatchListContext)

  useEffect(() => {
    let isMounted = true
    const TOKEN = "cgonqu1r01qlmgv21me0cgonqu1r01qlmgv21meg"
    const fetchData = async () => {
      let response;
      try {
        response = await finnHub.get("/search", {
          params: {
            q: search,
            token: TOKEN
          }
        })

        if (isMounted) {
          setResults(response.data.result)
        }
      } catch (err) {
        console.log("caught error")
      }
    }
    if (search.length > 0) {
      fetchData()
    } else {
      setResults([])
    }
    return () => (isMounted = false)
  }, [search])

  const clicked = () => {
    document.getElementById('input').value = "";
    setSearch("")
  }

  return (
    <div className="relative container mt-16 flex flex-col items-center mx-auto">
      <div className="relative w-1/2 ">
        <input id="input" className="outline outline-gray-200 rounded-lg w-full p-2 placeholder:italic placeholder:text-slate-400 " type="text" placeholder="Find your stock.." value={search} onChange={(e) => setSearch(e.target.value)} autoComplete="off"></input>
        <button className="z-10 ml-[-1.5rem] text-slate-400" onClick={clicked}><FaTimes /></button>
      </div>
      <div className={`${search.length <= 0 && "invisible"} absolute bg-white w-1/2 mt-11 z-10 overflow-y-auto h-48 rounded-lg`}>
        {results.map(item => {
          return (
            <ul className="flex justify-between cursor-pointer hover:bg-red-600 active:bg-blue-700 focus:ring-green-300 edit:translate-x-0.5" onClick={() => {
              addStock(item.displaySymbol)
              setSearch("")
            }}>
              <li className="ml-1">{item.description}</li><li className="mr-1">{item.displaySymbol}</li>
            </ul>
          )
        })}
      </div>
    </div>
  )
}
export default AutoComplete