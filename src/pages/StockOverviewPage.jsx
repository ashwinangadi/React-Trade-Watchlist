
import AutoComplete from '../components/AutoComplete'
import StockList from '../components/StockList'


const StockOverviewPage = () => {
  return(
    <div className="container h-full my-10 border backdrop-blur-lg bg-white/30">
      <div className="text-8xl text-center font-mono my-10 bg-gray-100 text-gray-700 "><div className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 duration-300">Trade Watchlist</div></div>
      <AutoComplete />
      <StockList />
    </div>
  )
}

export default StockOverviewPage