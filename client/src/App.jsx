import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePages from "./pages/HomePages"
import CartPage from "./pages/CartPage"
import InvoicesPage from "./pages/InvoicesPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/invoices" element={<InvoicesPage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
