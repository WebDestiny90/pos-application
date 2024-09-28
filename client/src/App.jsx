import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePages from "./pages/HomePages"
import CartPage from "./pages/CartPage"
import InvoicesPage from "./pages/InvoicesPage"
import CustomersPage from "./pages/CustomersPage"
import StatisticPage from "./pages/StatisticPage"
import Register from "./pages/auth/Register"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/invoices" element={<InvoicesPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/statistics" element={<StatisticPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
