
import AutoComplete from '../components/AutoComplete'
import StockList from '../components/StockList'


const StockOverviewPage = () => {
  return(
    <div className="container max-h-screen">
      <AutoComplete />
      <StockList />
    </div>
  )
}

export default StockOverviewPage