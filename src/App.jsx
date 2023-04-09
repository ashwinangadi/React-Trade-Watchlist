import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import StockDetailPage from './pages/StockDetailPage'
import StockOverviewPage from './pages/StockOverviewPage'


export default function App() {
  return (
    <main className="container mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StockOverviewPage />} />
          <Route path='/detail/:symbol' element={<StockDetailPage />} />
        </Routes>
      </BrowserRouter> 
    </main>
  )
}
