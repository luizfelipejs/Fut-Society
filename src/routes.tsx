import { BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Soccer from './pages/Soccer'
import SoccerProgramming from './pages/Soccer-programming'

const AppRoutes = function() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/soccer/:channel' element={<Soccer />} />
                <Route path='/soccer-programming' element={<SoccerProgramming/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes