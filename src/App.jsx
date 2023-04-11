import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import StockDetailPage from './pages/StockDetailPage'
import StockOverviewPage from './pages/StockOverviewPage'
import {WatchListContextProvider} from './context/watchListContext'


export default function App() {
  return (
    <main className="container mx-auto">
      <WatchListContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<StockOverviewPage />} />
            <Route path='/detail/:symbol' element={<StockDetailPage />} />
          </Routes>
        </BrowserRouter> 
      </WatchListContextProvider>
    </main>
  )
}
